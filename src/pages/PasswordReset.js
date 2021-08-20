import React from "react";
import { useState } from 'react';
import {
    Grid,
    Typography,
    InputAdornment,
    Container,
    CssBaseline,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    TextField,
    Link,
    Box
} from "@material-ui/core";
import {Post} from "./../apis/api-controller";


import LockOpenIcon from '@material-ui/icons/LockOpen';

import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyle = makeStyles((them) => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    resetButton: {
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
        [them.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
}));

export default function PasswordResetPage(props) {
    const classes = useStyle();

    const [email, setEmailInput] = useState(''); // '' is the initial state value
    const [password, setPasswordInput] = useState(''); // '' is the initial state value


    const submitOnClick = async(event) => {
        console.log("the value of email input is: ", email);
        console.log("the value of password input is: ", password);

        var response = await Post('/users/forgotPassword', {
            Email: email,
            Password: password
        })
    }


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
                    <Grid item xs={12} md={8}>
                        <Card style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardHeader
                                title={
                                    <Typography variant="h4" className={classes.MainTitle}>
                                        Password Reset
                  </Typography>
                                }
                                subheader="Enter your email and instructions will be sent to you!"
                            />
                            <Box className={classes.InputFields}>
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
                            </Box>
                            <CardActions>
                                <Button
                                    onClick={() => submitOnClick()}
                                    variant="contained"
                                    className={classes.resetButton}
                                    fullWidth
                                >
                                    Reset
                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
