import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const TabWrapper = ({ children, sx, ...props }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    marginRight: '3%',
    border: '1px solid #d8d8d8',
    ...theme.typography.body2,
    ...sx,
  }));

  return <StyledBox {...props}>{children}</StyledBox>;
};

TabWrapper.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default TabWrapper;
