import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 1.png';

const klarifikasi = [
  {
    value: '1',
    label: 'LB 000 PENELITIAN DAN PENGEMBANGAN',
  },
];

const prioritas = [
  {
    value: '1',
    label: 'Normal',
  },
];

const jenisSurat = [
  {
    value: '1',
    label: 'Biasa',
  },
];

const SuratInternal_1 = () => {
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
            <Typography
              variant='h4'
              sx={{
                '&::after': {
                  content: '"*"',
                  color: 'red',
                },
              }}
            >
              Perihal
            </Typography>
            <TextField
              sx={{ marginTop: '8px' }}
              placeholder={'Perihal Surat'}
              variant='outlined'
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />
            <Typography
              variant='h4'
              sx={{
                '&::after': {
                  content: '"*"',
                  color: 'red',
                },
              }}
            >
              Klarifikasi Masalah
            </Typography>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth
              defaultValue='1'
            >
              {klarifikasi.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography
              variant='body1'
              sx={{
                color: '#5C5E61',
                // width: '370px',
              }}
            >
              Saat klasifikasi masalah dipilih, menampilkan nama klasifikasi
              masalah
            </Typography>
            <Typography variant='h4'>Prioritas Surat</Typography>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth
              defaultValue='1'
            >
              {prioritas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant='h4'>Jenis Surat</Typography>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth
              defaultValue='1'
            >
              {jenisSurat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant='h4'>Lampiran</Typography>
            <TextField
              sx={{ marginTop: '8px' }}
              placeholder={'Perihal Surat'}
              variant='outlined'
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
                  bgcolor: '#E42313',
                  minWidth: '220px',
                  minHeight: '50px',
                }}
                // onClick={handleNext}
              >
                Selanjutnya (Pengirim)
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

export default SuratInternal_1;
