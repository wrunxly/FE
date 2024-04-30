import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Divider } from '@mui/material';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
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
import HeaderDetail from '@crema/components/HeaderDetail';
import MiniTab from '@crema/components/MiniTab';
import { useSelector } from 'react-redux';

const PerluTindakLanjut = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  const isEdit = useSelector((state) => state.header.isEdit);
  const value = useSelector((state) => state.header.value);
  return (
    <Box backgroundColor='#F7F8F9'>
      <HeaderDetail nama='Detail Surat Perlu Tindak Lanjut' printer edit />
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <MiniTab
                  tabs={[
                    {
                      name: 'Info',
                      content: <>{isEdit ? '' : <TabContentInfo />}</>,
                    },
                    {
                      name: 'Penerima',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPenerima />
                          ) : (
                            <TabContentPenerima />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Pengirim',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPengirim />
                          ) : (
                            <TabContentPengirim />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Penyetuju',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPenyetuju />
                          ) : (
                            <TabContentPenyetuju />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Lainnya',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditLainnya />
                          ) : (
                            <TabContentLainnya />
                          )}
                        </>
                      ),
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              {isEdit && value === 0 ? (
                ''
              ) : isEdit && (value === 2 || value === 4) ? (
                <KomentarEdit />
              ) : (
                <Komentar />
              )}
            </Grid>
          </Grid>
          <PdfCard />
        </Box>
      </Box>
    </Box>
  );
};

PerluTindakLanjut.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
};
export default PerluTindakLanjut;

// import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';