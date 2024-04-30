import React from 'react'
import { 
    Stack, 
    Typography,
    Box,
    InputBase,
    IconButton,
    Tab
} from '@mui/material';
import TableList from './TableList';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import NosearchIcon from '../../assets/icon/NoSearch.svg';
import searchIcon from '../../assets/icon/search.svg';
import { Fonts } from '@crema/constants/AppEnums';
import { styled } from '@mui/material/styles';

function Search() {
    const StyledTab = styled(Tab)(({ theme }) => ({
        borderRadius: '100px',
        backgroundColor: '#ffffff',
        color: '#5C5E61',
        indicatorColor: 'none',
        fontSize: '14px',
        textTransform: 'none',
        minHeight: 0,
        minWidth: 0,
        padding: '10px 43.8px',
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
  return (
    <>
    <TabContext >
        <Box
          sx={{
            backgroundColor: '#F7F8F9',
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid #B1B5BA',
          }}
        >
          <Stack spacing={6} sx={{ width: '60%', marginTop: 20 }}>
            <Box
              sx={{
                height: '40px',
                border: '1px solid #B1B5BA',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: 'white',
              }}
            >
              <InputBase
                placeholder='Cari...'
                sx={{ padding: '20px', width: '100%' }}
              />
              <IconButton>
                {/* <SearchIcon fontSize='medium' /> */}
                <img src={searchIcon} alt='Search Icon' style={{padding:'10px'}}/>
              </IconButton>
            </Box>
            <Box
              sx={{
                border: '1px solid #D8D8D8',
                display: 'flex',
                borderRadius: '100px',
                backgroundColor: 'white',
              }}
            >
              <TabList
                // onChange={handleChange}
                indicatorColor='none'
                sx={{ minHeight: 0 }}
              >
                <StyledTab label='Semua' value='1' />
                <StyledTab label='Surat Masuk' value='2' />
                <StyledTab label='Perlu Tindakan Lanjut' value='3' />
                <StyledTab label='Disposisi' value='4' />
                <StyledTab label='Surat Terkirim' value='5' />
              </TabList>
            </Box>
          </Stack>
        </Box>
        <Stack
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
            }}
        >
            <img src={NosearchIcon} alt='belum dicari' />
            <Typography sx={{fontSize:'32px', fontWeight: Fonts.BOLD}}>Cari Surat Yang Ingin Dicari</Typography>
            <Typography sx={{fontSize:'20px', fontWeight: Fonts.BOLD}}>Masukkan Keyword Di Kolom Pencarian</Typography>
        </Stack>
    </TabContext>
    </>
  )
}

export default Search
