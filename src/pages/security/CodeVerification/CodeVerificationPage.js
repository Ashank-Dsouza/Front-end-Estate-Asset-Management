import React, { useContext } from "react";
import { useState } from 'react';
import {
    Grid,
    Typography,
    Container,
    CssBaseline,
    Card,
    CardHeader,
    CardActions,
    Button,
    TextField,
    Box
} from "@material-ui/core";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { Put } from "../../../apis/api-controller";

import { makeStyles } from "@material-ui/core/styles";
import { RoutePath } from "../../../constants/routes";

import { green } from "@material-ui/core/colors";
import { EmailContext } from "../../../state-management/EmailContext";
import ErrorHandler from "../../../components/forms/withErrorMessage";

import CodeVerificationForm from "./CodeVerificationForm";

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

function CodeVerificationPage(props) {
    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                className={classes.root}
            >
                <Grid item xs={12} md={4}>
                        <CodeVerificationForm/>
                </Grid>
            </Grid>
        </>
    );
}

export default CodeVerificationPage;

