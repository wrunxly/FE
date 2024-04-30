import React from 'react';
import {
  Box,
  Stack,
  Grid,
  IconButton,
  InputBase,
  Typography,
  Tab,
} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import TableList from './TableList';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Filter } from 'feather-icons-react';
import { styled } from '@mui/material/styles';
import searchIcon from '../../assets/icon/search.svg';
import NosearchIcon from '../../assets/icon/NoSearch.svg';
import NofoundIcon from '../../assets/icon/NotFound.svg';
import FilterPopover from './IconButton/FilterPopover';

function SearchPage() {
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

  const [value, setValue] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value !== '' ? '1' : null);
  };

  // const handleFilterClick = (event) => {
  //   setOpenFilter(event.currentTarget);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(null);
  // };
  // const open_filter = Boolean(openFilter);

  const handleFilterClick = () => {
    setOpenFilter(!openFilter); // Toggle nilai openFilter
  };

  const handleCloseFilter = () => {
    setOpenFilter(false); // Tutup FilterPopover dengan mengatur openFilter ke false
  };

  return (
    <>
      <TabContext value={value}>
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
                onChange={handleInputChange}
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
                onChange={handleChange}
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
        <TabPanel value={value}>
        {value===null &&(
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
        )}
        {value=== '1' &&(
          <Box sx={{ padding: 10 }}>
            <Grid container justifyContent='space-between' marginBottom={5}>
              <Typography>Semua (200 Hasil)</Typography>
              <Box
                sx={{
                  backgroundColor: '#E42313',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  width: '90px',
                  height: '30px',
                  textAlign: 'center',
                  borderRadius: '100px',
                  lineHeight: '28px',
                }}
                onClick={handleFilterClick}
              >
                Filter 
                <Filter size={16} />
                <FilterPopover open={openFilter} onClose={handleCloseFilter} />
              </Box>
            </Grid>
            <TableList />
          </Box>
        )}
        {value=== '2' &&(
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
        )}
        {value=== '3' &&(
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '90vh'
            }}
          >
            <img src={NofoundIcon} alt='tidak ditemukan' />
            <Typography sx={{fontSize:'32px', fontWeight: Fonts.BOLD}}>Upps Surat Yang Kamu Cari Tidak Ada</Typography>
            <Typography sx={{fontSize:'20px', fontWeight: Fonts.BOLD}}>Mungkin Bisa Cari Keyword Lain</Typography>
          </Stack>
        )}
        
        </TabPanel>
      </TabContext>
    </>
  );
}

export default SearchPage;
