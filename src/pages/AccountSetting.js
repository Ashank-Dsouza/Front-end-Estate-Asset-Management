import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { RoutePath } from "../constants/routes";

export default function AccountSettingPage(props) {

    return (
        <>
            <NavBar/>
           <h1>Account Settings</h1>
           <Link to={RoutePath.PasswordResetPage}>Change Password</Link>

        </>
    );
}
