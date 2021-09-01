import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";

export default function AccountSettingPage(props) {

    return (
        <>
            <NavBar/>
           <h1>Account Settings</h1>
           <Link to="/password-reset">Change Password</Link>

        </>
    );
}
