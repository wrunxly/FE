import React, { useState } from 'react';
import { Box, Stack, Grid, TextField, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderDetail from '@crema/components/HeaderDetail';
import LabelInput from '@crema/components/LabelInput';

import UploadFile from '../../assets/icon/uploadfile.svg';
import PdfVector from '../../assets/vector/PdfVector.svg';
import AppScrollbar from '@crema/components/AppScrollbar';
import MiniTab from '@crema/components/MiniTab';
import DropZoneFile from '@crema/components/Tabs/DropZoneFile';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Buttons = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.coofis.primary.main,
  fontSize: '14px',
  boxShadow: 'none',
  padding: '8px 16px',
  minWidth: '90px',
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: theme.palette.coofis.primary.main,
    borderColor: theme.palette.coofis.primary.main,
    boxShadow: 'none',
  },
}));

const BuatScanSurat = () => {
  const [file, setFile] = useState([]);
  const [upload, setUpload] = useState(true);

  const getTotalSize = (files) => {
    let totalSize = 0;
    files.forEach((file) => {
      totalSize += file.size;
    });
    return (totalSize / (1024 * 1024)).toFixed(2);
  };

  const TotalSize = getTotalSize(file);

  const bytesConvert = (bytes) => {
    const mb = bytes / (1024 * 1024);
    if (mb < 1) {
      return (bytes / 1024).toFixed(2) + ' Kb';
    } else {
      return (bytes / (1024 * 1024)).toFixed(2) + ' Mb';
    }
  };

  const handleFileSelected = (event) => {
    const files = event.target.files;
    setFile([...file, ...files]);
    setUpload(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setFile([...file, ...files]);
    setUpload(false);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
    if (newFiles.length == 0) {
      setUpload(true);
    }
  };

  const [formData, setFormData] = useState({
    tanggalSurat: null,
    prioritasSurat: '',
    sifatSurat: '',
    dari: '',
    kepada: '',
    tembusan: '',
    noSurat: '',
    lampiran: '',
    klasifikasiMasalah: '',
    subjek: '',
    keterangan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTanggal = (date) => {
    setFormData({
      ...formData,
      tanggalSurat: date,
    });
  };

  const [value, setValue] = useState(0);

  const handleTabs = (index) => {
    console.log('a');
    setValue(index);
  };

  const ScanSurat = () => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack rowGap='24px'>
              <Grid item xs={6}>
                <Stack rowGap='24px'>
                  <LabelInput
                    type='tanggal'
                    name='tanggalSurat'
                    label='Tanggal Surat'
                    value={formData.tanggalSurat}
                    onChange={handleTanggal}
                  />

                  <LabelInput
                    type='select'
                    name='prioritasSurat'
                    label='Prioritas Surat'
                    item={[
                      { value: 'normal', label: 'Normal' },
                      { value: 'segera', label: 'Segera' },
                    ]}
                    value={formData.prioritasSurat}
                    onChange={handleInputChange}
                  />
                  <LabelInput
                    type='select'
                    name='sifatSurat'
                    label='Sifat Surat'
                    item={[
                      { value: 'biasa', label: 'Biasa' },
                      { value: 'rhs', label: 'RHS' },
                      { value: 'rhs-prib', label: 'RHS-PRIB' },
                    ]}
                    value={formData.sifatSurat}
                    onChange={handleInputChange}
                  />
                </Stack>
              </Grid>
              <LabelInput
                type='input'
                name='dari'
                label='Dari'
                important
                value={formData.dari}
                onChange={handleInputChange}
              />
              <LabelInput
                type='textfield'
                name='kepada'
                label='Kepada'
                important
                under
                value={formData.kepada}
                onChange={handleInputChange}
              />
              <LabelInput
                type='textfield'
                name='tembusan'
                label='Tembusan'
                under
                value={formData.tembusan}
                onChange={handleInputChange}
              />
              <LabelInput
                type='input'
                name='noSurat'
                label='No Surat'
                important
                value={formData.noSurat}
                onChange={handleInputChange}
              />

              <Grid item xs={6}>
                <LabelInput
                  type='input'
                  name='lampiran'
                  label='Lampiran'
                  value={formData.lampiran}
                  onChange={handleInputChange}
                />
              </Grid>

              <LabelInput
                type='input'
                name='klasifikasiMasalah'
                label='Klasifikasi Masalah'
                important
                under
                value={formData.klasifikasiMasalah}
                onChange={handleInputChange}
              />
              <LabelInput
                type='input'
                name='subjek'
                label='Subjek'
                important
                value={formData.subjek}
                onChange={handleInputChange}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack
          padding='16px'
          direction='row'
          justifyContent='center'
          columnGap='16px'
        >
          <Buttons disabled variant='contained'>
            Kembali
          </Buttons>
          <Buttons variant='contained' onClick={() => handleTabs(1)}>
            Selanjutnya (Lainnya)
          </Buttons>
        </Stack>
      </>
    );
  };

  const Lainnya = () => {
    return (
      <>
        <Grid container columnSpacing={4}>
          <Grid item xs={8}>
            <LabelInput label='Lampiran' important />
            <DropZoneFile />
            {/* <Box position='relative'>
              <AppScrollbar
                sx={{
                  height: '330px',
                  width: '100%',
                  position: 'relative',
                  border: '1px dashed #B1B5BA',
                  borderRadius: '10px',
                  overflowY: 'auto',
                }}
                scrollToTop={false}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {upload && (
                  <>
                    <Stack
                      rowGap='8px'
                      justifyContent='center'
                      alignItems='center'
                      position='absolute'
                      top='50%'
                      left='50%'
                      sx={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <img
                        src={UploadFile}
                        alt='Upload File'
                        style={{ height: '54px' }}
                      />
                      <Stack direction='row' columnGap='4px'>
                        <Typography fontSize='18px'>
                          Tarik File atau{' '}
                        </Typography>
                        <Typography
                          fontSize='18px'
                          fontWeight='700'
                          color='#E42313'
                          component='label'
                          sx={{ cursor: 'pointer' }}
                        >
                          Cari
                          <VisuallyHiddenInput
                            type='file'
                            multiple
                            onChange={handleFileSelected}
                          />
                        </Typography>
                      </Stack>
                    </Stack>
                  </>
                )}
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {file.map((file, index) => (
                    <Grid
                      item
                      xs={2}
                      sm={4}
                      md={4}
                      key={index}
                      sx={{
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: (theme) => theme.palette.gray[300],
                        },
                      }}
                    >
                      <Stack margin='16px' alignItems='center' rowGap='8px'>
                        <img
                          src={PdfVector}
                          alt='Pdf File'
                          style={{ height: '75px', width: 'fit-content' }}
                        />
                        <Typography
                          fontSize='12px'
                          sx={{
                            maxWidth: '100px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {file.name}
                        </Typography>
                        <Stack
                          direction='row'
                          justifyContent='center'
                          columnGap='16px'
                        >
                          <Typography fontSize='8px'>
                            {bytesConvert(file.size)}
                          </Typography>
                          <Typography
                            fontSize='8px'
                            onClick={() => handleDeleteFile(index)}
                            style={{ cursor: 'pointer' }}
                          >
                            Delete
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </AppScrollbar>
              {!upload && (
                <Box
                  position='absolute'
                  bottom='0'
                  width='100%'
                  zIndex='1'
                  justifyContent='end'
                  display='flex'
                >
                  <Buttons
                    variant='contained'
                    component='label'
                    sx={{ margin: '16px', borderRadius: '50px' }}
                  >
                    Tambah File Lagi
                    <VisuallyHiddenInput
                      type='file'
                      multiple
                      onChange={handleFileSelected}
                    />
                  </Buttons>
                </Box>
              )}
            </Box> */}
          </Grid>
          <Grid item xs={4}>
            <Box
              marginTop='32px'
              padding='16px'
              border='1px solid #D8D8D8'
              borderRadius='10px'
            >
              <LabelInput
                type='textfield'
                name='keterangan'
                label='keterangan'
                important
                value={formData.keterangan}
                onChange={handleInputChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack paddingTop='16px'>
              <Typography fontWeight='700'>Perhatian :</Typography>
              <Typography fontSize='12px'>
                Total Ukuran Surat & Lampiran yang dapat diproses maksimal 25
                MB.
              </Typography>
            </Stack>
            {TotalSize > 25 && (
              <Stack paddingTop='16px'>
                <Typography fontWeight='700'>Perhatian :</Typography>
                <Typography fontSize='12px'>
                  Besar Ukuran Surat & Lampiran yang dipilih melebihi batas
                </Typography>
              </Stack>
            )}
          </Grid>
        </Grid>
        <Stack
          padding='16px'
          direction='row'
          justifyContent='center'
          columnGap='16px'
        >
          <Buttons variant='contained' onClick={() => handleTabs(0)}>
            Kembali
          </Buttons>
          <Buttons variant='contained'>Kirim</Buttons>
        </Stack>
      </>
    );
  };

  return (
    <Box
      backgroundColor={(theme) => theme.palette.coofis.tertiary.bg}
      minHeight='100vh'
    >
      <HeaderDetail nama='Buat Scan Surat' send save />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor={(theme) => theme.palette.background.paper}
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Scan Surat', content: ScanSurat() },
              { name: 'Lainnya', content: Lainnya() },
            ]}
            changeValue={value}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BuatScanSurat;
