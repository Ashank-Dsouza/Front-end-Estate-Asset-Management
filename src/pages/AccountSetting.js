import React from "react";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import { RoutePath } from "../constants/routes";
import {
    Container
}
    from "@material-ui/core";
import ButtonLink from "../components/ButtonLink";

export default function AccountSettingPage(props) {

    return (
        <>
            <NavBar/>
            <Container style={{ marginTop: 20 }}>
           <Heading >Account Settings</Heading>
           <ButtonLink Kind="Blue" To={RoutePath.PasswordResetPage}>Change Password</ButtonLink>
           </Container>

        </>
    );
}
