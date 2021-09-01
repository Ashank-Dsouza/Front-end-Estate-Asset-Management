import React from 'react';
import { Link } from 'react-router-dom';

import { Button, AppBar, Toolbar, 
} from "@material-ui/core";
import { PostWithAuth } from '../apis/api-controller';
import { GetDeviceId } from '../utility/ApiHelperFunctions';
import PropTypes from 'prop-types'


import { green } from "@material-ui/core/colors";
import { withRouter } from 'react-router';



const ITEM_HEIGHT = 48;

function NavBar(props) {

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
        </>
    );
}

export default withRouter(NavBar);

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
};