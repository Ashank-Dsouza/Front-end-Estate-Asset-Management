import React from "react";
import { useState } from 'react';
import axios from "axios";
import {
    Grid,
    Typography,
    Link,
    Box,
    InputAdornment,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';
import { TextField } from "@material-ui/core";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { HashRouter as Router, Route, NavLink , Switch} from 'react-router-dom';
import {Post} from "./../apis/api-controller";
import Auth from './../auth/Auth';
import { useHistory } from "react-router-dom";



import { green } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import FingerprintJS from '@fingerprintjs/fingerprintjs'


const useStyle = makeStyles((them) => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    loginButton: {
        backgroundColor: green[700],
        color: them.palette.primary.contrastText,
        marginTop: them.spacing(4),
        marginBottom: them.spacing(4),
        "&:hover": {
            backgroundColor: green[600],
            color: them.palette.primary.contrastText,
        },
        "&:active": {
            backgroundColor: green[700],
            color: them.palette.primary.contrastText,
        },
    },
    MainTitle: {
        color: green[700],
        [them.breakpoints.down('sm')]: {
            fontSize: 24
        }
    },
}));

async function GetDeviceId() {
    const fpPromise = FingerprintJS.load()
    const fp = await fpPromise
    const result = await fp.get()

    // This is the visitor identifier:
    const deviceId = result.visitorId
    console.log(deviceId);
    return deviceId;

}

export default function LoginPage(props) {
    let history = useHistory();

    const classes = useStyle();

    const [email, setEmailInput] = useState(''); // '' is the initial state value
    const [password, setPasswordInput] = useState(''); // '' is the initial state value


    const submitLoginDetails = async (event) => {
        console.log("the email entered is: ", email);
        console.log("the password entered is: ", password);

        const deviceId = await GetDeviceId();

        var response = await Post('/login', {
            Email: email,
            Password: password,
            DeviceID: deviceId
        });
        if(response){
        console.log("the access token is: ", response.data.access_token);

        response = response.data;

        // var jsonResponse = await response.JSON()

        // response = response.data;
        // console.log("the response data is ", response);

        if(response && response.access_token){
            console.log("login authenticated!!!");
            Auth.authenticate();
            history.push('/home-page');

        }
    }
    else{
        console.log("reponse was null");
    }
    };


    return (
        <>
            <CssBaseline />
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    alignContent="center"
                    className={classes.root}
                >
                    <Grid item>
                        <Typography variant="h4" className={classes.MainTitle}>
                            Log In to TruVest
                        </Typography>
                        <Typography>
                            New Here?  <Link href="/#sign-up"> Create an account</Link>
                        </Typography>
                        <Box my={4} mb={2}>
                            <TextField
                                value={email}
                                onInput={e => setEmailInput(e.target.value)}
                                label="Email"
                                variant="outlined"
                                className={classes.InputFieldsText}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth={true}
                            />
                            <TextField
                                value={password}
                                onInput={e => setPasswordInput(e.target.value)}
                                placeholder="Password"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                type="password"
                                fullWidth
                            />
                            <FormControl>
                                <FormControlLabel
                                    label={<Typography>Keep me logged in</Typography>}
                                    control={<Checkbox style={{ color: green[700] }} />}
                                />
                            </FormControl>
                            <Button onClick={() => submitLoginDetails()} fullWidth className={classes.loginButton} variant="contained">
                                Login
                            </Button>
                            <Typography>
                            <Link href="/#forgot-password" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Forgot Password?</Link>
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
