import React, { useState } from 'react';
import { Modal, Stack, TextField, Typography } from '@mui/material';
import { Box, Button, Grid, Icon } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 5.png';
import AddFileImage from '../../../../assets/BuatSurat/addfile.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '34vw',
  bgcolor: 'background.paper',
  p: '20px',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
};

const SuratInternal_5 = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography variant='h4'>Penerima Delegasi</Typography>

            <Stack
              spacing={2}
              sx={{
                border: '2px dashed #B1B5BA',
                height: '180px',
                borderRadius: '8px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={AddFileImage}
                alt='addfileimage'
                style={{
                  maxHeight: '50px',
                }}
              />
              <Stack direction='row' spacing={1}>
                <Typography variant='h4'>Tarik File atau</Typography>
                <Typography variant='h4' color='#E42313'>
                  Cari
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Typography variant='h5'>Perhatian :</Typography>
              <Typography variant='body1' color='#5C5E61'>
                Total Ukuran Surat & Lampiran yang dapat diproses maksimal 25
                MB.
              </Typography>
            </Stack>

            <Typography variant='h4'>Referensi</Typography>

            <TextField
              id='outlined-multiline-static'
              fullWidth
              multiline
              rows={4}
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
                  minWidth: '66px',
                  minHeight: '50px',
                }}
                onClick={handleOpen}
              >
                Kirim
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Stack sx={style} spacing={5}>
                  <Typography variant='h1'>Konfirmasi</Typography>
                  <Typography variant='h3'>
                    Apakah Anda Yakin Dengan Data Yang Diisi?
                  </Typography>

                  <Stack direction='row' spacing={5}>
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: '25px',
                        bgcolor: '#5C5E61',
                        minHeight: '32px',
                        minWidth: '100px',
                        '&:hover': {
                          bgcolor: '#5C5E61',
                        },
                      }}
                    >
                      Tidak
                    </Button>

                    <Button
                      variant='contained'
                      // onClick={handleSubmit}
                      sx={{
                        bgcolor: '#52BD94',
                        borderRadius: '25px',
                        minHeight: '32px',
                        minWidth: '100px',
                        '&:hover': {
                          bgcolor: '#52BD94',
                        },
                      }}
                    >
                      Ya
                    </Button>
                  </Stack>
                </Stack>
              </Modal>
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

export default SuratInternal_5;
