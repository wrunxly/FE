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
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  TextField,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';


import { Fonts } from '@crema/constants/AppEnums';

import { Filter, Search, AlertCircle } from 'feather-icons-react';
import { Filter, Search, AlertCircle } from 'feather-icons-react';

import { ArrowForwardIosSharp, Close } from '@mui/icons-material';

import FilterPopover from './IconButton/FilterPopover';
import { ArrowForwardIosSharp, Close } from '@mui/icons-material';

import FilterPopover from './IconButton/FilterPopover';

import { useDispatch, useSelector } from 'react-redux';
import { childTab } from '../../../../../redux/actions/tabActon';

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

export default function TodoDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      id: 1,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'Tinggi',
      status: 'Read',
    },
    {
      id: 2,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Rendah',
      status: 'Sekretaris',
    },
    {
      id: 3,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Rendah',
      status: 'Disposisi',
    },
    {
      id: 4,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'Tinggi',
      status: 'Disposisi',
    },
    {
      id: 5,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Tinggi',
      status: 'Unread',
    },
    {
      id: 6,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Sedang',
      status: 'Read',
    },
    {
      id: 7,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'Sedang',
      status: 'Read',
    },
    {
      id: 8,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Sedang',
      status: 'Unread',
    },
    {
      id: 9,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Tinggi',
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
      priority: 'Rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Rendah',
      status: 'Sekretaris',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      priority: 'Sedang',
      status: 'Disposisi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Tinggi',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Tinggi',
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
      priority: 'Tinggi',
      status: 'Read',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      priority: 'Rendah',
      status: 'Unread',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      priority: 'Sedang',
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
      default:
        return 'lightgrey';
    }
  };

  const getTotalCount = (listData) => {
    return listData.length;
  };

  // const [expanded, setExpanded] = React.useState(null);

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);

  const handleTab = (item) => {
    dispatch(childTab(item.id, tabs, 'Todo', item));
  };

  const [searchForm, setsearchForm] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
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

  const handleFilterClick = (event) => {
    setOpenFilter(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setOpenFilter(null);
  };

  const open_filter = Boolean(openFilter);

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
            <Grid item xs={8}>
              <Typography
                sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
                component='h2'
              >
                Disposisi
              </Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
                component='h2'
              >
                Todo
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ButtonGroup>
                <IconButton onClick={handleSearchClick}>
                  <Search />
                </IconButton>
                <IconButton onClick={handleFilterClick}>
                  <Filter />
                </IconButton>
                <FilterPopover open={open_filter} onClose={handleCloseFilter} />
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
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      container
                      justifyContent='start'
                      alignItems='center'
                    >
                      <Typography>
                        Agustus-2021({getTotalCount(listData)})
                      </Typography>
                    </Grid>
                  </Grid>
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
                            onClick={() => handleTab(item)}
                          >
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid item xs={2}>
                                  <Stack alignItems='center'>
                                    <ListItemAvatar>
                                      <Avatar
                                        alt={`Avatar ${listIndex}`}
                                        src={item.avatarSrc}
                                        sx={{ width: 56, height: 56 }}
                                      />
                                    </ListItemAvatar>
                                    {item.priority === 'Tinggi' && (
                                      <Tooltip title='Prioritas'>
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
                                      <Typography
                                        variant='body1'
                                        color='text.primary'
                                      >
                                        {item.primary}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={4} textAlign='right'>
                                      <Typography
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.date}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                      >
                                        {item.secondary}
                                      </Typography>
                                    </Grid>
                                    <Box
                                      sx={{
                                        backgroundColor: getPriorityColor(
                                          item.priority,
                                        )[1],
                                        color: getPriorityColor(
                                          item.priority,
                                        )[0],
                                        width: 53,
                                        height: 20,
                                        borderRadius: 1,
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      {item.priority}
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

TodoDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
