import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import '@coreui/coreui/dist/css/coreui.min.css';
const AuthWrapper = ({ children }) => {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F7FC',
      }}
    >
      {children}
    </Box>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
