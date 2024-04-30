import React from "react";
import { Box, Grid, Stack, Typography, Switch, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import { useState } from "react";

import Add from '../../assets/Dashboard/Plus_icon.png'
import Filter from '../../assets/Dashboard/Filter_icon.png'
import Warning from '../../assets/Dashboard/Warning_icon_blue.png'
import Profile from '../../assets/Dashboard/Profile_icon.png'
import Trash from '../../assets/Dashboard/Trash_icon.png'
import Avatar from '../../assets/Dashboard/avatar_placeholder.png'
import Avatar_Blank from '../../assets/Dashboard/Avatar_icon.png'
import Red_X from '../../assets/Dashboard/Red_x_icon.png'
import Add_Grey from '../../assets/Dashboard/Add_grey_icon.png'


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#E42313',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

const Add_Sekretaris = () => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <> {isActive ? 
            (<Box sx={{backgroundColor: '#F4F4F4', padding: 5, height: '100vh'}} >
                <Stack spacing={5}>
                    <Box sx={{borderRadius: 1, backgroundColor: '#FFFFFF'}}>
                        <Grid container sx={{padding: 5}}>
                            <Grid item xs={12} sx={{margin: 5, paddingX: 2, marginBottom: 10}}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h2">Sekretaris Saya</Typography>
                                    <Stack direction="row" alignItems="center" spacing={3}>
                                        <Box sx={{backgroundColor: '#FFFFFF', border: '1px solid #E42313' , borderRadius: 2, padding: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#D9DDE3'} }}> 
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                                <Typography sx={{color: '#E42313'}}>Urutkan</Typography>
                                                <img src={Filter} style={{height: 20, width: 20}}/>
                                            </Stack>
                                        </Box>
                                        <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#F4CACA'} }} onClick={handleClick}>
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                                <Typography sx={{color: '#FFFFFF'}}>Tambah Sekretaris Baru</Typography>
                                                <img src={Add} style={{width: 20, height: 20}}/>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{margin: 5}}>
                                <AppScrollbar>
                                    <Box sx={{overflowY: 'hidden'}}>
                                        <Stack direction='row'>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#D9DDE3', border: '1px solid #B1B5BA'}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#429777', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>Aktif</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h5">Salies Apriliyanto</Typography>
                                                    <Typography sx={{color: '#5C5E61'}}>8900001</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA', '&:hover': {backgroundColor: '#D9DDE3'} }}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#429777', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>Aktif</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h5">Salies Apriliyanto</Typography>
                                                    <Typography sx={{color: '#5C5E61'}}>8900001</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA', '&:hover': {backgroundColor: '#D9DDE3'} }}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#BF2600', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>Nonaktif</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h5">Salies Apriliyanto</Typography>
                                                    <Typography sx={{color: '#5C5E61'}}>8900001</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA', padding: 1}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <img src={Avatar_Blank} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h4" sx={{textAlign: 'center', color: '#5C5E61'}}>Tambah Sekretaris Baru</Typography>
                                                    <IconButton onClick={handleClick}>
                                                        <img src={Add_Grey} style={{width: 20, height: 20}}/>
                                                    </IconButton>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </AppScrollbar>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor: '#FFFFFF', borderRadius: 1, padding: 7}}>
                        <Box sx={{backgroundColor: '#FFEFD2', border: '1px solid #FFB020', height: 40, width: 264,  display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginBottom: 5}} >
                            <Typography sx={{color: '#FFB020', fontSize: 13}}>
                                Tanggal Pembuatan: 15 Agustus 2021
                            </Typography>
                        </Box>
                        <Grid container spacing={4}>
                            <Grid item xs={2}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 5 }}>
                                    <img src={Profile} style={{width: 187, height: 187, marginLeft: 'auto', marginRight: 'auto'}}/>
                                </Box>
                                <Box sx={{backgroundColor: '#FFFFFF', border: '1px solid #E42313' , borderRadius: 1, padding: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#D9DDE3'} }} flex={1}>
                                    <Stack direction='row' alignItems="center" justifyContent="center" spacing={2}>
                                        <Typography  sx={{color: '#E42313'}}>Hapus Delegasi</Typography>
                                        <img src={Trash} style={{height: 24, width: 24}}/>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack>
                                    <Typography variant="h2">Nama :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>Salies Apriliyanto</Typography>
                                    <Typography variant="h2">Jabatan :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>Kepala Research and Development</Typography>
                                    <Typography variant="h2">No :</Typography>
                                    <Typography sx={{fontSize: '16px'}}>8900001</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography variant="h4">Status :</Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label="Aktif"
                                    />                                    
                                    <Typography variant="h4">Sifat :</Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label="Personal Assistant"
                                    />
                                    <Typography variant="h4">Hak Sekretaris :</Typography>
                                    <Stack direction='row'>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="Biasa"
                                        labelPlacement="End"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="Rhs"
                                        labelPlacement="End"
                                    />
                                <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="Rhs Prib"
                                        labelPlacement="End"
                                    />
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor: '#EBF0FF', borderRadius: 1, padding: 4, paddingY: 7, border: '2px solid #9DB5FF'}}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={3}>
                                <Typography variant="h4" sx={{color: '#2952CC'}}>
                                    Catatan Penting
                                </Typography>
                                <img src={Warning} style={{width: 24, height: 24}}/>
                            </Stack>
                            <Typography sx={{color: '#2952CC'}}>
                                Personal Assistant adalah fitur yang mengubah role sekretaris antara lain :
                            </Typography>
                            <Stack>
                                <Typography sx={{color: '#2952CC'}}>
                                    1.Sekretaris tidak akan terlibat dalam pembuatan surat, tetapi dapat tracking surat melalui menu tracking
                                </Typography>
                                <Typography sx={{color: '#2952CC'}}>
                                    2.Sekretaris dan Pejabat yang mengaktifkan sekretaris akan menerima surat masuk
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>) : 
            (<Box sx={{backgroundColor: '#F4F4F4', padding: 5, height: '100vh'}}>
                <Stack spacing={5}>
                    <Box sx={{borderRadius: 1, backgroundColor: '#FFFFFF'}}>
                        <Grid container  sx={{padding: 5}}>
                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={5} sx={{marginBottom: 5}}>
                                <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2, width: 100, cursor: 'pointer', '&:hover': {backgroundColor: '#F4CACA'} }} onClick={handleClick}>
                                    <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>Kembali</Typography>
                                </Box>
                                <Typography variant="h2">Tambah Sekretaris</Typography>
                            </Stack>
                        </Grid>
                        <Grid container spacing={4} sx={{padding: 5}}>
                            <Grid item xs={2} >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 5 }}>
                                    <img src={Profile} style={{width: 187, height: 187, marginLeft: 'auto', marginRight: 'auto'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack>
                                    <Typography variant="h2">Nama :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>Salies Apriliyanto</Typography>
                                    <Typography variant="h2">Jabatan :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>xxxxxxxxxxxxxxxxxxxx</Typography>
                                    <Typography variant="h2">No :</Typography>
                                    <Typography sx={{fontSize: '16px'}}>xxxxxxxxxxx</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4">Status :</Typography>
                                        <FormControlLabel
                                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                            label="Aktif"
                                        />                                    
                                        <Typography variant="h4">Sifat :</Typography>
                                        <FormControlLabel
                                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                            label="Personal Assistant"
                                        />
                                        <Typography variant="h4">Hak Sekretaris :</Typography>
                                        <Stack direction='row'>
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox />}
                                            label="Biasa"
                                            labelPlacement="End"
                                        />
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox />}
                                            label="Rhs"
                                            labelPlacement="End"
                                        />
                                    <FormControlLabel
                                            value="end"
                                            control={<Checkbox />}
                                            label="Rhs Prib"
                                            labelPlacement="End"
                                        />
                                        </Stack>
                                    </Stack>
                                </Grid>                     
                        </Grid>
                        <Grid container sx={{padding: 5}}>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{backgroundColor: '#E42313', width: 247.5, padding: 2, borderRadius: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#F4CACA'} }} onClick={handleClick}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                        <Typography sx={{color: '#FFFFFF'}}>Tambahkan Sebagai Delegasi</Typography>
                                        <img src={Add} style={{width: 20, height: 20}}/>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor: '#EBF0FF', borderRadius: 1, padding: 4, paddingY: 7, border: '2px solid #9DB5FF'}}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={3}>
                                <Typography variant="h4" sx={{color: '#2952CC'}}>
                                    Catatan Penting
                                </Typography>
                                <img src={Warning} style={{width: 24, height: 24}}/>
                            </Stack>
                            <Typography sx={{color: '#2952CC'}}>
                                Personal Assistant adalah fitur yang mengubah role sekretaris antara lain :
                            </Typography>
                            <Stack>
                                <Typography sx={{color: '#2952CC'}}>
                                    1.Sekretaris tidak akan terlibat dalam pembuatan surat, tetapi dapat tracking surat melalui menu tracking
                                </Typography>
                                <Typography sx={{color: '#2952CC'}}>
                                    2.Sekretaris dan Pejabat yang mengaktifkan sekretaris akan menerima surat masuk
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>)}            
        </>
    )
}

export default Add_Sekretaris;