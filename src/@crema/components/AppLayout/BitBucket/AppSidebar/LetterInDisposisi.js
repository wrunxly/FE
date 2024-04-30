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
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  TextField,
  Popover,
  Tooltip,
  Badge,
} from '@mui/material';

import SuratIn from '../../../../../assets/icon/Surat_Internal.svg';
import SuratEx from '../../../../../assets/icon/Surat_Eksternal.svg';
import SuratUndang from '../../../../../assets/icon/Surat_Undangan.svg';
import SuratDelegasi from '../../../../../assets/icon/Surat_Delegasi.svg';

import { Fonts } from '@crema/constants/AppEnums';

import {
  Plus,
  Filter,
  Search,
  AlertCircle,
  Mail,
} from 'feather-icons-react';

import {
  ArrowForwardIosSharp,
  Cached,
  Shortcut,
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

export default function LetterInDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'tinggi',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'rendah',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'tinggi',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'tinggi',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'sedang',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'sedang',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'tinggi',
      status: 'Read',
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
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'tinggi',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'tinggi',
      status: 'Read',
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
      priority: 'tinggi',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'rendah',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'sedang',
      status: 'Unread',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Sekretaris':
        return '#BF2600';
      case 'Read':
        return '#FFB020';
      case 'Unread':
        return '#8C8F93';
      case 'Disposisi':
        return '#9DB5FF';
      default:
        return 'lightgrey';
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
                Surat Masuk
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
                            borderLeft: `6px solid ${getStatusColor(
                              item.status,
                            )}`,
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
                                      <Avatar
                                        alt={`Avatar ${listIndex}`}
                                        src={item.avatarSrc}
                                        sx={{ width: 56, height: 56 }}
                                      />
                                    {item.priority === 'tinggi' && (
                                      <Tooltip title='Tinggi'>
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
                                            item.status === 'Read' ||
                                            item.status === 'Sekretaris'
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
                                          fontWeight:
                                            item.status === 'Read' ||
                                            item.status === 'Sekretaris'
                                              ? Fonts.BOLD
                                              : Fonts.LIGHT,
                                          display: 'inline',
                                        }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <Button
                                      sx={{
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'left',
                                      }}
                                    >
                                      <Cached />
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                        }}
                                      >
                                        ({item.messageCount})
                                      </Typography>
                                    </Button>
                                    <Button
                                      sx={{
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'left',
                                      }}
                                    >
                                      <Shortcut />
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                        }}
                                      >
                                        ({item.messageCount})
                                      </Typography>
                                    </Button>
                                    <Box
                                      sx={{
                                        marginLeft: 'auto',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        paddingTop: 2.4,
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

LetterInDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
