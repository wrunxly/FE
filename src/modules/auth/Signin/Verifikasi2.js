import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import ArrowBackButton from '@crema/components/ArrowBackButton/ArrowBackButton';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FooterAuth from './FooterAuth';

const Verifikasi2 = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi3');
  };

  const kodeTelpon = [
    { label: +62 },
    { label: +2 },
    { label: +3 },
    { label: +4 },
    { label: +5 },
  ];
  const [selectedOption, setSelectedOption] = useState(kodeTelpon[0]);

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
  };
  return (
    <Box
      width='50vw'
      height='95%'
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #D8D8D8',
      }}
    >
      <Box mt='162px' px='105px'>
        <Stack direction='row' alignItems='center'>
          <Box pt='10px'>
            <ArrowBackButton path='/signin/verifikasi1' />
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

        <Box
          sx={{
            textAlign: 'Left',
            paddingTop: '16px',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: '#474D66',
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            Masukan nomor telepon yang anda percayai. Kami akan mengirim 6-digit
            kode keamanan untuk mengkonfirmasi nomor telepon anda melalui SMS.
          </Typography>
        </Box>
        <Box px='95px'>
          <Typography
            paddingTop='32px'
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '20px',
            }}
          >
            Nomer Telepon
          </Typography>
          <Stack direction='row' gap='16px' pt='8px'>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={kodeTelpon}
              value={selectedOption}
              onChange={handleChange}
              sx={{ width: '73px', height: '40px' }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField variant='outlined' style={{ width: '270px' }} />
          </Stack>
        </Box>

        <Stack
          direction='row'
          paddingTop='32px'
          justifyContent='center'
          gap='10px'
        >
          <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{
              width: '360px',
              height: '48px',
              borderRadius: '8px',
              bgcolor: '#E42313',
            }}
          >
            Kirim Kode
          </Button>
        </Stack>

        <FooterAuth />
      </Box>
    </Box>
  );
};

export default Verifikasi2;
