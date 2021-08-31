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

    useEffect(() => {
        console.log(props);

    }, []);

    async function Logout() {
        const device_id = "389489774676758543234-8686-9";
        //= await GetDeviceId();
        PostWithAuth('/logout', {
            'device_id': device_id
        }).then(() =>{
            // const {location} = props;
            props.history.push('/login');
        })
    }

  return (
    <>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                <List disablePadding style={{ width: '80vw', maxWidth: 300 }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 1" secondary="this is discripation" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 2" secondary="this is discripation" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 3" secondary="this is discripation" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar style={{ backgroundColor: green[700] }}>
                <Toolbar>
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <DehazeIcon style={{ color: 'white' }} />
                    </IconButton>
                    <Typography variant='h6' style={{ flex: 1 }}>Menu Component</Typography>
                    <Hidden xsDown>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Details</Button>
                        <Button color='inherit'>Contect Us</Button>
                        <Link to="/profile">
                                Profile
                        </Link>
                        <Button onClick={() => Logout()} color='inherit'>Logout</Button>

                    </Hidden>
                    <Hidden smUp>
                        <Button variant='text' style={{ color: 'white' }} onClick={(e) => setMenuOpen(e.currentTarget)}>
                            <AppsIcon />
                        </Button>
                        <Menu open={Boolean(menuOpen)} onClose={() => setMenuOpen(null)} anchorEl={menuOpen}>
                            <MenuItem>
                                <Button color='inherit'>Home</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>About</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Details</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Contect Us</Button>
                            </MenuItem>
                        </Menu>
                    </Hidden>
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