import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Box, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {
  X,
  Edit,
  Printer,
  FileText,
  Copy,
  CornerDownLeft,
  RotateCcw,
  Check,
  Save,
} from 'feather-icons-react';
import HeaderBar from '../../../@crema/components/Tabs/Disposisi/HeaderBar';
import HeaderIconButton from '../../../@crema/components/Tabs/Disposisi/HeaderIconButton';
import TabContentInfo from '../../../@crema/components/Tabs/SuratKeluar/TabContentInfo';
import TabContentPenerima from '../../../@crema/components/Tabs/SuratKeluar/TabContentPenerima';
import TabContentPengirim from '../../../@crema/components/Tabs/SuratKeluar/TabContentPengirim';
import TabContentPenyetuju from '../../../@crema/components/Tabs/SuratKeluar/TabContentPenyetuju';
import TabContentLainnya from '../../../@crema/components/Tabs/SuratKeluar/TabContentLainnya';
import Komentar from '../../../@crema/components/Tabs/SuratKeluar/Komentar';
import TabContentEditPenerima from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPenerima';
import TabContentEditPengirim from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPengirim';
import KomentarEdit from '../../../@crema/components/Tabs/SuratKeluar/KomentarEdit';
import TabContentEditPenyetuju from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPenyetuju';
import TabContentEditLainnya from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditLainnya';
import PdfCard from '@crema/components/Tabs/SuratKeluar/PdfCard';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import AlertDialog from '@crema/components/Tabs/SuratKeluar/ModalAlert';
const LacakProses = () => {
  const [value, setValue] = React.useState('1');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const StyledTab = styled(Tab)(({ theme }) => ({
    borderRadius: '100px',
    backgroundColor: '#ffffff',
    color: '#5C5E61',
    indicatorColor: 'none',
    fontSize: '12px',
    textTransform: 'none',
    minHeight: 0,
    minWidth: 0,
    padding: '10px 26px',
    '&.MuiTabs-indicator': {
      display: 'none',
    },
    '&.Mui-selected': {
      backgroundColor: '#E42313',
      color: '#ffffff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleClose = () => {
    setIsEdit(false);
  };

  return (
    <Box backgroundColor='#F7F8F9'>
      <HeaderBar title='Rincian Surat Pelacakan'>
        {isEdit ? (
          <>
            <HeaderIconButton>
              <Save />
            </HeaderIconButton>
            <HeaderIconButton>
              <Check />
            </HeaderIconButton>
            <HeaderIconButton>
              <CornerDownLeft />
            </HeaderIconButton>
            <HeaderIconButton>
              <RotateCcw />
            </HeaderIconButton>
            <HeaderIconButton method={handleClose}>
              <X />
            </HeaderIconButton>
            <HeaderIconButton>
              <FileText />
            </HeaderIconButton>
            <HeaderIconButton>
              <Copy />
            </HeaderIconButton>
            <HeaderIconButton>
              <X />
            </HeaderIconButton>
          </>
        ) : (
          <>
            <HeaderIconButton method={handleEdit}>
              <Edit />
            </HeaderIconButton>
            <HeaderIconButton>
              <Printer />
            </HeaderIconButton>
            <HeaderIconButton>
              <X />
            </HeaderIconButton>
            <AlertDialog title='Konfirmasi' description='Apakah Anda Yakin Untuk Menyimpan Dokumen Ini?' />
          </>
        )}
      </HeaderBar>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value} sx={{ border: '1px solid red' }}>
                  <Box
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
                      <StyledTab label='Info' value='1' />
                      <StyledTab label='Penerima' value='2' />
                      <StyledTab label='Pengirim' value='3' />
                      <StyledTab label='Penyetuju' value='4' />
                      <StyledTab label='Lainnya' value='5' />
                    </TabList>
                  </Box>
                  <TabPanel
                    value='1'
                    sx={{ paddingTop: '13px', paddingLeft: '0px' }}
                  >
                    {isEdit ? '' : <TabContentInfo />}
                  </TabPanel>
                  <TabPanel
                    value='2'
                    sx={{ paddingTop: '13px', paddingLeft: '0px' }}
                  >
                    {isEdit ? (
                      <TabContentEditPenerima />
                    ) : (
                      <TabContentPenerima />
                    )}
                  </TabPanel>
                  <TabPanel
                    value='3'
                    sx={{ paddingTop: '13px', paddingLeft: '0px' }}
                  >
                    {isEdit ? (
                      <TabContentEditPengirim />
                    ) : (
                      <TabContentPengirim />
                    )}
                  </TabPanel>
                  <TabPanel
                    value='4'
                    sx={{ paddingTop: '13px', paddingLeft: '0px' }}
                  >
                    {isEdit ? (
                      <TabContentEditPenyetuju />
                    ) : (
                      <TabContentPenyetuju />
                    )}
                  </TabPanel>
                  <TabPanel
                    value='5'
                    sx={{ paddingTop: '13px', paddingLeft: '0px' }}
                  >
                    {isEdit ? <TabContentEditLainnya /> : <TabContentLainnya />}
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
            <Grid item xs={4}>
              {isEdit && value === '1' ? (
                ''
              ) : isEdit && (value === '3' || value === '5') ? (
                <KomentarEdit />
              ) : (
                <Komentar />
              )}
            </Grid>
          </Grid>
          {isEdit && value !== '1' ? (
            <PdfCardEdit
            // jabatan={formData.jabatan}
            // nama={formData.nama}
            // divisi={formData.divisi}
            // nik={formData.nik}
            // kodeDepartemen={formData.kodeDepartemen}
            // departemen={formData.departemen}
            // kantorKota={formData.kantorKota}
            />
          ) : (
            <PdfCard />
          )}
        </Box>
      </Box>
    </Box>
  );
};

LacakProses.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
};
export default LacakProses;
