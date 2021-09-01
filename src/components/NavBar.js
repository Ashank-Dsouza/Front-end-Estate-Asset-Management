import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

import {
    Typography, Container, CssBaseline, IconButton, List,
    ListItem, ListItemText, ListItemIcon, Button, AppBar, Toolbar, Hidden, Menu, MenuItem, Drawer, Divider, CardMedia, Grid
} from "@material-ui/core";
import AddUserForm from "../components/forms/AddUserForm";
import { PostWithAuth } from '../apis/api-controller';
import { GetDeviceId } from '../utility/ApiHelperFunctions';
import PropTypes from 'prop-types'


import { green } from "@material-ui/core/colors";
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import AndroidIcon from '@material-ui/icons/Android';
import { withRouter } from 'react-router';

import { useState, useEffect } from 'react';


const options = [
    'Subscriber',
    'User',
];

const ITEM_HEIGHT = 48;

function NavBar(props) {

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [gender, setGender] = React.useState('male');
    const selectGender = (event) => setGender(event.target.value);

    async function Logout() {
        const device_id = await GetDeviceId();
        PostWithAuth('/logout', {
            'device_id': device_id
        }).then(() => {
            props.history.push('/login');
        })
    }

    return (
        <>

            <AppBar style={{ backgroundColor: green[700] }}>
                <Toolbar >
                        <Link to="/home-page">
                            Home
                        </Link>

                        <Button color='inherit'>About</Button>
                        <Link to="/account-setting">
                            Settings
                        </Link>
                        <Button color='inherit'>Details</Button>
                        <Button color='inherit'>Contect Us</Button>
                        <Link to="/profile">
                            Profile
                        </Link>
                        <Button onClick={() => Logout()} color='inherit'>Logout</Button>

                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default withRouter(NavBar);

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
};