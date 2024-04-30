import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';

const TabContentEditPenerima = () => {
  const Judul = styled(Typography)({
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 0px 0px',
  });
  const handleClick = () => {
    console.log('StyledBox clicked');
  };
  const ButtonCustom = styled(Button)({
    fontWeight: 'bold',
    borderRadius: '10px',
    backgroundColor: '#9DB5FF',
    color: '#474D66',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid #d8d8d8',
    lineHeight: 1.5,
    gap: '5px',
    '&:hover': {
      backgroundColor: '#8C8F93',
      borderColor: '#8C8F93',
      boxShadow: 'none',
    },
  });
  return (
    <>
      <Stack rowGap='11px'>
        <Judul>Kepada</Judul>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {/* {Array.from({ length: 2 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))} */}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
        <Stack direction={'row'} alignItems={'center'}>
          <Judul sx={{ fontSize: '12px', paddingTop: '0px' }}>
            Tampilkan kepada
          </Judul>
          <ButtonCustom>Update</ButtonCustom>
        </Stack>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
        <Judul>Tembusan</Judul>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {/* {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography fontSize='14px' color={'#5C5E61'}>
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        DODDY HADI RUKMANA, ST/720277
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))} */}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
        <Stack direction={'row'} alignItems={'center'}>
          <Judul sx={{ fontSize: '12px', paddingTop: '0px' }}>
            Tampilkan kepada
          </Judul>
          <ButtonCustom>Update</ButtonCustom>
        </Stack>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography fontSize='14px' color={'#5C5E61'}>
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        DODDY HADI RUKMANA, ST/720277
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
      </Stack>
    </>
  );
};

export default TabContentEditPenerima;
