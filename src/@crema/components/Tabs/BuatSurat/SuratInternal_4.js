import React, { useState } from 'react';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import AppScrollbar from '../../AppScrollbar';
import { Box, Button, Grid, Icon } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 4.png';
import ComposeMail from '@crema/components/AppAddress';

const SuratInternal_4 = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };
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
              minHeight: '300px',
              borderRadius: '12px',
              padding: '15px',
            }}
          >
            <Stack direction='row'>
              <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                Pemeriksa
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
                      <AddCircleOutlineRoundedIcon onClick={onOpenComposeMail} sx={{ color: 'black' }} />
                    </IconButton>
                  ),
                }}
              />
            </AppScrollbar>

            <Stack direction='row'>
              <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                Pemohon
              </Typography>
              <Typography variant='h4' color='red'>
                *
              </Typography>
            </Stack>

            <TextField
              id='outlined-multiline-static'
              fullWidth
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
                Selanjutnya (lainnya)
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
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      />
    </Box>
  );
};

export default SuratInternal_4;
