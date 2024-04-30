import { Box, Typography } from '@mui/material';
import React from 'react';

const FooterAuth = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          //   top: 0,
          left: '27%',
          //   right: 0,
          bottom: '6%',
        }}
      >
        <Typography
          variant='h6'
          sx={{
            color: '#A0A4A8',
            fontSize: '14px',
            marginTop: '60px',
          }}
        >
          Ⓒ PT ARM Solusi | version 1.0
        </Typography>
      </Box>
    </>
  );
};

export default FooterAuth;
