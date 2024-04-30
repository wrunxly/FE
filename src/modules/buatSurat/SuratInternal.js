import React from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box } from '@mui/material';
import '../../styles/button.css';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternal_1';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternal_2';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternal_3';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternal_4';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternal_5';

const SuratInternal = () => {
  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat' save copy translate />
      <SuratInternal_4 />
      {/* <SuratInternal_5 /> */}
    </Box>
  );
};

export default SuratInternal;
