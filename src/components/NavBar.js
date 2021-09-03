import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, AppBar, Toolbar, Box,
} from "@material-ui/core";
import { PostWithAuth } from '../apis/api-controller';
import { GetDeviceId } from '../utility/ApiHelperFunctions';
import PropTypes from 'prop-types'

import { green } from "@material-ui/core/colors";
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { RoutePath } from '../constants/routes';
import LongMenu from './Menu';

import { Avatar } from '@material-ui/core';
import {
    Container, CssBaseline, Paper, Table,
    TableContainer, TableBody, TableHead,
    TableRow, TableCell, TablePagination, IconButton,
    MenuItem, Select, CircularProgress, InputLabel, FormControl
}
    from "@material-ui/core";

import CustomizedMenus from './CustomisedMenu';

const useStyles = makeStyles((theme) => ({
    linkButton: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 500,
        paddingLeft: '20px'
    },
}));

function NavBar(props) {

    const classes = useStyles();

    async function Logout() {
        const device_id = await GetDeviceId();
        PostWithAuth('/logout', {
            'device_id': device_id
        }).then(() => {
            console.log("removing token.... logging out.....");
            sessionStorage.removeItem('userToken');
            props.history.push(RoutePath.LoginPage);
        })
    }

    return (
        <>

            <AppBar style={{ backgroundColor: green[700], position: 'static' }}>
                <Toolbar >
                    <Box display='flex' flexGrow={1}>
                        {/* this is to align the rest to the right */}
                    </Box>

                    <Link className={classes.linkButton} to={RoutePath.MapUser}>
                        USER LIST
                    </Link>

                    <Link className={classes.linkButton} to={RoutePath.Dashboard}>
                        DASHBOARD
                    </Link>

                    <Link className={classes.linkButton} to={RoutePath.SettingsPage}>
                        SETTINGS
                    </Link>
                    <Link className={classes.linkButton} to={RoutePath.UserProfile}>
                        PROFILE
                    </Link>

                    <CustomizedMenus></CustomizedMenus>

                </Toolbar>
            </AppBar>
        </>
    );
}


export default withRouter(NavBar);

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
};