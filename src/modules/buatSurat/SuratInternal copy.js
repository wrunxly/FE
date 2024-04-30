import HeaderDetail from '@crema/components/HeaderDetail';
import {
  Box,
  Button,
  Grid,
  Icon,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { GrAttachment } from 'react-icons/gr';
import StepImage from '../../assets/BuatSurat/Prgoress bar buat surat.png';
import StepImage2 from '../../assets/BuatSurat/Prgoress bar buat surat 2.png';
import PreviewSuratImage from '../../assets/BuatSurat/Preview Surat.png';
import '../../styles/button.css';
import PreviewSurat from '@crema/components/PreviewSurat';
import { CiFileOn } from 'react-icons/ci';
import Divider from '@mui/material/Divider';
import PPImage from '../../assets/BuatSurat/PP.png';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternal_1';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternal_2';

const SuratInternal = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const handleShow = () => {
    setShowPreview(!showPreview);
  };
  const handleNext = () => {
    setShowNext(!showNext);
  };

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat' save copy translate />
      <Box
        sx={{
          margin: '26px',
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 1px 4px 1px #42424233',
          padding: '20px',
        }}
      >
        {showNext ? (
          <img
            src={StepImage2}
            alt='gambar step'
            style={{
              maxHeight: '120px',
            }}
          />
        ) : (
          <img
            src={StepImage}
            alt='gambar step'
            style={{
              maxHeight: '120px',
            }}
          />
        )}
        <Grid container spacing={5} sx={{}}>
          <Grid item xs={8}>
            <Stack
              spacing={4}
              sx={{
                border: '1px solid #D8D8D8',
                minHeight: '570px',
                borderRadius: '12px',
                padding: '15px',
              }}
            >
              {showNext ? <SuratInternal_2 /> : <SuratInternal_1 />}
              <Stack direction='row' justifyContent='flex-end' spacing={4}>
                {showNext && (
                  <Button
                    variant='contained'
                    sx={{
                      borderRadius: '12px',
                      bgcolor: '#D9DDE3',
                      minWidth: '84px',
                    }}
                    onClick={handleNext}
                  >
                    Kembali
                  </Button>
                )}
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '12px',
                    bgcolor: '#E42313',
                    minWidth: '220px',
                    minHeight: '50px',
                  }}
                  onClick={handleNext}
                >
                  {showNext
                    ? 'Selanjutnya (Pengirim)'
                    : 'Selanjutnya (Penerima)'}
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={4}>
            <Stack spacing={7}>
              <Stack
                spacing={3}
                sx={{
                  border: '1px solid #D8D8D8',
                  minHeight: '208px',
                  borderRadius: '12px',
                  padding: '15px',
                }}
              >
                <Stack direction='row' padding='10px' paddingLeft='17px'>
                  <Icon>
                    <ChatBubbleOutlineOutlinedIcon />
                  </Icon>

                  <Typography
                    variant='h4'
                    sx={{
                      '&::after': {
                        content: '"*"',
                        color: 'red',
                      },
                      paddingLeft: '8px',
                    }}
                  >
                    Komentar
                  </Typography>
                </Stack>
                <TextField
                  id='outlined-multiline-static'
                  placeholder='Tambahkan komentar...'
                  multiline
                  fullWidth
                  rows={4}
                />
                {showPreview && (
                  <Stack spacing={3}>
                    <Stack direction='row' padding='10px' paddingLeft='17px'>
                      <Icon>
                        <CiFileOn />
                      </Icon>

                      <Typography
                        variant='h4'
                        sx={{
                          paddingLeft: '8px',
                        }}
                      >
                        Lampiran
                      </Typography>
                    </Stack>

                    <PreviewSurat />
                  </Stack>
                )}
                <Stack direction='row' spacing={4} justifyContent='flex-end'>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: '24px',
                      borderColor: '#7C8B9D',
                      color: '#000000',
                    }}
                    onClick={handleShow}
                  >
                    <Icon
                      sx={{
                        marginRight: '8px',
                      }}
                    >
                      <GrAttachment
                        style={{
                          fontSize: 18,
                        }}
                      />
                    </Icon>
                    Masukkan file
                  </Button>
                  <Button
                    variant='contained'
                    sx={{
                      borderRadius: '24px',
                      bgcolor: '#4B4747',
                    }}
                  >
                    Kirim
                  </Button>
                </Stack>
              </Stack>

              {showNext && (
                <Stack
                  sx={{
                    border: '1px solid #D8D8D8',
                    minHeight: '116px',
                    borderRadius: '12px',
                  }}
                >
                  <Typography
                    variant='h4'
                    sx={{
                      '&::after': {
                        content: '"*"',
                        color: 'red',
                      },
                      padding: '15px',
                    }}
                  >
                    Komentar
                  </Typography>
                  <Divider />
                  <Grid container padding='15px' spacing={5}>
                    <Grid item xs={3} textAlign='center'>
                      <img
                        src={PPImage}
                        alt='pp'
                        style={{ maxHeight: '40px' }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>Yani Dama Putera</Typography>
                      <Typography>6 Oktober 2021 - 10:09</Typography>
                      <Typography>Mohon Dicek</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign={'center'}>
                      <Typography>7200004</Typography>
                    </Grid>
                  </Grid>
                  <Stack direction='row' spacing={5} px='30px' pb='15px'>
                    <Stack direction='row'>
                      <ChatBubbleOutlineOutlinedIcon />
                      <Typography>2</Typography>
                    </Stack>
                    <Typography>Balas</Typography>
                    <Stack direction='row'>
                      <CiFileOn style={{ fontSize: '25px' }} />
                      <Typography>3</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>

        <img
          src={PreviewSuratImage}
          alt='surat'
          style={{ paddingTop: '20px', maxWidth: '1305px' }}
        />
      </Box>
    </Box>
  );
};

export default SuratInternal;
