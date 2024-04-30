import React from 'react';
import { Box, Stack } from '@mui/material';
import { Table, TableBody, TableContainer} from '@mui/material';
import CustomRow from '@crema/components/Tabs/Disposisi/TabPanel/CustomRow';
import PropsTypes from 'prop-types';

const AgendaSurat = (props) => {
  const { data } = props;
  return (
    <Stack
      rowGap='16px'
      sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
    >
      <Box className='content-styled-box'>
        <TableContainer>
          <Table aria-label='customized table'>
            <TableBody>
              {data.map((row, index) => (
                <>
                  <CustomRow key={index} name='No Agenda' data={row.noAgenda} />
                  <CustomRow
                    key={index}
                    name='tanggal Dikirim'
                    data={row.tanggalKirim}
                  />
                  <CustomRow key={index} name='No Surat' data={row.noSurat} />
                  <CustomRow key={index} name='Dari' data={row.dari} />
                  <CustomRow key={index} name='Kepada' data={row.kepada} />
                  <CustomRow key={index} name='Perihal' data={row.perihal} />
                  <CustomRow key={index} name='Tembusan' data={row.tembusan} />
                  <CustomRow key={index} name='lampiran' data={row.lampiran} />
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default AgendaSurat;

AgendaSurat.propTypes = {
  data: PropsTypes.any,
};
