import React from "react";
import { Grid, Stack, Typography, Box, Badge, Avatar, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from "react";

const StyledBadgeSekretaris = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#0F6EB5',
      color: 'white',
    },
  }));

const Sekretaris = ({ Profile, JobDesk, ID }) => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return(
        <Grid container sx={{margin: 3}}>
            <Grid item xs={3}>
                <StyledBadgeSekretaris
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent="S"
                >
                    <Avatar src={Profile} sx={{border: 2, borderColor: '#0F6EB5', width: 46, height: 46}}/>
                </StyledBadgeSekretaris>
            </Grid>
            <Grid item xs={8}>
                <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>{JobDesk}</Typography>
                        <Box
                            sx={{
                              backgroundColor: isActive ? '#A3E6CD' : '#BF2600',
                              height: '22px',
                              width: isActive ? '48px' : '77px',
                              borderRadius: 2,
                            }}
                        >
                            <Typography 
                                sx={{ 
                                    height: '22px',  
                                    marginLeft: 2, 
                                    color: isActive ? '#317159' : '#262829' }}>
                                {isActive ? 'Aktif' : 'Non Aktif'}
                            </Typography>
                        </Box>
                        <Typography>{ID}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={11} sx={{marginTop: 2}}>
                <Box 
                    alignItems="center" 
                    justifyContent="center"
                    sx={{ 
                        backgroundColor: '#FFEFD2', 
                        color: 'black', 
                        padding: 2, 
                        width: '100%', 
                        maxWidth: 600, 
                        borderRadius: 2,
                        cursor: 'pointer',
                        '@media (min-width: 600px)': { 
                            width: 'auto',
                        },
                        '&:hover': {
                            backgroundColor: '#FFDFA6',
                          }
                    }}
                    onClick={handleClick} 
                >
                     <Typography sx={{ textAlign: 'center' }}>Atur Keaktifan</Typography>
                </Box>
            </Grid>
            <Divider variant="middle" sx={{ mb: 4 }} />
        </Grid>
    )
}

Sekretaris.propTypes = {
    Profile: PropTypes.string.isRequired,
    JobDesk: PropTypes.string.isRequired,
    ID: PropTypes.string.isRequired,
  };

export default Sekretaris;