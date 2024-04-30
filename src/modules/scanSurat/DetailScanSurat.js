import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Stack, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import AppScrollbar from '@crema/components/AppScrollbar';

import PdfVector from '../../assets/vector/PdfVector.svg';
import { Menu, Grid as IconGrid } from 'feather-icons-react';
import MiniTab from '@crema/components/MiniTab';

import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../redux/actions/tabActon';
import ListFile from '@crema/components/Tabs/ListFile';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.coofis.tertiary[90],
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

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #d8d8d8',
  borderRadius: '10px',
  padding: '16px',
}));

const pekerjaan = [
  {
    name: 'Tanggal Dikirim',
  },
  {
    name: 'No Surat',
  },
  {
    name: 'Dari',
  },
  {
    name: 'Kepada',
  },
  {
    name: 'Tembusan',
  },
];

const pekerjaan2 = [
  {
    name: 'Lampiran',
  },
  {
    name: 'Keterangan',
  },
  {
    name: 'Kode Unik',
  },
  {
    name: 'Scanner',
  },
];

const DetailScanSurat = ({ props }) => {
  const files = props.file;

  const [listType, setListType] = useState(0);
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleDetailList = () => {
    setListType(1);
  };

  const handleImageList = () => {
    setListType(0);
  };

  const bytesConvert = (bytes) => {
    const mb = bytes / (1024 * 1024);
    if (mb < 1) {
      return (bytes / 1024).toFixed(2) + ' Kb';
    } else {
      return (bytes / (1024 * 1024)).toFixed(2) + ' Mb';
    }
  };

  const handleOpenFile = () => {
    dispatch(addTab(id, tabs, 'Buka Surat'));
  };

  const DetailScan = () => {
    return (
      <Grid
        container
        sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
      >
        <Grid item xs={6}>
          <TableContainer>
            <Table aria-label='customized table'>
              <TableBody>
                {pekerjaan.map((row) => (
                  <TableRow key={row.name}>
                    <StyledTableCell
                      className='medium'
                      style={{ width: '40%' }}
                    >
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell
                      className='medium'
                      style={{ width: '2%', paddingRight: '0px' }}
                    >
                      :
                    </StyledTableCell>
                    <StyledTableCell
                      className='medium'
                      style={{ paddingLeft: '8px' }}
                    >
                      {row.name}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table aria-label='customized table'>
              <TableBody>
                {pekerjaan2.map((row) => (
                  <TableRow key={row.name}>
                    <StyledTableCell
                      className='medium'
                      style={{ width: '40%' }}
                    >
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell
                      className='medium'
                      style={{ width: '2%', paddingRight: '0px' }}
                    >
                      :
                    </StyledTableCell>
                    <StyledTableCell
                      className='medium'
                      style={{ paddingLeft: '8px' }}
                    >
                      {row.name}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  };

  const Lampiran = () => {
    return (
      <Box
        paddingX='16px'
        paddingY='24px'
        borderRadius='10px'
        border='1px solid #E0E0E0'
      >
        <ListFile files={files} />
      </Box>
    );
  };

  return (
    <Box
      backgroundColor={(theme) => theme.palette.coofis.tertiary.bg}
      minHeight='100vh'
    >
      <HeaderDetail nama='Detail Scan Surat' />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor={(theme) => theme.palette.background.paper}
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Detail Scan', content: DetailScan() },
              { name: 'Lampiran', content: Lampiran() },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

DetailScanSurat.propTypes = {
  props: PropTypes.shape({}),
  file: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default DetailScanSurat;
