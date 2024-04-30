import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../assets/vector/Avatar.png';

import { User, Briefcase, Phone } from 'feather-icons-react';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EEF0F7',
    color: '#262829',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#25282B',
    borderBottom: 'none',
  },
  '&.small': {
    fontSize: 14,
    fontWeight: 'regular',
  },
  '&.medium': {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#52BD94',
    color: '#52BD94',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({}));

const diri = [
  {
    name: 'Nama Lengkap',
  },
  {
    name: 'Alamat',
  },
  {
    name: 'NIK Group',
  },
  {
    name: 'NIK Local',
  },
];
const pekerjaan = [
  {
    name: 'Kota',
  },
  {
    name: 'Organisasi',
  },
  {
    name: 'Division',
  },
  {
    name: 'Departemen',
  },
  {
    name: 'Kode Departemen',
  },
  {
    name: 'Jabatan',
  },
];
const kontak = [
  {
    name: 'Email',
  },
  {
    name: 'Nomor Handphone',
  },
];

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          background:
            'linear-gradient(267.36deg, #C74545 -4.33%, #AA3636 101.59%)',
          paddingY: '42px',
          paddingX: 8,
          position: 'relative',
        }}
      >
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 0,
            marginTop: -60,
          }}
        >
          <path
            fill='#ffffff'
            fillOpacity='10%'
            d='M0,128L30,128C60,128,120,128,180,117.3C240,107,300,85,360,96C420,107,480,149,540,186.7C600,224,660,256,720,245.3C780,235,840,181,900,154.7C960,128,1020,128,1080,128C1140,128,1200,128,1260,133.3C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
          ></path>
        </svg> */}
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid
            container
            alignItems='center'
            columnSpacing={5}
            sx={{ paddingY: 4, paddingX: 3 }}
          >
            <Grid item>
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar sx={{ weight: '50px' }} alt='Profile' src={AProfile} />
              </StyledBadge>
            </Grid>
            <Grid item xs={11} spacing={0}>
              <Typography
                color='text.primary'
                sx={{ fontSize: 20, fontWeight: 700 }}
              >
                Manager Dig Life & Collaboration Operation
              </Typography>
              <Typography
                color='text.third'
                sx={{ fontSize: 14, fontWeight: 400 }}
              >
                DIVISI INFORMATION TECHNOLOGY
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container spacing={8} sx={{ padding: 8 }}>
        <Grid item xs={8}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '25%' }}>
                  Informasi Diri
                </StyledTableCell>
                <StyledTableCell style={{ width: '2%' }}></StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <User/>
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {diri.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell className='medium'>:</StyledTableCell>
                    <StyledTableCell className='small'>
                      {row.name}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '80%' }}>
                  Informasi Kontak
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <Phone/>
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {kontak.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>
                      {row.name} :
                      <Typography className='small'>{row.name}</Typography>
                    </StyledTableCell>
                    <StyledTableCell className='small'>
                      {/* {row.name} */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '17%' }}>
                  Informasi Pekerjaan
                </StyledTableCell>
                <StyledTableCell style={{ width: '2%' }}></StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <Briefcase/>
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {pekerjaan.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell className='medium'>:</StyledTableCell>
                    <StyledTableCell className='small'>
                      {row.name}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
