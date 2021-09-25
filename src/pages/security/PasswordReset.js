import React from "react";
import { useState } from 'react';
import {
    Typography,
    InputAdornment,
    Card,
    CardHeader,
    CardActions,
    Button,
    TextField,
    Box
} from "@material-ui/core";
import ErrorMessage from "../../components/ErrorMessage";
import { Put } from "../../apis/api-controller";
import SubmitHandler from "../../components/forms/withErrorMessage";
import FormatForm from "../../components/forms/withPageFormatting";

import LockOpenIcon from '@material-ui/icons/LockOpen';

import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useEffect } from "react";

const useStyle = makeStyles((them) => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    InputFieldsText: {
        marginBottom: "15px"
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

function PasswordResetForm(props) {
    const classes = useStyle();

    const [email, setEmailInput] = useState(''); // '' is the initial state value
    const [password, setPasswordInput] = useState(''); // '' is the initial state value
    const [confmPassword, setConfmPassword] = useState(''); // '' is the initial state value
    const [isError, setIsError] = useState(true);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        if (confmPassword !== password) {
            console.log("there is a mistmatch in passwords");
            console.log("the value of isError is: ", isError);
            //setIsError(true);
            setMsg("There is an error!")


        } else {
            console.log("the passwords match!");
            //setIsError( false , () => console.log("the value of isError is: ", isError));
            setMsg(null)
            //setIsError(false);
        }
    }, [confmPassword, password]);

    useEffect(() => {
        if (isError) {
            setMsg("There is an error!!");
        }

    }, [isError]);


    const submitOnClick = async (event) => {
        console.log("the value of email input is: ", email);
        console.log("the value of password input is: ", password);


        var response = await Put('/user/resetPassword', {
            Email: email,
            Password: password
        }).then((response) => {
            console.log("the response is :",response);
        })
        .catch((error) => {
            if (error?.response?.data?.error) {
                const errorMessage = error.response.data.error;
                props.handleSubmitError(errorMessage);
            }
          })
    }


    return (
        <>
 
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
                                <TextField
                                    value={confmPassword}
                                    onInput={e => setConfmPassword(e.target.value)}
                                    label="Confirm Password"
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
                                <ErrorMessage message={msg}  ></ErrorMessage>
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
        </>
    );
}


const FormWithErrorHandler =  SubmitHandler(PasswordResetForm);

const PasswordResetPage = FormatForm(FormWithErrorHandler)

export default PasswordResetPage;