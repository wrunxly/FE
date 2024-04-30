import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import AgendaSurat from './content/agendaSurat';
import { sMasuk } from '../../@crema/services/dummy/content/dataSm';
import Info from './content/info';
import { diteruskan } from '@crema/services/dummy/content/dataTerusan';
import SuratMasukWrapper from './SuratMasukWrapper';
import Lainnya from './content/lainnya';
import PropTypes from 'prop-types';

const SuratMasuk = ({props}) => {
  const files = props.file
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SuratMasukWrapper>
      <HeaderDetail nama='Detail Surat Masuk' send />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <TabContext value={value}>
            <Box
              className='content-tabs'
              sx={{
                border: '1px solid #D8D8D8',
                width: 'fit-content',
                borderRadius: '100px',
              }}
            >
              <TabList
                onChange={handleChange}
                indicatorColor='none'
                sx={{ minHeight: 0 }}
              >
                <Tab
                  className='content-styled-tab'
                  label='Agenda Surat'
                  value='1'
                />
                <Tab className='content-styled-tab' label='Info' value='2' />
                <Tab className='content-styled-tab' label='Lainnya' value='3' />
              </TabList>
            </Box>
            <TabPanel className='content-styled-panel' value='1'>
              <AgendaSurat data={sMasuk} />
            </TabPanel>
            <TabPanel className='content-styled-panel' value='2'>
              <Info data={diteruskan} />
            </TabPanel>
            <TabPanel className='content-styled-panel' value='3'>
              <Lainnya files={files}/>
            </TabPanel>
          </TabContext>

          <Box
            sx={{
              mt: '20px',
              width: '100vh',
            }}
          >
            <Document file={require('./Preview Surat.pdf')}>
              <Page pageNumber={1} width={910} />
            </Document>
          </Box>
        </Box>
      </Box>
    </SuratMasukWrapper>
  );
};
SuratMasuk.propTypes = {
  props: PropTypes.shape({}),
  file: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default SuratMasuk;
