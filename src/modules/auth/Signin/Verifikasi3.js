import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackButton from '@crema/components/ArrowBackButton/ArrowBackButton';
import FooterAuth from './FooterAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '34vw',
  bgcolor: 'background.paper',
  p: '20px',
  borderRadius: '4px',
};

const Verifikasi3 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState(Array(6).fill(''));
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newValues = [...values];
    newValues[index] = value.slice(0, 1);
    setValues(newValues);
    if (value.length === 1) {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace') {
      const newValues = [...values];
      newValues[index] = '';
      setValues(newValues);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi4');
  };

  const allValuesFilled = values.every((value) => value.length === 1);

  return (
    <Box
      width='50vw'
      height='95%'
      display='grid'
      alignContent='center'
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #D8D8D8',
      }}
    >
      <Box mx='120px'>
        <Stack direction='row' alignItems='center'>
          <Box pt='10px'>
            <ArrowBackButton path='/signin/verifikasi2' />
          </Box>
          <Typography
            variant='h1'
            sx={{
              color: '#151718',
              fontSize: '36px',
              fontWeight: 700,
              paddingLeft: '16px',
            }}
          >
            Dua Langkah Verifikasi
          </Typography>
        </Stack>

        <Typography paddingTop='16px' fontSize='16px' fontWeight='400'>
          Kode verifikasi 6-digit telah dikirim ke nomor telepon Anda yang
          diakhiri dengan **********33
        </Typography>

        <Stack marginTop='32px' mx='50px'>
          <Typography fontSize='14px' fontWeight=' 700'>
            Masukan Kode Verifikasi
          </Typography>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
              '& > :not(style)': { m: 2 },
            }}
          >
            <Box
              alignItems='flex-end'
              component='form'
              sx={{
                '& > :not(style)': { m: 1, width: '6ch', height: '3ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                variant='outlined'
                inputRef={refs[0]}
                onChange={(e) => handleInputChange(0, e)}
                onKeyDown={(e) => handleBackspace(0, e)}
                value={values[0]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
              <TextField
                variant='outlined'
                inputRef={refs[1]}
                onChange={(e) => handleInputChange(1, e)}
                onKeyDown={(e) => handleBackspace(1, e)}
                value={values[1]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
              <TextField
                variant='outlined'
                inputRef={refs[2]}
                onChange={(e) => handleInputChange(2, e)}
                onKeyDown={(e) => handleBackspace(2, e)}
                value={values[2]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
            </Box>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 1, width: '6ch', height: '3ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                variant='outlined'
                inputRef={refs[3]}
                onChange={(e) => handleInputChange(3, e)}
                onKeyDown={(e) => handleBackspace(3, e)}
                value={values[3]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
              <TextField
                variant='outlined'
                inputRef={refs[4]}
                onChange={(e) => handleInputChange(4, e)}
                onKeyDown={(e) => handleBackspace(4, e)}
                value={values[4]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
              <TextField
                variant='outlined'
                inputRef={refs[5]}
                onChange={(e) => handleInputChange(5, e)}
                onKeyDown={(e) => handleBackspace(5, e)}
                value={values[5]}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  },
                }}
              />
            </Box>
          </Box>

          <Link
            style={{
              fontSize: '14px',
              fontWeight: '400px',
              textDecoration: 'none',
              marginTop: '30px',
            }}
          >
            Kirim Ulang Kode
          </Link>

          <Button
            disabled={!allValuesFilled}
            variant='outlined'
            onClick={handleOpen}
            fullWidth
            sx={{
              height: '48px',
              marginTop: '23px',
              borderRadius: '8px',
              color: values.every((value) => value.length === 1)
                ? 'white'
                : '#8C8F93',
              backgroundColor: values.every((value) => value.length === 1)
                ? '#E42313'
                : null,
              '&:hover': {
                color: '#F0F0F0',
                bgcolor: '#B22222',
              },
            }}
          >
            Verifikasi
          </Button>
        </Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '28px',
              }}
            >
              Percayai browser ini?
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
                paddingTop: '10px',
              }}
            >
              Jika Anda memilih untuk mempercayai browser ini, Anda tidak akan
              dimintai kode verifikasi saat anda masuk kembali.
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                color: '#DE1B1B',
                paddingTop: '8px',
              }}
            >
              Untuk perangkat publik, kami sangat menyarankan untuk tidak
              mempercayai browser ini.
            </Typography>
            <Stack direction='row' paddingTop='20px' px='30px' spacing={5}>
              <Stack flex={1}>
                <Button
                  variant='contained'
                  sx={{
                    height: '48px',
                    bgcolor: '#8C8F93',
                    '&:hover': {
                      bgcolor: '#656565',
                    },
                  }}
                >
                  Jangan Percaya
                </Button>
              </Stack>
              <Stack flex={1}>
                <Button
                  variant='contained'
                  onClick={handleSubmit}
                  sx={{
                    height: '48px',
                    bgcolor: '#E42313',
                    '&:hover': {
                      bgcolor: '#B22222',
                    },
                  }}
                >
                  Percayai
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>

        <FooterAuth />
      </Box>
    </Box>
  );
};

export default Verifikasi3;
