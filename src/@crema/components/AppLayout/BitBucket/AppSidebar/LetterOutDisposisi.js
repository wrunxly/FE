import * as React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import {
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Tooltip,
  Stack,
  TextField,
  Popover,
  Badge,
} from '@mui/material';

import SuratIn from '../../../../../assets/icon/Surat_Internal.svg';
import SuratEx from '../../../../../assets/icon/Surat_Eksternal.svg';
import SuratUndang from '../../../../../assets/icon/Surat_Undangan.svg';
import SuratDelegasi from '../../../../../assets/icon/Surat_Delegasi.svg';

import { Fonts } from '@crema/constants/AppEnums';

import { Plus, Filter, Search, AlertCircle, Mail } from 'feather-icons-react';

import {
  ArrowForwardIosSharp,
  Close,
} from '@mui/icons-material';

import FilterPopover from './IconButton/FilterPopover';

const Accordions = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummarys = styled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetail = styled(AccordionDetails)(() => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function LetterOutDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
  ];
  const listData2 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Batal',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Selesai',
    },
  ];
  const listData3 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      status: 'Selesai',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      status: 'Diproses',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      status: 'Diproses',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return ['#429777', '#DCF2EA'];
      case 'Diproses':
        return ['#FFB020', '#FFEFD2'];
      case 'Batal':
        return ['#C40D0E', '#F9E4E4'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };

  const getTotalCount = (listData) => {
    return listData.length;
  };

  const [searchForm, setsearchForm] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [openAdd, setOpenAdd] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(null);

  const handleSearchClick = () => {
    setsearchForm(true);
  };

  const handleCloseSearch = () => {
    setsearchForm(false);
    setSearchInput('');
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleAddClick = (event) => {
    setOpenAdd(event.currentTarget);
  };

  const handleCloseAdd = () => {
    setOpenAdd(null);
  };

  const handleFilterClick = (event) => {
    setOpenFilter(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setOpenFilter(null);
  };

  const open_add = Boolean(openAdd);
  const open_filter = Boolean(openFilter);
  const id = open ? 'simple-popover' : undefined;

  return (
    <MainSidebar>
      <Box sx={{ py: 2.5, px: 3.5 }}>
        {searchForm ? (
          <TextField
            variant='outlined'
            size='small'
            placeholder='Search'
            value={searchInput}
            onChange={handleSearchInput}
            InputProps={{
              startAdornment: (
                <IconButton onClick={handleSearchClick} edge='start'>
                  <Search />
                </IconButton>
              ),
              endAdornment: (
                <IconButton onClick={handleCloseSearch} edge='end'>
                  <Close />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              shrink: false,
            }}
            sx={{ width: '88%' }}
          />
        ) : (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs={7}>
              <Typography
                sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
                component='h2'
              >
                Surat Keluar
              </Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
                component='h2'
              >
                Perlu Tindak Lanjut
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <ButtonGroup>
                <IconButton onClick={handleSearchClick}>
                  <Search />
                </IconButton>
                <IconButton onClick={handleFilterClick}>
                  <Filter />
                </IconButton>
                <FilterPopover open={open_filter} onClose={handleCloseFilter} />
                <IconButton
                  aria-describedby={id}
                  variant='contained'
                  onClick={handleAddClick}
                >
                  <Plus />
                </IconButton>
                <Popover
                  id={id}
                  open={open_add}
                  anchorEl={openAdd}
                  onClose={handleCloseAdd}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Box>
                    <ButtonGroup orientation='vertical'>
                      <Button
                        // onClick={}
                        startIcon={<img src={SuratIn} />}
                        sx={{
                          border: 'none',
                          '&:hover': {
                            border: 'none',
                          },
                        }}
                      >
                        Surat Internal
                      </Button>
                      <Button
                        // onClick={}
                        startIcon={<img src={SuratEx} />}
                        sx={{
                          border: 'none',
                          '&:hover': {
                            border: 'none',
                          },
                        }}
                      >
                        Surat Eksternal
                      </Button>
                      <Button
                        // onClick={}
                        startIcon={<img src={SuratUndang} />}
                        sx={{
                          border: 'none',
                          '&:hover': {
                            border: 'none',
                          },
                        }}
                      >
                        Surat Undangan
                      </Button>
                      <Button
                        // onClick={}
                        startIcon={<img src={SuratDelegasi} />}
                        sx={{
                          border: 'none',
                          '&:hover': {
                            border: 'none',
                          },
                        }}
                      >
                        Surat Delegasi
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Popover>
              </ButtonGroup>
            </Grid>
          </Grid>
        )}
      </Box>
      <AppScrollbar
        sx={{
          height: 'calc(100vh - 70px) !important',
        }}
        scrollToTop={false}
      >
        {!isCollapsed && (
          <div>
            {[listData1, listData2, listData3].map((listData, index) => (
              <Accordions key={index}>
                <AccordionSummarys
                  aria-controls={`panel${index + 1}d-content`}
                  id={`panel${index + 1}d-header`}
                >
                  <Typography>
                    Agustus-2021({getTotalCount(listData)})
                  </Typography>
                </AccordionSummarys>
                <AccordionDetail sx={{ padding: 0 }}>
                  <List>
                    {listData.map((item, listIndex) => (
                      <React.Fragment key={listIndex}>
                        <Card
                          sx={{
                            position: 'relative',
                            borderLeft: `6px solid ${
                              getStatusColor(item.status)[0]
                            }`,
                            borderRadius: 0,
                          }}
                        >
                          <Button
                            sx={{ padding: 0, margin: 0, textAlign: 'left' }}
                          >
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid item xs={2}>
                                  <Stack alignItems='center' spacing={4}>
                                    <ListItemAvatar>
                                      <Avatar
                                        alt={`Avatar ${listIndex}`}
                                        src={item.avatarSrc}
                                        sx={{ width: 56, height: 56 }}
                                      />
                                    </ListItemAvatar>
                                    {(item.status === 'Diproses' ||
                                      item.status === 'Batal') && (
                                      <Tooltip title='Danger'>
                                        <IconButton color='error'>
                                          <AlertCircle />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                  </Stack>
                                </Grid>
                                <Grid item xs={10}>
                                  <Grid container>
                                    <Grid item xs={8}>
                                      <Badge badgeContent={3} color='primary'>
                                        <Typography
                                          variant='body1'
                                          color='text.primary'
                                          sx={{
                                            fontWeight:
                                              item.status === 'Unread' ||
                                              item.status === 'Disposisi'
                                                ? Fonts.BOLD
                                                : Fonts.LIGHT,
                                          }}
                                        >
                                          {item.primary}
                                        </Typography>
                                      </Badge>
                                    </Grid>
                                    <Grid item xs={4} textAlign='right'>
                                      <Typography
                                        variant='body2'
                                        color='text.primary'
                                        sx={{
                                          fontWeight:
                                            item.status === 'Unread' ||
                                            item.status === 'Disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                      >
                                        {item.date}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{
                                          display: 'inline',
                                          fontWeight:
                                            item.status === 'Unread' ||
                                            item.status === 'Disposisi'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                        }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <Box
                                      sx={{
                                        backgroundColor: getStatusColor(
                                          item.status,
                                        )[1],
                                        color: getStatusColor(item.status)[0],
                                        width: 55,
                                        height: 25,
                                        borderRadius: 1,
                                        fontSize: '12px',
                                        lineHeight: '22px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      {item.status}
                                    </Box>
                                    <Box
                                      sx={{
                                        marginLeft: 'auto',
                                        display: 'flex',
                                        flexDirection: 'row',
                                      }}
                                    >
                                      <Mail />
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Button>
                        </Card>
                        {listIndex < listData.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </AccordionDetail>
              </Accordions>
            ))}
          </div>
        )}
      </AppScrollbar>
    </MainSidebar>
  );
}

LetterOutDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
