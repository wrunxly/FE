import React, { useState } from 'react';
import { Stack, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import { useSelector } from 'react-redux';

const TabContentEditPengirim = () => {
  const initialState = useSelector((state) => state.surat);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const Judul = styled(Typography)({
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 8px 0px',
  });

  return (
    <>
      <Stack>
        <Judul>Jabatan</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Kepala Research and Development'}
          variant='outlined'
          value={formData.jabatan}
          onChange={handleChange}
          name='jabatan'
        />
      </Stack>
      <Stack>
        <Judul>Nama</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Taufik Sulaeman'}
          name='nama'
          variant='outlined'
          value={formData.nama}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <Judul>Divisi</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Divisi Informasi'}
          name='divisi'
          variant='outlined'
          value={formData.divisi}
          onChange={handleChange}
        />
      </Stack>
      <Stack direction={'row'} gap={6} sx={{ width: '98%' }}>
        <Stack width={'50%'}>
          <Judul>NIK</Judul>
          <TextField
            sx={{ marginTop: '8px' }}
            placeholder={'8900002'}
            name='nik'
            variant='outlined'
            value={formData.nik}
            onChange={handleChange}
          />
        </Stack>
        <Stack width={'50%'}>
          <Judul>Kode Departemen</Judul>
          <TextField
            sx={{ marginTop: '8px' }}
            placeholder={'DIT-11 B 10000'}
            name='kodeDepartemen'
            variant='outlined'
            value={formData.kodeDepartemen}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
      <Stack>
        <Judul>Departemen</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Decision Support'}
          name='departemen'
          variant='outlined'
          value={formData.departemen}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <Judul>Kantor Kota</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Bandung'}
          name='kantorKota'
          variant='outlined'
          value={formData.kantorKota}
          onChange={handleChange}
        />
      </Stack>
      <br />
      <br />
      <PdfCardEdit
        jabatan={formData.jabatan}
        nama={formData.nama}
        divisi={formData.divisi}
        nik={formData.nik}
        kodeDepartemen={formData.kodeDepartemen}
        departemen={formData.departemen}
        kantorKota={formData.kantorKota}
      />
    </>
  );
};

export default TabContentEditPengirim;
