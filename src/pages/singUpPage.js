import React from "react";
import {
    Container,
    CssBaseline
} from "@material-ui/core";
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import { green } from '@material-ui/core/colors';

import AddUserForm from "../components/forms/AddUserForm";


export default function SingUp() {

    return (
        <>
            <CssBaseline />
            <Container>
                <Container maxWidth="md">
                    <Typography variant="h4" style={{ color: green[700] }}>Get started with a free account</Typography>
                    <Typography>
                        Already have an account?{" "}
                        <NavLink exact to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                    </Typography>
                    <AddUserForm ShowAgreementCheckbox={true}/>
                </Container>
                </Container>
        </>
    );
}
