import React from "react";
import {
    Typography, Container, CssBaseline, Grid
} from "@material-ui/core";
import AddUserForm from "../components/forms/AddUserForm";
import NavBar from "../components/NavBar";
import { green } from "@material-ui/core/colors";

export default function AddUser(props) {

    function SuccessfullyAddedUser(params) {
        alert('added user!');
    }


    return (
        <>
            <CssBaseline />
            <NavBar/>
            <Container style={{ marginTop: 10, marginBottom: 32 }}>
                <Typography variant='h4' style={{ color: green[700], marginBottom: 20 }}>Add User</Typography>
                <Grid container justifyContent='space-between'>
                    <Grid item md={6} sm={12} xs={12} style={{ paddingBottom: 10 }}>
                        <AddUserForm AddedUserAlert={SuccessfullyAddedUser} ShowAgreementCheckbox={false}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
