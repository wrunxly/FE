import React from 'react';
import PropsTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';

import AppScrollbar from '@crema/components/AppScrollbar';
import ProfileUser from '../../../@crema/components/Tabs/Disposisi/ProfileUser';
import ListStaff from '@crema/components/Tabs/ListStaff';
import { mt } from 'date-fns/locale';

const Info = (props) => {
  const { data } = props;

  return (
    <Stack
      rowGap={'16px'}
      sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
    >
      <Box className='content-styled-box'>
        <Typography className='content-styled-judul'> To </Typography>
        <ListStaff sx={{ mt: 2 }} />
        <Typography className='content-styled-judul' pt='20px'>
          {' '}
          Cc{' '}
        </Typography>
        <ListStaff sx={{ mt: 2 }} />
      </Box>
    </Stack>
  );
};

export default Info;

Info.propTypes = {
  data: PropsTypes.any,
};
