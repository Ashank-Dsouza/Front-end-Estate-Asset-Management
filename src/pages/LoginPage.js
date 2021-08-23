import React from "react";
import { useState } from 'react';
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
import { TextField } from "@material-ui/core";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from "@material-ui/icons/Lock";
import { Post } from "./../apis/api-controller";
import PropTypes from 'prop-types'




import Auth from "./../auth/Auth"
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


export default function LoginPage({ setToken }) {
    // let history = useHistory();

    // const handleClick = () => history.push('/goodbye');

    const auth = Auth;
    const classes = useStyle();


    const [email, setEmailInput] = useState(''); // '' is the initial state value
    const [password, setPasswordInput] = useState(''); // '' is the initial state value



    const SubmitLoginDetails = async (event) => {
        //event.preventDefault();
        console.log("the email entered is: ", email);
        console.log("the password entered is: ", password);

        const deviceId = await GetDeviceId();

        Post('/login', {
                Email: email,
                Password: password,
                DeviceID: deviceId
            })
            .then((response) => {
                console.log("the response is: ", response);
                if(response?.data?.access_token){
                    sessionStorage.setItem('userToken', response.data.access_token)
                    auth.authenticate()
                }
            })

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
                            New Here?  <Link href="/sign-up"> Create an account</Link>
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
                            <Button onClick={() => SubmitLoginDetails()} fullWidth className={classes.loginButton} variant="contained">
                                Login
                            </Button>
                            <Typography>
                                <Link href="/forgot-password" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Forgot Password?</Link>
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

LoginPage.contextTypes = {
    auth: PropTypes.object
  }
  
  LoginPage.propTypes = {
    login: PropTypes.func
  }
