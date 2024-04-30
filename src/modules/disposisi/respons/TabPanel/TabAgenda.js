import React from 'react';
import PropsTypes from 'prop-types';
import {
    Stack,
    Box,
    TableBody,
    Table,
    TableContainer,
} from '@mui/material';

import CustomRow from '@crema/components/Tabs/Disposisi/TabPanel/CustomRow';

const TabAgenda = (props) => {
    const { data } = props;

  return (
    <Stack rowGap='16px'>
        <Box className='content-styled-box'>
            <TableContainer>
                <Table aria-label='customized table'>
                    <TableBody>
                        {data.map((row, index) => (
                            <>
                                <CustomRow
                                    key={index}
                                    name='Diterima Tanggal'
                                    data={row.diterima}
                                />
                                <CustomRow
                                    key={index}
                                    name='Nomor Agenda'
                                    data={row.nomorAgenda}
                                />
                                <CustomRow
                                    key={index}
                                    name='No Surat'
                                    data={row.nomorSurat}
                                />
                                <CustomRow
                                    key={index}
                                    name='Tanggal Surat'
                                    data={row.tanggal}
                                />
                                <CustomRow
                                    key={index}
                                    name='Lampiran'
                                    data={row.lampiran}
                                />
                                <CustomRow
                                    key={index}
                                    name='Sifat'
                                    data={row.sifat}
                                />
                                <CustomRow
                                    key={index}
                                    name='Perihal'
                                    data={row.perihal}
                                />
                                <CustomRow
                                    key={index}
                                    name='Dari'
                                    data={row.dari}
                                />
                                <CustomRow
                                    key={index}
                                    name='Kepada'
                                    data={row.kepada}
                                />
                                <CustomRow
                                    key={index}
                                    name='Tembusan'
                                    data={row.tembusan.join(', ')}
                                />
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Stack>
  )
}

export default TabAgenda

TabAgenda.propTypes = {
    data: PropsTypes.any,
}