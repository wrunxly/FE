import React, { useState } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlusCircle } from 'feather-icons-react';

import exchange from '../../../../assets/icon/exchange.svg';
import ButtonBuatDisposisi from '@crema/components/Tabs/Disposisi/ButtonBuatDisposisi';

const TabBuatAlamat = () => {
    const RenderItem = styled(Stack)(() => ({
        paddingY:'16px',
        gap:'16px',
        '& .render-item-todo-box': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        '& .render-item-todo-checkbox': {
            width: '20px',
            height: '20px',
        },
        '& .render-item-todo-text': {
            fontWeight: '400',
            fontSize: '14px',
        },
        '& .render-item-to-text': {
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'underline',
        },
        '& .render-item-nota-box': {
            display: 'flex',
            padding: '4px 4px 4px 0px',
            gap: '8px',
        },
        '& .render-item-nota-text': {
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '22px',
        },
        '& .render-item-nota-icon': {
            backgroundColor:'#F9F9F9',
            borderRadius:'6px',
            padding:'4px',
        },
    }))

    const CustomSpan = styled('span')(() => ({
        color: 'red',
    }))

    const BoxCopyLog = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        width: 'fit-content',
        height: '40px',
    }))

    const [itemCount, setItemCount] = useState(1);
    const [todos, setTodos] = useState(Array(itemCount).fill(false));
    const [valueLog, setValueLog] = useState('tidak');
    const [nota, setNota] = useState(Array(itemCount).fill(''));

    const handleChangeNota = (event, index) => {
        const newNotas = [...nota];
        newNotas[index] = event.target.value;
        setNota(newNotas);
    };

    const handleChangeCopy = (event) => {
        setValueLog(event.target.value);
    };

    const handleAddItem = () => {
        setItemCount(prevItemCount => prevItemCount + 1);
        setTodos(prevTodos => {
            const newTodos = [...prevTodos];
            newTodos.push(false);
            return newTodos;
        });
        setNota(prevNota => {
            const newNota = [...prevNota];
            newNota.push('');
            return newNota;
        });
    };
    
    const handleRemoveItem = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
            setTodos(prevTodos => {
                const newTodos = [...prevTodos];
                newTodos.pop();
                return newTodos;
            });
            setNota(prevNota => {
                const newNota = [...prevNota];
                newNota.pop();
                return newNota;
            });
        }
    };
    
    const handleTodo = (index) => {
        setTodos(prevTodos => {
            const newTodos = [...prevTodos];
            newTodos[index] = !newTodos[index];
            return newTodos;
        });
    };
    
    const todoChecked = (index) => todos[index];
    
    const RenderItems = () => {
        const items = [];
        for (let i = 0; i < itemCount; i++) {
            items.push(
                <RenderItem key={i}>
                    <Box className='render-item-todo-box'>
                        <Checkbox
                            className='render-item-todo-checkbox'
                            checked={todoChecked(i)}
                            onChange={() => handleTodo(i)}
                        />
                        <Typography className='render-item-todo-text'>
                            Todo
                        </Typography>
                    </Box>

                    <Typography className='render-item-to-text'>
                        Kepada
                        <CustomSpan>*</CustomSpan>
                    </Typography>

                    <Box className='content-styled-box' sx={{height:'90px',position: 'relative'}}>
                        <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                            <PlusCircle />
                        </Box>
                    </Box>

                    <Box className='render-item-nota-box'>
                        <Typography className='render-item-nota-text'>
                            Nota Tindakan
                            <CustomSpan>*</CustomSpan>
                        </Typography>
                        <Box className='render-item-nota-icon'>
                            <img src={exchange} alt='exchange' />
                        </Box>
                    </Box>
                    <Select
                        labelId={`select-label-nota-${i}`}
                        id={`select-nota-${i}`}
                        value={nota[i]}
                        label="Nota"
                        onChange={(event) => handleChangeNota(event, i)}
                        sx={{ width: '60%' }}
                    >
                        <MenuItem value={''}>None</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </RenderItem>
            )
        }
        return items;
    }
    
  return (
    <FormControl fullWidth>
        <Stack rowGap={'16px'}>  
            <Grid container>
                <Grid item xs={8}>
                    <Stack rowGap={'16px'}>
                        <Box className='content-styled-box'>
                            <Stack gap={'10px'}>
                                <Typography sx={{fontWeight: '700', fontSize: '14px'}}>
                                    Diteruskan Dari
                                </Typography>
                                <Typography sx={{fontWeight: '400', fontSize: '14px'}}>
                                    EVITA TUNJUNG SEKAR / 690013
                                </Typography>
                            </Stack>
                        </Box>

                        {RenderItems()}
                        {itemCount > 1 && (
                            <ButtonBuatDisposisi
                                text='Kurangi Disposisi'
                                method={() => handleRemoveItem()}
                            />
                        )}
                        <ButtonBuatDisposisi
                            text='Tambah Disposisi'
                            method={() => handleAddItem()}
                        />

                        <BoxCopyLog>
                            <Typography sx={{fontWeight:'700', fontSize:'14px'}}>
                                Copy Log Disposisi
                            </Typography>
                            <Typography sx={{padding:'12px'}}>
                                :
                            </Typography>
                            <Stack direction={'row'} gap={'35px'}>
                                <RadioGroup
                                    row
                                    aria-labelledby="radio-buttons-gender"
                                    name="controlled-radio-buttons-gender"
                                    value={valueLog}
                                    onChange={handleChangeCopy}
                                >
                                    <FormControlLabel
                                        value="ya"
                                        control={<Radio />}
                                        label="Ya"
                                    />
                                    <FormControlLabel
                                        value="tidak"
                                        control={<Radio />}
                                        label="Tidak"
                                    />
                                </RadioGroup>
                            </Stack>
                        </BoxCopyLog>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={11}>
                    <Stack rowGap={'16px'}>    
                        <Box>
                            <Typography sx={{fontWeight: '700', fontSize: '16px'}}>
                                Lampiran
                                <CustomSpan>*</CustomSpan>
                            </Typography>
                            <Box className='content-styled-box' sx={{height:'250px'}} />
                        </Box>

                        <Box sx={{
                            padding:'8px 24px 8px 24px',
                            lineHeight: '20px',
                        }}>
                            <Typography sx={{
                                color: 'red',
                                fontWeight: '700',
                                fontSize: '14px',
                            }}>Perhatian :</Typography>
                            <Box>
                                <Typography sx={{fontWeight: '400', fontSize: '13px'}}>
                                    Total Ukuran Surat & Lampiran yang dapat diproses{' '}
                                    <CustomSpan>maksimal 25 MB.</CustomSpan>
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </FormControl>
  )
}

export default TabBuatAlamat