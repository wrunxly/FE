import { IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppScrollbar from '../../AppScrollbar';
import { Box, Button, Grid, Icon } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import Divider from '@mui/material/Divider';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 2.png';
import PPImage from '../../../../assets/BuatSurat/PP.png';

const SuratInternal_2 = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleShow = () => {
    setShowPreview(!showPreview);
  };

  return (
    <Box
      sx={{
        margin: '26px',
        bgcolor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0px 1px 4px 1px #42424233',
        padding: '20px',
      }}
    >
      <img
        src={StepImage}
        alt='gambar step'
        style={{
          maxHeight: '120px',
        }}
      />

      <Grid container spacing={5}>
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
            <Stack direction='row'>
              <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                Kepada
              </Typography>
              <Typography variant='h4' color='red'>
                *
              </Typography>
            </Stack>
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  ),
                }}
              />
            </AppScrollbar>
            <Stack direction='row' spacing={4} alignItems={'center'}>
              <Typography>tampilkan Kepada</Typography>
              <Typography
                sx={{
                  bgcolor: '#229BD8',
                  padding: '5px',
                  borderRadius: '5px',
                  color: 'white',
                }}
              >
                Update
              </Typography>
            </Stack>
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  ),
                }}
              />
            </AppScrollbar>
            <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
              Tembusan
            </Typography>
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  ),
                }}
              />
            </AppScrollbar>
            <Stack direction='row' spacing={4} alignItems={'center'}>
              <Typography>tampilkan Kepada</Typography>
              <Typography
                sx={{
                  bgcolor: '#229BD8',
                  padding: '5px',
                  borderRadius: '5px',
                  color: 'white',
                }}
              >
                Update
              </Typography>
            </Stack>
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                    </IconButton>
                  ),
                }}
              />
            </AppScrollbar>

            <Stack direction='row' justifyContent='flex-end' spacing={4}>
              <Button
                variant='contained'
                sx={{
                  borderRadius: '12px',
                  bgcolor: '#D9DDE3',
                  color: '#5C5E61',
                  minWidth: '84px',
                }}
                // onClick={handleNext}
              >
                Kembali
              </Button>

              <Button
                variant='contained'
                sx={{
                  borderRadius: '12px',
                  bgcolor: '#E42313',
                  minWidth: '220px',
                  minHeight: '50px',
                }}
                // onClick={handleNext}
              >
                Selanjutnya (Penerima)
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
                  <img src={PPImage} alt='pp' style={{ maxHeight: '40px' }} />
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
          </Stack>
        </Grid>
      </Grid>

      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      />
    </Box>
  );
};

export default SuratInternal_2;
