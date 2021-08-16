import React from "react";
import { useState } from 'react';
import axios from "axios";
import {
    Container,
    Box,
    Link,
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button
} from "@material-ui/core";
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { HashRouter as Router, Route, NavLink , Switch} from 'react-router-dom';


import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyle = makeStyles((them) => ({
    Container: {
        padding: `${them.spacing(4)}px 0px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        maxHeight: 600
    },
    InputFields: {
        marginTop: them.spacing(8),
        marginBottom: them.spacing(8),
        width: "100%",
    },
    InputFieldsText: {
        marginBottom: them.spacing(4),
        maxWidth: 600,
        display: 'block',
        color: `${green[700]} !important`,
        '&:hover': {
            color: green[700],
        },
        '&:active': {
            color: green[700],
            borderColor: green[700],
        }
    },
    CheckboxControler: {
        color: green[700],
    },
    Button: {
        display: 'block',
        color: 'white',
        backgroundColor: green[700],
        '&:hover': {
            backgroundColor: green[900],
        }
    }
}));

export default function SingUp() {
    const [password, setPasswordInput] = useState(''); // '' is the initial state value
    const [username, setUserNameInput] = useState(''); // '' is the initial state value
    const [email, setEmailInput] = useState(''); // '' is the initial state value

    const [firstname, setFirstNameInput] = useState(''); // '' is the initial state value
    const [lastname, setSecondNameInput] = useState(''); // '' is the initial state value

    const [checkBoxValue, setCheckBoxInput] =  useState(false);
    
    const classes = useStyle();

    const preventDefault = (event) => {
        event.preventDefault();
    };

    const submitOnClick = (event) => {
        console.log("the submitOnClick");
        console.log("the value of checkbox input is: ", checkBoxValue);
        console.log("the value of firstname input is: ", firstname);
        console.log("the value of lastname input is: ", lastname);
        console.log("the value of password input is: ", password);
        console.log("the value of email input is: ", email);
        console.log("the value of username input is: ", username);

        axios.defaults.baseURL = 'http://localhost:9191';
        //axios.get('/data/2.5/weather')

        axios.post('/signup', {
            FirstName: firstname,
            LastName: lastname,
            UserName: username,
            Email: email,
            Password: password
        })
            .then(function (response) {
                console.log(response);
            })
    }

    return (
        <>
            <Box className={classes.Container}>
                <Container maxWidth="md">
                    <Typography variant="h4" style={{ color: green[700] }}>Get started with a free account</Typography>
                    <Typography>
                        Already have an account?{" "}
                        <NavLink exact to="/#sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>


                    </Typography>
                    <Box className={classes.InputFields}>
                        <TextField
                            value={firstname}
                            onInput={e => setFirstNameInput(e.target.value)}
                            label="First Name"
                            variant="outlined"
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
                        <TextField
                            value={lastname}
                            onInput={e => setSecondNameInput(e.target.value)}
                            label="Last Name"
                            variant="outlined"
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />



                        <TextField
                            value={username}
                            onInput={e => setUserNameInput(e.target.value)}
                            label="UserName"
                            variant="outlined"
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
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
                            label="Password"
                            variant="outlined"
                            type='password'
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOpenIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
                        <FormControlLabel
                            value = {checkBoxValue} 
                            onChange={e =>  {
                                setCheckBoxInput(e.target.checked)
                            }}
                            control={<Checkbox color={green['A700']} className={classes.CheckboxControler} />}
                            label="I agree to the terms and conditions"
                        />
                        <Button disabled={!checkBoxValue} onClick={() => submitOnClick()} variant='contained' className={classes.Button}>Get Started</Button>
                    </Box>
                    <Typography>
                        © 2021 All Rights Reserved. CORK is a product of Designreset.
                        <Link style={{ color: green[700] }}>Cookie Preferences, Privacy</Link>, and
                        <Link style={{ color: green[700] }}> Terms</Link>.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
