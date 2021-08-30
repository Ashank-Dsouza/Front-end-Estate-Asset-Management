import React from "react";
import { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button,
    CssBaseline
} from "@material-ui/core";
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Post } from "../../apis/api-controller";


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

export default function AddUserForm() {
    const [password, setPasswordInput] = useState(''); // '' is the initial state value
    const [username, setUserNameInput] = useState(''); // '' is the initial state value
    const [email, setEmailInput] = useState(''); // '' is the initial state value

    const [firstname, setFirstNameInput] = useState(''); // '' is the initial state value
    const [lastname, setSecondNameInput] = useState(''); // '' is the initial state value

    const [checkBoxValue, setCheckBoxInput] = useState(false);

    const classes = useStyle();

    const preventDefault = (event) => {
        event.preventDefault();
    };

    const submitOnClick = async (event) => {
        console.log("the submitOnClick");
        console.log("the value of checkbox input is: ", checkBoxValue);
        console.log("the value of firstname input is: ", firstname);
        console.log("the value of lastname input is: ", lastname);
        console.log("the value of password input is: ", password);
        console.log("the value of email input is: ", email);
        console.log("the value of username input is: ", username);

        var response = await Post('/signup', {
            FirstName: firstname,
            LastName: lastname,
            UserName: username,
            Email: email,
            Password: password
        });

    }

    return (
        <>
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
                value={checkBoxValue}
                onChange={e => {
                    setCheckBoxInput(e.target.checked)
                }}
                control={<Checkbox color={green['A700']} className={classes.CheckboxControler} />}
                label="I agree to the terms and conditions"
            />
            <Button disabled={!checkBoxValue} onClick={() => submitOnClick()} variant='contained' className={classes.Button}>Get Started</Button>
        </Box> 
        </>
    );
}
