import React from "react";

import {
    Grid,
    Typography,
    InputAdornment,
    Container,
    CssBaseline,
    Box,
    Select,
    MenuItem,
    FormControl,
    FormControlLabel,
    InputLabel,
    Slider,
    Button,
    Paper,
    TextField,
    FormLabel,
} from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";

const useStyle = makeStyles((them) => ({
    component: {
        padding: them.spacing(4),
        marginTop: them.spacing(4),
        [them.breakpoints.down("sm")]: {
            padding: them.spacing(2),
        },
    },
    componentTitle: {
        color: green[700],
        fontSize: 36,
        [them.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
    formControl: {
        margin: them.spacing(1),
        minWidth: 120,
        width: "100%",
    },
    selectEmpty: {
        marginTop: them.spacing(2),
    },
}));



export default function AccountSettingPage(props) {
    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>
                        General Information
                    </Typography>
                    <Grid
                        justifyContent="space-around"
                        alignItems="center"
                        container
                        style={{ padding: 20 }}
                    >
                        <Grid item md={2} xs={12}>
                            <TextField type="file" />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField
                                placeholder="Enter Full Name"
                                margin="normal"
                                variant="outlined"
                                label="Full Name"
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Profession"
                                margin="normal"
                                variant="outlined"
                                label="Profession"
                                fullWidth
                            />
                            <TextField
                                type="date"
                                defaultValue="2017-05-24"
                                margin="normal"
                                variant="outlined"
                                label="Date of Birth"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>About</Typography>
                    <Grid
                        justifyContent="space-around"
                        alignItems="center"
                        container
                        style={{ padding: 12 }}
                    >
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Your Bio"
                                margin="normal"
                                variant="outlined"
                                label="Bio"
                                multiline
                                rows={6}
                                rowsMax={8}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>
                        Work Platform
                    </Typography>
                    <Grid
                        justifyContent="space-around"
                        alignItems="center"
                        container
                        style={{ padding: 12 }}
                    >
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Platforms name"
                                margin="normal"
                                variant="outlined"
                                label="Platforms"
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Description"
                                margin="normal"
                                variant="outlined"
                                label="Description"
                                multiline
                                rows={6}
                                rowsMax={8}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>Contact</Typography>
                    <Grid justifyContent="space-around" alignItems="center" container>
                        <Grid item md={5} xs={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Country</InputLabel>
                                <Select>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                placeholder="Enter Your Location"
                                margin="normal"
                                variant="outlined"
                                label="Location"
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Your Email"
                                type="email"
                                margin="normal"
                                variant="outlined"
                                label="Email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <TextField
                                placeholder="Enter Your Address"
                                margin="normal"
                                variant="outlined"
                                label="Address"
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Your Phone number"
                                type="number"
                                margin="normal"
                                variant="outlined"
                                label="Phone Number"
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Your Website"
                                margin="normal"
                                variant="outlined"
                                label="Website"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>Social</Typography>
                    <Grid justifyContent="space-around" alignItems="center" container>
                        <Grid item md={5} xs={12}>
                            <TextField
                                placeholder="Enter Your LinkedIn Profile Url"
                                margin="normal"
                                variant="outlined"
                                label="LinkedIn"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LinkedInIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Your Facebook Profile Url"
                                margin="normal"
                                variant="outlined"
                                label="Facebook"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FacebookIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <TextField
                                placeholder="Enter Your Twitter Profile Url"
                                margin="normal"
                                variant="outlined"
                                label="Twitter"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TwitterIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                            <TextField
                                placeholder="Enter Your Github Profile Url"
                                margin="normal"
                                variant="outlined"
                                label="Github"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <GitHubIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>SKILLS</Typography>
                    <Grid justifyContent="space-around" alignItems="center" container style={{ padding: 10 }}>
                        <Grid item md={12} xs={12}>
                            <FormControl style={{ width: '100%' }}>
                                <FormLabel>JavaScript</FormLabel>
                                <FormControlLabel control={<Slider style={{ color: green[700] }} />} style={{ width: '100%' }} />
                            </FormControl>
                            <FormControl style={{ width: '100%' }}>
                                <FormLabel>PHP</FormLabel>
                                <FormControlLabel control={<Slider style={{ color: green[700] }} />} style={{ width: '100%' }} />
                            </FormControl>
                            <FormControl style={{ width: '100%' }}>
                                <FormLabel>JQuary</FormLabel>
                                <FormControlLabel control={<Slider style={{ color: green[700] }} />} style={{ width: '100%' }} />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>Education</Typography>
                    <Grid justifyContent="space-between" spacing={2} alignItems="center" container style={{ padding: 10 }}>
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Your Collage Name"
                                margin="normal"
                                variant="outlined"
                                label="Collage Name"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                type="date"
                                defaultValue="2017-05-24"
                                label="Starting From"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                type="date"
                                defaultValue="2017-05-24"
                                label="Eandinging From"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Description"
                                margin="normal"
                                variant="outlined"
                                label="Description"
                                multiline
                                rows={6}
                                rowsMax={8}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.component} component={Paper}>
                    <Typography className={classes.componentTitle}>Work Experience</Typography>
                    <Grid justifyContent="space-between" spacing={2} alignItems="center" container style={{ padding: 10 }}>
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Your Company Name"
                                margin="normal"
                                variant="outlined"
                                label="Company Name"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                placeholder="Enter Your Job Tilte"
                                margin="normal"
                                variant="outlined"
                                label="Job Tilte"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                placeholder="Enter Your Location"
                                margin="normal"
                                variant="outlined"
                                label="Location"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                type="date"
                                defaultValue="2017-05-24"
                                label="Starting From"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                type="date"
                                defaultValue="2017-05-24"
                                label="Eandinging From"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                placeholder="Enter Description"
                                margin="normal"
                                variant="outlined"
                                label="Description"
                                multiline
                                rows={6}
                                rowsMax={8}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container component={Box} m={8}>
                    <Button variant='contained' color='primary' style={{marginRight:12}}>Reset All</Button>
                    <Button variant='contained' color='secondary'>Save Changes</Button>
                </Container>
            </Container>
        </>
    );
}
