import React from 'react';
import Box from '@mui/material/Box';
import BingungImage from '../../assets/FAQ/bingung.png';
import KacaImage from '../../assets/FAQ/kaca.png';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import BuatSuratInternalImage from '../../assets/FAQ/buatsurat.png';
import DisposisiImage from '../../assets/FAQ/disposisi.png';
import AddressBookImage from '../../assets/FAQ/addressbook.png';
import SuratMasukImage from '../../assets/FAQ/suratmasuk.png';
import SuratKeluarImage from '../../assets/FAQ/suratkeluar.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

const Bantuan = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
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
      <Box
        sx={{
          width: '100%',
          backgroundImage: `url(${BingungImage}), url(${KacaImage})`,
          backgroundSize: 'auto, auto',
          backgroundPosition: '95% bottom, 5%',
          backgroundRepeat: 'no-repeat, no-repeat',
          position: 'relative',
          height: '100%',
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
          <Box sx={{ textAlign: 'center', width: '60%', mt: 10 }}>
            <Typography
              sx={{ fontSize: '32px', fontWeight: 600, color: 'white' }}
            >
              Halo, Ada yang bisa kami bantu?
            </Typography>
            <Typography
              sx={{ fontSize: '20px', fontWeight: 300, color: 'white', mt: 2 }}
            >
              Cari topik pertanyaan disini
            </Typography>
            <OutlinedInput
              id='outlined'
              endAdornment={<SearchIcon position='end' />}
              inputProps={{
                'aria-label': 'search',
              }}
              placeholder='search'
              sx={{
                backgroundColor: 'white',
                borderRadius: '50px',
                width: '100%',
                mt: 8,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ paddingX: 8, position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#FFFFFF',
              borderRadius: 2,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              mt: 8,
              mb: 8,
            }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 600,
                  mt: 3,
                }}
              >
                Kategori Pertanyaan
              </Typography>
              <Box
                sx={{
                  pr: 5,
                  pl: 5,
                  mt: 5,
                  flexGrow: 1,
                }}
              >
                <Grid container spacing={5}>
                  <Grid item xs={2.4}>
                    <Box
                      sx={{
                        border: '1px solid #CCCCCC',
                        borderRadius: 3,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        height: '78px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ pl: 2 }}>
                        <Stack
                          direction={'row'}
                          sx={{ alignItems: 'center', gap: 4, p: 1 }}
                        >
                          <img src={BuatSuratInternalImage} width={'45px'} />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'black',
                              width: '120px',
                              textAlign: 'start',
                            }}
                          >
                            Buat Surat Internal
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Box
                      sx={{
                        border: '1px solid #CCCCCC', // warna border abu
                        borderRadius: 3,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        height: '78px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ pl: 2 }}>
                        <Stack
                          direction={'row'}
                          sx={{ alignItems: 'center', gap: 4, p: 1 }}
                        >
                          <img src={DisposisiImage} width={'45px'} />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'black',
                              width: '120px',
                              textAlign: 'start',
                            }}
                          >
                            Disposisi
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Box
                      sx={{
                        border: '1px solid #CCCCCC', // warna border abu
                        borderRadius: 3,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        height: '78px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ pl: 2 }}>
                        <Stack
                          direction={'row'}
                          sx={{ alignItems: 'center', gap: 4, p: 1 }}
                        >
                          <img src={AddressBookImage} width={'45px'} />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'black',
                              width: '120px',
                              textAlign: 'start',
                            }}
                          >
                            Address Book
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Box
                      sx={{
                        border: '1px solid #CCCCCC', // warna border abu
                        borderRadius: 3,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        height: '78px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ pl: 2 }}>
                        <Stack
                          direction={'row'}
                          sx={{ alignItems: 'center', gap: 4, p: 1 }}
                        >
                          <img src={SuratMasukImage} width={'45px'} />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'black',
                              width: '120px',
                              textAlign: 'start',
                            }}
                          >
                            Surat Masuk
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Box
                      sx={{
                        border: '1px solid #CCCCCC', // warna border abu
                        borderRadius: 3,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        height: '78px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ pl: 2 }}>
                        <Stack
                          direction={'row'}
                          sx={{ alignItems: 'center', gap: 4, p: 1 }}
                        >
                          <img src={SuratKeluarImage} width={'45px'} />
                          <Typography
                            sx={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: 'black',
                              width: '120px',
                              textAlign: 'start',
                            }}
                          >
                            Surat Keluar
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>
            Paling Sering Ditanyakan
          </Typography>
          <Box
            sx={{
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
                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
                  Dimana saya dapat menemukan menu Template Surat ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                p: 3,
                mb: 8,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel2-header'
              >
                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
                  Dimana saya dapat menemukan menu Template Surat ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                p: 3,
                mb: 8,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel3-header'
              >
                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
                  Dimana saya dapat menemukan menu Template Surat ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                p: 3,
                mb: 8,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel4-header'
              >
                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
                  Dimana saya dapat menemukan menu Template Surat ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Bantuan;
