import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, AppBar, Toolbar, Box, withStyles
} from "@material-ui/core";
import { PostWithAuth } from '../apis/api-controller';
import { GetDeviceId } from '../utility/ApiHelperFunctions';
import PropTypes from 'prop-types'

import { green } from "@material-ui/core/colors";
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    linkButton: {
        textDecoration: 'none',
        color:   'white',
        fontWeight:500
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
            props.history.push('/login');
        })
    }

    return (
        <>

            <AppBar style={{ backgroundColor: green[700], position: 'static' }}>
                <Toolbar >
                    <Box display='flex' flexGrow={1}>
                        {/* this is to align the rest to the right */}
                    </Box>
                    <Link className={classes.linkButton}  to="/home-page">
                        HOME
                    </Link>

                    <Button color='inherit'>About</Button>
                    <Link className={classes.linkButton} to="/account-setting">
                        SETTINGS
                    </Link>
                    <Button color='inherit'>Details</Button>
                    <Button color='inherit'>Contect Us</Button>
                    <Link className={classes.linkButton} to="/profile">
                        PROFILE
                    </Link>
                    <Button onClick={() => Logout()} color='inherit'>Logout</Button>

                </Toolbar>
            </AppBar>
        </>
    );
}


export default withRouter(NavBar);

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
};