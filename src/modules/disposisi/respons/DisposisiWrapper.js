import React from 'react'
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const DisposisiWrapper = ({ children }) => {
  return (
    <Box
        className='disposisiRespons'
        sx={{
            backgroundColor: (theme) => theme.palette.coofis.tertiary.bg,
            width:'100%',
            height: 'auto',
            position: 'relative',
            '& .disposisi-content-body': {
                backgroundColor: (theme) => theme.palette.background.paper,
                padding: 8,
                borderRadius: '10px',
            },
            '& .content-tabs': {
                width:'fit-content',
                border: '1px solid #D8D8D8',
                borderRadius: '100px',
                marginBottom: '30px',
            },
            '& .content-styled-tab': {
                borderRadius: '100px',
                backgroundColor: (theme) => theme.palette.background.paper,
                color: '#5C5E61',
                indicatorColor: 'none',
                fontSize: '12px',
                textTransform: 'none',
                minHeight: 0,
                minWidth: 0,
                padding: '10px 26px',
                '&.MuiTabs-indicator': {
                    display: 'none',
                },
                '&.Mui-selected': {
                    backgroundColor: (theme) => theme.palette.coofis.primary.main,
                    color: (theme) => theme.palette.background.paper,
                    fontWeight: (theme) => theme.typography.fontWeightMedium,
                },
                '&.Mui-focusVisible': {
                    backgroundColor: '#d1eaff',
                },
            },
            '& .content-styled-panel': {
                paddingTop: '12px',
                paddingLeft: '0px',
            },
            '& .content-styled-box': {
                backgroundColor: (theme) => theme.palette.background.paper,
                border: '1px solid #d8d8d8',
                borderRadius: '10px',
                padding: '16px',
            },
            '& .content-styled-judul': {
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '28px',
            },
            '& .content-styled-date': {
                fontWeight: '600',
                fontSize: '12px',
                lineHeight: '18px',
            },
            '& .content-box-status': {
                height: '20px',
                borderRadius:'4px',
                display:'flex',
                alignItems:'center',
                fontWeight:'700',
                fontSize:'11px',
                padding:'0px 12px',
            },
            '& .content-komentar': {
                fontWeight:'400',
                fontSize:'12px',
                lineHeight:'18px',
                paddingLeft:'51px',
            },
        }}
    >
        {children}
    </Box>
  )
}

export default DisposisiWrapper;

DisposisiWrapper.propTypes = {
    children: PropTypes.node,
}