import React from "react";

import {
    Grid,
    Typography,
    Container,
    CssBaseline,
    Box,
    FormControl,
    FormControlLabel,
    Slider,
    FormLabel,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    CardHeader,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';



import EditIcon from "@material-ui/icons/Edit";
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PlaceIcon from '@material-ui/icons/Place';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";





import { green } from "@material-ui/core/colors";


export default function UserProfile(props) {
    return (
        <>
        <CssBaseline />
            <Container component={Box} my={4}>
                <Grid container justifyContent="space-between" spacing={4}>
                    <Grid item md={5} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography variant="h4" style={{ color: green[700] }}>
                                        Info
                                    </Typography>
                                }
                                action={
                                    <IconButton style={{ color: green[700] }}>
                                        <EditIcon />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                                component="img"
                                height={200}
                            />
                            <CardContent>
                                <Typography variant='h4'>Jimmy Turner</Typography>
                                <List disablePadding>
                                    <ListItem>
                                        <ListItemIcon><CodeIcon /></ListItemIcon>
                                        <ListItemText style={{ color: green[700] }} primary="Web Developer" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                                        <ListItemText style={{ color: green[700] }} primary="Jan 20, 1989" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><PlaceIcon /></ListItemIcon>
                                        <ListItemText style={{ color: green[700] }} primary="New York, USA" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><MailOutlineIcon /></ListItemIcon>
                                        <ListItemText style={{ color: green[700] }} primary="Jimmy@gmail.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                                        <ListItemText style={{ color: green[700] }} primary="+1 (530) 555-12121" />
                                    </ListItem>
                                </List>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton>
                                    <LinkedInIcon color='primary' />
                                </IconButton>
                                <IconButton>
                                    <GitHubIcon color='primary' />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon color='primary' />
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card container={Box} style={{ margin: '12px 0px' }}>
                            <CardContent>
                                <Typography variant='h4' style={{ color: green[700] }}>Education</Typography>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">04 Mar 2009</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Royal Collage of Art Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">04 Mar 2009</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Royal Collage of Art Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">25 Apr 2014</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Massachusetts Institute of Technology (MIT) Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </CardContent>
                        </Card>
                        <Card container={Box} style={{ margin: '12px 0px' }}>
                            <CardContent>
                                <Typography variant='h4' style={{ color: green[700] }}>Work Experience</Typography>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">04 Mar 2009</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Royal Collage of Art Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">04 Mar 2009</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Royal Collage of Art Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color="textSecondary">25 Apr 2014</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant='body1' style={{ color: green[700] }}>Massachusetts Institute of Technology (MIT) Designer Illustrator</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant='h4' style={{ marginBottom: 20 }}>Skills</Typography>
                                <FormControl style={{ width: '100%', marginTop: 12 }}>
                                    <FormLabel>JavaScript</FormLabel>
                                    <FormControlLabel control={<Slider style={{ color: green[700] }} valueLabelDisplay="on" />} style={{ width: '100%' }} value={80} />
                                </FormControl>
                                <FormControl style={{ width: '100%', marginTop: 12 }}>
                                    <FormLabel>PHP</FormLabel>
                                    <FormControlLabel control={<Slider style={{ color: green[700] }} valueLabelDisplay="on" />} style={{ width: '100%' }} value={50} />
                                </FormControl>
                                <FormControl style={{ width: '100%', marginTop: 12 }}>
                                    <FormLabel>Java</FormLabel>
                                    <FormControlLabel control={<Slider style={{ color: green[700] }} valueLabelDisplay="on" />} style={{ width: '100%' }} value={75} />
                                </FormControl>
                            </CardContent>
                        </Card>
                        <Card container={Box} style={{ margin: '12px 0px' }}>
                            <CardContent>
                                <Typography variant='h4' style={{ marginBottom: 20 }}>Bio</Typography>
                                <Typography variant="body1" style={{ margin: '12px 0px', color: green[700] }}>I'm Web Developer from California. I code and design websites worldwide. Mauris varius tellus vitae tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus erat ac nulla.</Typography>
                                <Typography variant="body1" style={{ margin: '12px 0px', color: green[700] }}>Sed vulputate, ligula eget mollis auctor, lectus elit feugiat urna, eget euismod turpis lectus sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut velit finibus, scelerisque sapien vitae, pharetra est. Nunc accumsan ligula vehicula scelerisque vulputate.</Typography>
                                <Grid container>
                                    <Grid item md={6} xs={12}>
                                        <Card style={{backgroundColor: green[700],color: 'white',margin:12 }}>
                                            <CardContent>
                                                <Typography variant='h6'>Sass Applications</Typography>
                                                <Typography variant='subtitle1'>Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Card style={{backgroundColor: green[700],color: 'white',margin:12 }}>
                                            <CardContent>
                                                <Typography variant='h6'>Sass Applications</Typography>
                                                <Typography variant='subtitle1'>Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Card style={{backgroundColor: green[700],color: 'white',margin:12 }}>
                                            <CardContent>
                                                <Typography variant='h6'>Sass Applications</Typography>
                                                <Typography variant='subtitle1'>Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Card style={{backgroundColor: green[700],color: 'white',margin:12 }}>
                                            <CardContent>
                                                <Typography variant='h6'>Sass Applications</Typography>
                                                <Typography variant='subtitle1'>Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
