import React from 'react';
import { Box, Grid, Stack } from '@mui/material';

import pdf from '../../../../assets/icon/pdf.svg';
import CustomMoreMenu from '@crema/components/Tabs/Disposisi/TabPanel/CustomMoreMenu';
import CustomMoreItem from '@crema/components/Tabs/Disposisi/TabPanel/CustomMoreItem';
import AppScrollbar from '@crema/components/AppScrollbar';
import { listData1, listData2, listData3 } from '../../../../@crema/services/dummy/sidebar/listDataDisposisi';
import ListFile from '@crema/components/Tabs/ListFile';
const TabLainnya = () => {
    const files = [listData1, listData2, listData3];
  return (
    <Box className='content-styled-box'>
      <Stack rowGap='16px'>
        <ListFile files={files} label='Lampiran' />
        <ListFile files={files} label='Refrensi' />
      </Stack>
    </Box>
  );
};

export default TabLainnya;
