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
} from '@mui/material';

import { Plus, Filter, Search } from 'feather-icons-react';

import { Fonts } from '@crema/constants/AppEnums';

import { ArrowForwardIosSharp } from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { addTab, childTab } from '../../../../../redux/actions/tabActon';

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

export default function ScannerLogScanDisposisi({ isCollapsed }) {
  const listData1 = [
    {
      id:1,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:2,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:3,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:4,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:5,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:6,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:7,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:8,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:9,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
  ];
  const listData2 = [
    {
      id:10,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:11,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:12,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:13,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:14,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:15,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
  ];
  const listData3 = [
    {
      id:16,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '10:30, 22 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:17,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 2,
      date: '09:00, 23 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
    {
      id:18,
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Brunch this weekend?',
      secondary:
        "Ali Connors — I'll be in your neighborhood doing errands this…",
      messageCount: 14,
      date: '15:45, 24 Sep',
      file: [{name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}, {name: 'Preview Surat.pdf', size: 12345691}]
    },
  ];

  const getTotalCount = (listData) => {
    return listData.length;
  };

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleTab = (item) => {
    dispatch(childTab(item.id, tabs, 'Log Scan Surat', item));
  };

  const handleAddTab = (name) => {
    dispatch(addTab(id, tabs, name));
  };

  return (
    <MainSidebar>
      <Box sx={{ py: 2.5, px: 3.5 }}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item xs={7}>
            <Typography
              sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
              component='h2'
            >
              Scanner
            </Typography>
            <Typography
              sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
              component='h2'
            >
              Log Scan Surat
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup>
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <Filter />
              </IconButton>
              <IconButton onClick={()=>handleAddTab('Buat Scan Surat')}>
                <Plus />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
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
                <AccordionDetail>
                  <List>
                    {listData.map((item, listIndex) => (
                      <React.Fragment key={listIndex}>
                        <Card
                          sx={{
                            position: 'relative',
                            borderLeft: '6px solid silver',
                            borderRadius: 0,
                          }}
                        >
                          <Button
                            sx={{ padding: 0, margin: 0, textAlign: 'left' }}
                            onClick={() => handleTab(item)}
                          >
                            <CardContent>
                              <Grid container>
                                <Grid item xs={2}>
                                  <ListItemAvatar>
                                    <Avatar
                                      alt={`Avatar ${listIndex}`}
                                      src={item.avatarSrc}
                                      sx={{ width: 56, height: 56 }}
                                    />
                                  </ListItemAvatar>
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

ScannerLogScanDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
