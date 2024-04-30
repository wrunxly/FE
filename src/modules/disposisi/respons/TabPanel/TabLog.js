import React from 'react';
import PropsTypes from 'prop-types';
import { Box, Grid, Stack, Typography } from '@mui/material';

import ProfileUser from '../../../../@crema/components/Tabs/Disposisi/ProfileUser';

import { Clock } from 'feather-icons-react';

const TabLog = (props) => {
    const { data } = props;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Konseptor':
                return ['#FFB020', '#FFEFD2'];
            case 'Pemeriksa':
                return ['#2952CC', '#9DB5FF'];
            default:
                return ['#C8CCD2', '#C8CCD2'];
        }
    };

  return (
    <Grid container>
        {data && data.map((item, index) => (
            <>
                <Grid item xs={1}>
                    <Stack sx={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        gap: '10px',
                        paddingTop: '10px',
                    }}>
                        <Box sx={{
                            backgroundColor: (theme) => theme.palette.coofis.primary.main,
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                        }}/>
                        {(index < (data.length) - 1) &&
                            <Box sx={{
                                backgroundColor: (theme) => theme.palette.coofis.primary.main,
                                width: '3px',
                                height: '100%',
                                borderRadius: '35px',
                            }}/>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={11}>
                    <Box
                        className='content-styled-box'
                        key={index}
                        sx={{marginBottom:'30px'}}
                    >
                        <Stack rowGap={'11px'}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                gap={'10px'}
                            >
                                <Clock />
                                <Typography className='content-styled-date'>
                                    {`${item.tanggal} , ${item.jam}`}
                                </Typography>
                            </Stack>
                            <Box className='content-styled-box'>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <ProfileUser
                                        avatar={item.dariPic}
                                        position={item.dariName.toUpperCase()}
                                        name={item.dariKomentar}
                                    />
                                    <Box className='content-box-status' sx={{
                                        backgroundColor: getStatusColor(item.dariStatus)[1],
                                        color: getStatusColor(item.dariStatus)[0]}}
                                    >
                                        {item.dariStatus}
                                    </Box>
                                </Stack>
                            </Box>
                            <Typography className='content-styled-judul'>
                                Kepada
                            </Typography>
                            <Box sx={{padding: '16px 12px'}}>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Box>
                                        <ProfileUser
                                            avatar={item.kepadaPic}
                                            position={item.kepadaJabatan.toUpperCase()}
                                            name={item.kepadaNama.toUpperCase()}
                                        />
                                        <Typography className='content-komentar'>
                                            {item.kepadaKomentar}
                                        </Typography>
                                    </Box>
                                    <Box className='content-box-status' sx={{
                                        backgroundColor: getStatusColor(item.kepadaStatus)[1],
                                        color: getStatusColor(item.kepadaStatus)[0]}}
                                    >
                                        {item.kepadaStatus}
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </>
        ))}
    </Grid>
  )
}

export default TabLog

TabLog.propTypes = {
    data: PropsTypes.any,
};