import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { RoutePath } from "../constants/routes";
import {
    Container
}
    from "@material-ui/core";

export default function AccountSettingPage(props) {

    return (
        <>
            <NavBar/>
            <Container style={{ marginTop: 20 }}>
           <h1>Account Settings</h1>
           <Link to={RoutePath.PasswordResetPage}>Change Password</Link>
           </Container>

        </>
    );
}
