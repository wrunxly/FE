import { IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box, Button, Grid, Icon } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 3.png';

const SuratInternal_3 = () => {
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
                Jabatan
              </Typography>
              <Typography variant='h4' color='red'>
                *
              </Typography>
            </Stack>

            <TextField
              fullWidth
              defaultValue='Kepala Research and Development'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />

            <Stack direction='row'>
              <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                Nama
              </Typography>
              <Typography variant='h4' color='red'>
                *
              </Typography>
            </Stack>

            <TextField
              fullWidth
              defaultValue='Taufik Sulaeman'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />

            <Typography variant='h4'>Divisi</Typography>

            <TextField
              fullWidth
              defaultValue='Divisi Informasi'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />

            <Stack direction='row' spacing={5}>
              <Stack flex={1} spacing={5}>
                <Typography variant='h4'>NIK</Typography>
                <TextField defaultValue='8900002' />
              </Stack>
              <Stack flex={1} spacing={5}>
                <Typography variant='h4'>Kode Departemen</Typography>
                <TextField defaultValue='DIT-11 B 10000' />
              </Stack>
            </Stack>

            <Typography variant='h4'>Departemen</Typography>

            <TextField
              fullWidth
              defaultValue='Decision Support'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />

            <Typography variant='h4'>Kota Kantor</Typography>

            <TextField
              fullWidth
              defaultValue='Bandung'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />

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

export default SuratInternal_3;
