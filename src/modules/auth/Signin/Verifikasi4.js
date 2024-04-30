import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import SuccessImage from '../../../assets/LoginPage/berhasil.png';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import FooterAuth from './FooterAuth';
import { useSelector } from 'react-redux';

const Verifikasi4 = () => {
  const userData = useSelector((state) => state.auth.userData);
  //const tabs = useSelector((state) => state.tab.tabs);
  console.log(userData);
  const { logInWithEmailAndPassword } = useAuthMethod();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = userData;
    // const valuessss = userData();
    // console.log(valuessss);
    logInWithEmailAndPassword(userData);
  };

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
        <Typography
          sx={{
            color: '#151718',
            fontSize: '36px',
            fontWeight: 700,
          }}
        >
          Dua Langkah Verifikasi
        </Typography>

        <Stack
          paddingTop='32px'
          justifyContent='center'
          alignItems='center'
          spacing={3}
        >
          <img
            src={SuccessImage}
            style={{
              maxHeight: '201px',
            }}
            alt='image success'
          />

          <Typography
            paddingTop='32px'
            sx={{
              color: '#474D66',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '28px',
              textAlign: 'center',
              px: '90px',
            }}
          >
            Selamat Anda berhasil Mengaktifkan Dua Langkah Verifikasi
          </Typography>
          <Box paddingTop='32px'>
            <Button
              variant='contained'
              onClick={handleSubmit}
              sx={{
                borderRadius: '8px',
                height: '48px',
                width: '17vw',
                bgcolor: '#E42313',
              }}
            >
              Lanjut Ke Dashboard
            </Button>
          </Box>
        </Stack>

        <FooterAuth />
      </Box>
    </Box>
  );
};

export default Verifikasi4;
