import React from 'react';
import PropsTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';

import AProfile from '../../../../assets/vector/Avatar.png';
import AppScrollbar from '@crema/components/AppScrollbar';
import ProfileUser from '../../../../@crema/components/Tabs/Disposisi/ProfileUser';
import ListStaff from '@crema/components/Tabs/ListStaff';

const TabAlamatDisposisi = (props) => {
  const { data } = props;

  return (
    <Stack rowGap={'16px'}>
      <Typography className='content-styled-judul'>Diteruskan Dari</Typography>
      <Box className='content-styled-box'>
        <ProfileUser
          avatar={AProfile}
          position={'MANAGER IT PLANNING & PORTFOLIO MANAGEMENT'}
          name={'EVITA TUNJUNG SEKAR / 690013'}
        />
      </Box>

      <Typography className='content-styled-judul'>
        Diteruskan Kepada
      </Typography>
      {/* <Box className='content-styled-box' sx={{height: '275px'}}>
            <AppScrollbar>
                {data && data.map((item, index) => (
                    <Box key={index} sx={{paddingY:'6px'}}>
                        <ProfileUser
                            avatar={item.avatar}
                            position={item.position.toUpperCase()}
                            name={item.name.toUpperCase()}
                        />
                    </Box>
                ))}
            </AppScrollbar>
        </Box> */}
      <ListStaff />

      <Typography className='content-styled-judul'>Petunjuk/Catatan</Typography>
      <Box className='content-styled-box' sx={{ height: '178px' }}>
        <Typography>
          Punten Pak Adhi, utk permintaan ini apakah sudah dipenuhi. Terimakasih
        </Typography>
      </Box>
    </Stack>
  );
};

export default TabAlamatDisposisi;

TabAlamatDisposisi.propTypes = {
  data: PropsTypes.any,
};
