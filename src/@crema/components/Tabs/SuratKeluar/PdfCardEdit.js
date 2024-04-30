import React, { useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import TinyMce from './TinyMce';
import jsPDF from 'jspdf';
const PdfCardEdit = ({ jabatan, nama, nik }) => {
  const cardRef = useRef(null);

  const exportToPDF = () => {
    const cardElement = cardRef.current;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [cardElement.offsetWidth, cardElement.offsetHeight]
    });
    pdf.html(cardElement, {
      callback: () => {
        pdf.save('card.pdf');
      }
    });
  };
  return (
    <>
      <Box
        sx={{
          border: '1px solid #D8D8D8',
          maxHeight: '1509px',
          maxWidth: '1121px',
          padding: '20px',
        }}
        ref={cardRef}
      >
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Nomor:
        </Typography>
        <br />
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Jakarta, 29 Juli 2023
        </Typography>
        <br />
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Kepada:
        </Typography>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Dari:
        </Typography>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Lampiran:
        </Typography>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Hal:
        </Typography>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Tanggal:
        </Typography>
        <br />
        <br />
        <Stack spacing={2}>
          <Typography variant='body2'>Isi Surat:</Typography>
          {/* <Typography variant='body2'>[Konten Surat]</Typography> */}
          <TinyMce />
        </Stack>
        <br />
        <Typography
          variant='subtitle1'
          sx={{ paddingLeft: '75%', mb: 2, pr: 15 }}
        >
          {jabatan}
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          variant='subtitle1'
          sx={{
            paddingLeft: '75%',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          {nama}
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            paddingLeft: '75%',
            mb: 2,
            fontWeight: 'bold',
            pr: 25,
          }}
        >
          {nik}
        </Typography>
        <br />
        <Typography
          variant='subtitle1'
          sx={{ mb: 2, fontWeight: 'bold', textDecoration: 'underline' }}
        >
          Tembusan
        </Typography>
      </Box>
      <button onClick={exportToPDF}>Export to PDF</button>
    </>
  );
};
PdfCardEdit.propTypes = {
  jabatan: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  divisi: PropTypes.string.isRequired,
  nik: PropTypes.string.isRequired,
  kodeDepartemen: PropTypes.string.isRequired,
  departemen: PropTypes.string.isRequired,
  kantorKota: PropTypes.string.isRequired,
};
export default PdfCardEdit;
