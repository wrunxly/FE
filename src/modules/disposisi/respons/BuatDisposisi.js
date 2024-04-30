import React, { useState } from 'react';
import { Tab, Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import CustomDivider from '../../../@crema/components/Tabs/Disposisi/CustomDivider';
import DisposisiWrapper from './DisposisiWrapper';
import TabBuatAlamat from './TabPanel/TabBuatAlamat';
import TabAgenda from './TabPanel/TabAgenda';

import { pekerjaan } from '../../../@crema/services/dummy/content/dataPekerjaan';
import HeaderDetail from '@crema/components/HeaderDetail';

const BuatDisposisi = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DisposisiWrapper>
      <HeaderDetail nama='Buat Disposisi' send />
      <CustomDivider />
      <Box sx={{ padding: 8 }}>
        <Box className='disposisi-content-body'>
          <TabContext value={value}>
            <Box className='content-tabs'>
              <TabList
                onChange={handleChange}
                indicatorColor='none'
                sx={{ minHeight: 0 }}
              >
                <Tab
                  className='content-styled-tab'
                  label='Alamat Disposisi'
                  value='1'
                />
                <Tab
                  className='content-styled-tab'
                  label='Agenda Surat Masuk'
                  value='2'
                />
              </TabList>
            </Box>
            <TabPanel className='content-styled-panel' value='1'>
              <TabBuatAlamat />
            </TabPanel>
            <TabPanel className='content-styled-panel' value='2'>
              <TabAgenda data={pekerjaan} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </DisposisiWrapper>
  );
};

export default BuatDisposisi;
