import React from 'react';
import noPtl from '../../../assets/Disposisi/noPtl.svg';
import { Stack, Typography } from '@mui/material';

const BelumPilih = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <img src={noPtl} alt='belum memilih' />
      <Typography fontWeight={'700'} >Tidak ada yang dipilih</Typography>
    </Stack>
  );
};

export default BelumPilih;