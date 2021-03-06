import React from 'react';
import { Link } from 'react-router-dom';

import {
     AppBar, Toolbar, Box,
} from "@material-ui/core";
import { PostWithAuth } from '../apis/api-controller';
import { GetDeviceId } from '../utility/ApiHelperFunctions';
import PropTypes from 'prop-types'

import { green } from "@material-ui/core/colors";
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { RoutePath } from '../constants/routes';
import ButtonLink from './ButtonLink';

import AvatarMenu from './AvatarMenu';

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
                    <ButtonLink Kind={"White"}  To={RoutePath.MapUser}>USER LIST</ButtonLink>

                    <ButtonLink Kind={"White"}  To={RoutePath.Dashboard}>DASHBOARD</ButtonLink>
                    </Box>
                    <AvatarMenu></AvatarMenu>

                </Toolbar>
            </AppBar>
        </>
    );
}


export default withRouter(NavBar);

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
};