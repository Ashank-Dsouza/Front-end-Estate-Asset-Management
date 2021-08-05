import React from "react";

import {
    Typography,
    Container,
    CssBaseline,
    IconButton,
    List,
    Paper,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    Button,
    AppBar,
    Toolbar,
    Hidden,
    Menu,
    MenuItem,
    Drawer,
    Divider,
    CardMedia,
    Box,
    Grid,
    Avatar
} from "@material-ui/core";

import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';



import { green } from "@material-ui/core/colors";


import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import AndroidIcon from '@material-ui/icons/Android';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';


import { makeStyles } from '@material-ui/core/styles';

console.log(makeStyles);

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));


export default function ViewUser(props) {

    const [page, setPage] = React.useState(1);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    // const [value, onChange] = React.useState(new Date());
    const classes = useStyles();


    return (
        <>
            <CssBaseline />
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                <List disablePadding style={{ width: '80vw', maxWidth: 300 }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 1" secondary="this is discripation" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 2" secondary="this is discripation" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 3" secondary="this is discripation" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar style={{ backgroundColor: green[700] }}>
                <Toolbar>
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <DehazeIcon style={{ color: 'white' }} />
                    </IconButton>
                    <Typography variant='h6' style={{ flex: 1 }}>Menu Component</Typography>
                    <Hidden xsDown>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Details</Button>
                        <Button color='inherit'>Contect Us</Button>
                    </Hidden>
                    <Hidden smUp>
                        <Button variant='text' style={{ color: 'white' }} onClick={(e) => setMenuOpen(e.currentTarget)}>
                            <AppsIcon />
                        </Button>
                        <Menu open={Boolean(menuOpen)} onClose={() => setMenuOpen(null)} anchorEl={menuOpen}>
                            <MenuItem>
                                <Button color='inherit'>Home</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>About</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Details</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Contect Us</Button>
                            </MenuItem>
                        </Menu>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container style={{ marginTop: 10 }}>
                <Grid container justifyContent='space-between'>
                    <Grid item md={5} sm={12}>
                        <CardMedia src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" component="img" width={10} />
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <TabContext value={page}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={(event, newValue) => setPage(newValue)} aria-label="lab API tabs example">
                                    <Tab label="User Details" value="1" />
                                    <Tab label="About Me" value="2" />
                                    <Tab label="Followers" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <List disablePadding>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>User name</Typography>} secondary="Micheal" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>E-mail</Typography>} secondary="gankunding@hotmail.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>Phone Number</Typography>} secondary="(999)999-9999" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>Address</Typography>} secondary="Australia" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>Created At</Typography>} secondary="1 month ago" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>City</Typography>} secondary="Nakia" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<Typography variant='body2' style={{ color: green[700] }}>Pincode</Typography>} secondary="522522" />
                                    </ListItem>
                                </List>
                            </TabPanel>
                            <TabPanel value="2">
                                <Typography variant='body1' style={{ color: green[700] }}>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                                </Typography>
                            </TabPanel>
                            <TabPanel value="3">
                                <List disablePadding>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={<Typography variant='body1' style={{ color: green[700] }}>Scarlett Johansson</Typography>} secondary=" Last seen: 7 minutes ago" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={<Typography variant='body1' style={{ color: green[700] }}>Scarlett Johansson</Typography>} secondary=" Last seen: 7 minutes ago" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={<Typography variant='body1' style={{ color: green[700] }}>Scarlett Johansson</Typography>} secondary=" Last seen: 7 minutes ago" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={<Typography variant='body1' style={{ color: green[700] }}>Scarlett Johansson</Typography>} secondary=" Last seen: 7 minutes ago" />
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabContext>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: 32, marginBottom: 32 }} justifyContent='space-between'>
                    <Grid item md={5} sm={12} xs={12}>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={[
                                { title: 'event 1', date: '2021-07-13' },
                                { title: 'event 2', date: '2019-04-02' }
                            ]}
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Typography variant='h4' fontSize='2rem'>Recent Feeds</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant='h6' style={{ color: green[700] }}>Important Mails</Typography>} secondary={<Typography variant='subtitle2'>Mail received from John . <br /> 1 hr back</Typography>} />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant='h6' style={{ color: green[700] }}>Mails</Typography>} secondary={<Typography variant='subtitle2'>Mail sent to sandy . <br /> 1 hr back</Typography>} />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant='h6' style={{ color: green[700] }}>Important Mails</Typography>} secondary={<Typography variant='subtitle2'>Mail received from John . <br /> 1 hr back</Typography>} />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        9:30 am
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <FastfoodIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            Eat
                                        </Typography>
                                        <Typography>Because you need strength</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        10:00 am
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <LaptopMacIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            Code
                                        </Typography>
                                        <Typography>Because it&apos;s awesome!</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" variant="outlined">
                                        <HotelIcon />
                                    </TimelineDot>
                                    <TimelineConnector className={classes.secondaryTail} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            Sleep
                                        </Typography>
                                        <Typography>Because you need rest</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary">
                                        <RepeatIcon />
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            Repeat
                                        </Typography>
                                        <Typography>Because this is the life you love!</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
