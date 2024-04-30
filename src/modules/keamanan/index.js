import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ShieldImage from '../../assets/Keamanan/tameng.svg';
import Shield2Image from '../../assets/icon/shield.svg';
import KeamananImage from '../../assets/Keamanan/keamanan.png';
import MonitorImage from '../../assets/Keamanan/monitor.svg';
import TrashIcon from '../../assets/Keamanan/trash.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Keamanan = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [
    isActive,
    // setActive
  ] = React.useState(true);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <Box
        sx={{
          background:
            'linear-gradient(267.36deg, #C74545 -4.33%, #AA3636 101.59%)',
          height: '281px',
          position: 'relative',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={{ position: 'absolute', zIndex: 0, bottom: 0 }}
        >
          <path
            fill='#fff'
            fillOpacity='10%'
            d='M0,256L30,218.7C60,181,120,107,180,74.7C240,43,300,53,360,85.3C420,117,480,171,540,181.3C600,192,660,160,720,144C780,128,840,128,900,154.7C960,181,1020,235,1080,256C1140,277,1200,267,1260,245.3C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
          ></path>
        </svg>
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundImage: `url(${KeamananImage})`,
            backgroundSize: 'auto',
            backgroundPosition: '95% bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              width: '100%',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                width: '60%',
              }}
            >
              <Typography
                sx={{ fontSize: '32px', fontWeight: 600, color: 'white' }}
              >
                Lindungi Akun Kamu Dengan
              </Typography>
              <Typography
                sx={{ fontSize: '32px', fontWeight: 600, color: 'white' }}
              >
                Verifikasi 2 Langkah
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ paddingX: 8 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 600, mt: 5, mb: 5 }}>
          Keamanan
        </Typography>
        <Box>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              height: '106px',
            }}
          >
            <Stack direction={'row'} gap={5}>
              <img src={Shield2Image} width={'45px'} />
              <Stack>
                <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                  Login Resmi
                </Typography>
                <Typography>
                  Tinjau daftar perangkat di mana Anda tidak perlu menggunakan
                  kode login.
                </Typography>
              </Stack>
            </Stack>
            <Button variant='contained'>Aktivasi</Button>
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              pb: 3,
              mt: 8,
            }}
          >
            <Accordion
              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                p: 3,
                mb: 8,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel1-header'
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'row'} gap={5}>
                    <img src={ShieldImage} width={'45px'} />
                    <Stack>
                      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                        Verifikasi 2 Langkah (Tidak Aktif)
                      </Typography>
                      <Typography>
                        We’ll ask for a code if we notice an attempted login
                        from an unrecognized device or browser.
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <Divider sx={{ mb: 4 }} />
              <AccordionDetails>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  sx={{ paddingLeft: '40px', paddingY: '10px' }}
                >
                  <Stack direction={'row'} gap={5}>
                    <img src={MonitorImage} width={'45px'} />
                    <Stack>
                      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                        MAC {isActive && '- Active'}
                      </Typography>
                      <Typography>
                        Google Chrome - 36.69.140.210, 36.91.231.14,
                        184.86.250.147
                      </Typography>
                    </Stack>
                  </Stack>
                  <IconButton>
                    <img src={TrashIcon} width={'32px'} />
                  </IconButton>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  sx={{ paddingLeft: '40px', paddingY: '10px' }}
                >
                  <Stack direction={'row'} gap={5}>
                    <img src={MonitorImage} width={'45px'} />
                    <Stack>
                      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                        Windows
                      </Typography>
                      <Typography>
                        Google Chrome - 36.69.140.210, 36.91.231.14,
                        184.86.250.147
                      </Typography>
                    </Stack>
                  </Stack>
                  <IconButton>
                    <img src={TrashIcon} width={'32px'} />
                  </IconButton>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  sx={{ paddingLeft: '40px', paddingY: '10px' }}
                >
                  <Stack direction={'row'} gap={5}>
                    <img src={MonitorImage} width={'45px'} />
                    <Stack>
                      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
                        Linux
                      </Typography>
                      <Typography>
                        Google Chrome - 36.69.140.210, 36.91.231.14,
                        184.86.250.147
                      </Typography>
                    </Stack>
                  </Stack>
                  <IconButton>
                    <img src={TrashIcon} width={'32px'} />
                  </IconButton>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Keamanan;
