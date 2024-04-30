import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import { initialUrl } from '@crema/constants/AppConst';
import IntlMessages from '@crema/helpers/IntlMessages';
import { ReactComponent as Logo } from '../../../assets/Error/Error 404.svg';
import { useTheme } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import { styled } from '@mui/material/styles';

const Buttons = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.coofis.primary.main,
  fontSize: '14px',
  boxShadow: 'none',
  padding: '16px 124px',
  minWidth: '90px',
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: theme.palette.coofis.primary.main,
    borderColor: theme.palette.coofis.primary.main,
    boxShadow: 'none',
  },
}));

const Error404 = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(initialUrl);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box
        sx={{
          py: { xl: 8 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: { xs: 4, xl: 8 },
            width: '100%',
            maxWidth: { xs: 200, sm: 300, xl: 706 },
            '& svg': {
              width: '100%',
              maxWidth: 400,
            },
          }}
        >
          <Logo fill={theme.palette.primary.main} />
        </Box>
        <Box
          sx={{
            mb: { xs: 4, xl: 5 },
          }}
        >
          <Box
            variant='h3'
            sx={{
              mb: { xs: 3, xl: 4 },
              fontSize: { xs: 20, md: 24 },
              fontWeight: Fonts.MEDIUM,
            }}
          >
            <IntlMessages id='error.404Error' />.
          </Box>
          <Box
            sx={{
              mb: { xs: 4, xl: 5 },
              color: grey[600],
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            <Typography>Kami tidak bisa menemukan halaman yang anda cari.</Typography>
            {/* <Typography>
              <IntlMessages id='error.message1' />
            </Typography>
            <Typography>
              <IntlMessages id='error.message2' />
            </Typography> */}
          </Box>
          <Buttons
            variant='contained'
            color='primary'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
              textTransform: 'capitalize',
            }}
            onClick={onGoBackToHome}
          >
            <IntlMessages id='Kembali Ke Dashboard' />
          </Buttons>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Error404;
