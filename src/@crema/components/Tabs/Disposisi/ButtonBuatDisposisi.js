import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

const ButtonBuatDisposisi = (props) => {
    const { text, method } = props;

    const StyledStack = styled(Stack)(({theme}) => ({
        backgroundColor: theme.palette.coofis.primary.main,
        color: theme.palette.background.paper,
        borderRadius: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
        width:'100%',
        '&:hover': {
            cursor: 'pointer',
        }
    }))

    const StyledText = styled(Typography)(() => ({
        fontWeight: '700',
        fontSize: '16px',
    }))

  return (
    <StyledStack onClick={method}>
        <StyledText>{text}</StyledText>
    </StyledStack>
  )
}

export default ButtonBuatDisposisi

ButtonBuatDisposisi.propTypes = {
    text: PropTypes.string,
    method : PropTypes.func,
}