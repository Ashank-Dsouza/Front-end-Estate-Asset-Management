import React from "react";
import {
    Container,
    CssBaseline
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import AddUserForm from "./forms/AddUserForm";

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

export default function CreateUserForm() {

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
            <AddUserForm/>
            </Container>
        </>
    );
}
