import React, { useState } from 'react';
import { Tab, Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import CustomDivider from '../../../@crema/components/Tabs/Disposisi/CustomDivider';
import DisposisiWrapper from './DisposisiWrapper';
import TabAlamatDisposisi from './TabPanel/TabAlamatDisposisi';
import TabAgenda from './TabPanel/TabAgenda';
import TabLog from './TabPanel/TabLog';
import TabLainnya from './TabPanel/TabLainnya';
import { diteruskan } from '../../../@crema/services/dummy/content/dataTerusan';
import { pekerjaan } from '../../../@crema/services/dummy/content/dataPekerjaan';
import { log } from '../../../@crema/services/dummy/content/dataLog';
import HeaderDetail from '@crema/components/HeaderDetail';

const DetailSurat = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  return (
    <>
      <DisposisiWrapper>
        <HeaderDetail nama='Detail Surat' save send clipboard globe />
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
                  <Tab
                    className='content-styled-tab'
                    label='Log Disposisi'
                    value='3'
                  />
                  <Tab
                    className='content-styled-tab'
                    label='Lainnya'
                    value='4'
                  />
                </TabList>
              </Box>
              <TabPanel className='content-styled-panel' value='1'>
                <TabAlamatDisposisi data={diteruskan} />
              </TabPanel>
              <TabPanel className='content-styled-panel' value='2'>
                <TabAgenda data={pekerjaan} />
              </TabPanel>
              <TabPanel className='content-styled-panel' value='3'>
                <TabLog data={log} />
              </TabPanel>
              <TabPanel className='content-styled-panel' value='4'>
                <TabLainnya />
              </TabPanel>
            </TabContext>
            <Box
              sx={{
                minHeight: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #D8D8D8',
                marginRight: '12px',
              }}
            ></Box>
          </Box>
        </Box>
      </DisposisiWrapper>
    </>
  );
};

export default DetailSurat;
