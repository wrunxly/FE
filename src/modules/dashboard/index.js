import React from 'react';
import { Box, Stack, Grid, Typography, IconButton, Paper } from '@mui/material';

import person from '../../assets/Dashboard/Dashboard_girl.png';
import Refresh from '../../assets/Dashboard/Refresh_icon.png';
import Plus from '../../assets/Dashboard/Plus_icon.png';
import Disposisi from '../../assets/Dashboard/Disposisi_icon.png';
import Surat_Masuk from '../../assets/Dashboard/Surat_Masuk_Icon.png';
import Perlu_Tindak_Lanjut from '../../assets/Dashboard/Perlu_tindak_Lanjut_Icon.png';
import Sekretaris_Icon from '../../assets/Dashboard/Sekretaris_Icon.png';
import Delegasi_Icon from '../../assets/Dashboard/Delegasi_Icon.png';
import avatar from '../../assets/Dashboard/avatar_placeholder.png';
import Surat_Internal from '../../assets/Dashboard/Surat_Internal_logo.png';
import Surat_Undangan from '../../assets/Dashboard/Surat_Undangan_logo.png';
import Surat_Eksternal from '../../assets/Dashboard/Surat_Eksternal_logo.png';
import Surat_Delegasi from '../../assets/Dashboard/Surat_Delegasi_logo.png';

import TodoList_Dashboard from '../../@crema/components/Tabs/Dashboard/TodoList_Dashboard';
import Mail_Status from '../../@crema/components/Tabs/Dashboard/Mail_Status';
import Mail_Button from '../../@crema/components/Tabs/Dashboard/Mail_Button';
import Delegasi from '../../@crema/components/Tabs/Dashboard/Delegasi';
import Sekretaris from '../../@crema/components/Tabs/Dashboard/Sekretaris';
import AppCard2 from '@crema/components/AppCard/AppCard2';
import AppScrollbar from '@crema/components/AppScrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../redux/actions/tabActon';

const Dashboard = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleAddTab = (type) => {
    dispatch(addTab(id, tabs, type));
  };
  return (
    <>
      <Box sx={{ backgroundColor: '#F4F4F4' }}>
        <Paper elevation={0} sx={{ marginBottom: 5 }}>
          <Grid container spacing={4} sx={{ paddingX: 8 }}>
            <Grid item xs={11}>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='flex-start'
                spacing={3}
              >
                <Stack direction='column' spacing={3}>
                  <Stack direction='row' spacing={1}>
                    <Typography variant='h1'>
                      Selamat Datang Kembali,
                    </Typography>
                    <Typography variant='h1'>User T0001</Typography>
                  </Stack>
                  {/* input time and date here */}
                  <Typography variant='body1'>
                    11.20 AM Senin, 26 Februari 2024
                  </Typography>
                </Stack>
                <img
                  src={person}
                  style={{ height: '90px', paddingRight: '60px' }}
                />
              </Stack>
            </Grid>
            <Grid item xs={1} alignItems='center' justifyContent='center'>
              <IconButton
                sx={{
                  backgroundColor: '#2E3032',
                  width: 40,
                  height: 40,
                  marginTop: 5,
                  '&:hover': {
                    backgroundColor: '#5C5E61',
                  },
                }}
              >
                <img style={{ height: 20, width: 20 }} src={Refresh} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container columnSpacing={5} padding={3}>
            <Grid item xs={12}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={5}
                alignItems={'center'}
              >
                <Stack flex={1}>
                  <Mail_Button
                    bgColor='#F9E4E4'
                    bgHover='#F4CACA'
                    textColor='#E42313'
                    text='Buat Surat Internal'
                    image={Surat_Internal}
                  />
                </Stack>

                <Stack flex={1}>
                  <Mail_Button
                    bgColor='#F9E5CF'
                    bgHover='#FFDFA6'
                    textColor='#C45900'
                    text='Buat Surat External'
                    image={Surat_Eksternal}
                  />
                </Stack>

                <Stack flex={1}>
                  <Mail_Button
                    bgColor='#DFE4F7'
                    bgHover='#D6E0FF'
                    textColor='#4D6FD4'
                    text='Buat Surat Undangan'
                    image={Surat_Undangan}
                  />
                </Stack>

                <Stack flex={1}>
                  <Mail_Button
                    bgColor='#DCF2EA'
                    bgHover='#A3E6CD'
                    textColor='#429777'
                    text='Buat Surat Delegasi'
                    image={Surat_Delegasi}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        <Grid container columnSpacing={5} minHeight={'100vh'} padding={3}>
          <Grid item xs={9}>
            <Stack direction='column' spacing={5}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                spacing={5}
              >
                <Stack flex={1}>
                  <Mail_Status
                    image={Disposisi}
                    text='Disposisi'
                    boxColor='#429777'
                    counter='14'
                  />
                </Stack>

                <Stack flex={1}>
                  <Mail_Status
                    image={Surat_Masuk}
                    text='Surat masuk'
                    boxColor='#3366FF'
                    counter='45'
                  />
                </Stack>

                <Stack flex={1}>
                  <Mail_Status
                    image={Perlu_Tindak_Lanjut}
                    text='Perlu tindak lanjut'
                    boxColor='#FF7452'
                    counter='34'
                  />
                </Stack>
              </Stack>
              <TodoList_Dashboard />
            </Stack>
          </Grid>
          <Grid item xs={3} height={'100%'}>
            <Stack direction='column' spacing={5}>
              <AppCard2 sx={{ height: '339px', pb: 17 }}>
                <Box
                  sx={{
                    backgroundColor: '#DFE4F7',
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    spacing={2}
                    sx={{ marginBottom: 3, marginLeft: 2, padding: 2 }}
                  >
                    <Stack direction='row' alignItems='center' spacing={2}>
                      <img
                        style={{ height: 16, width: 16 }}
                        src={Sekretaris_Icon}
                      />
                      <Typography sx={{ color: '#2952CC', fontSize: '16px' }}>
                        Sekretaris
                      </Typography>
                    </Stack>
                    <IconButton
                      sx={{
                        backgroundColor: '#3366FF',
                        width: 28,
                        height: 28,
                      }}
                      onClick={() => handleAddTab('Add_Sekretaris')}
                    >
                      <img src={Plus} style={{ width: 'Auto', Height: 20 }} />
                    </IconButton>
                  </Stack>
                </Box>
                <AppScrollbar>
                  <Box
                    sx={{
                      overflowX: 'hidden',
                    }}
                  >
                    <Sekretaris
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />

                    <Sekretaris
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />
                    <Sekretaris
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />

                    <Sekretaris
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />
                  </Box>
                </AppScrollbar>
              </AppCard2>
              <AppCard2 sx={{ height: '339px', pb: 17 }}>
                <Box
                  sx={{
                    backgroundColor: '#F9E5CF',
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    marginTop: 0,
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    spacing={2}
                    sx={{ marginBottom: 3, marginLeft: 2, padding: 2 }}
                  >
                    <Stack direction='row' alignItems='center' spacing={2}>
                      <img
                        style={{ height: 16, width: 16 }}
                        src={Delegasi_Icon}
                      />
                      <Typography sx={{ color: '#C45900', fontSize: '16px' }}>
                        Delegasi
                      </Typography>
                    </Stack>
                    <IconButton
                      sx={{
                        backgroundColor: '#C45900',
                        width: 28,
                        height: 28,
                        marginRight: 150,
                      }}
                      onClick={() => handleAddTab('Add_Delegasi')}
                    >
                      <img src={Plus} />
                    </IconButton>
                  </Stack>
                </Box>
                <AppScrollbar>
                  <Box
                    sx={{
                      overflowX: 'hidden',
                    }}
                  >
                    <Delegasi
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />

                    <Delegasi
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />
                    <Delegasi
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />

                    <Delegasi
                      Profile={avatar}
                      JobDesk='Manager development'
                      ID='Taufik Sulaeman/ 8900002/ ARMS'
                    />
                  </Box>
                </AppScrollbar>
              </AppCard2>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
