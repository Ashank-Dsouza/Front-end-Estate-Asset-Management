import { GetWithAuth, DeleteWithAuth } from "../apis/api-controller";

import React from "react";

import {    Typography, Container, CssBaseline,
    IconButton, List, Paper, ListItem, ListItemText, ListItemIcon, Table,
    TableContainer, TableBody, TableHead, TableRow, TableCell, TablePagination,
    Button, AppBar, Toolbar, Hidden, Menu, MenuItem, Drawer, Divider, Link, 
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from "@material-ui/core/colors";
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import AndroidIcon from '@material-ui/icons/Android';
import { useState, useEffect } from 'react';

import LongMenu from "../components/Menu";

export default function MapUser(props) {

    const [page, setPage] = useState(0);
    const [row, setRow] = useState(10);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    var [userList, setUsers] = useState([{ 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }])

    useEffect(() => {
        console.log(props);
        GetUsersAndDisplay();

    }, []);

    async function GetUsersAndDisplay() {
        GetWithAuth('/users')
            .then((response) => {
                const UserDataList = FormatData(response.data)
                setUsers(UserDataList);
            })
    }

    const DeleteUser =  (event) => {
        console.log(event);
        const url = '/users/' + event.id;
        DeleteWithAuth(url)
            .then((response) =>{
                console.log("the user was deleted!");
                GetUsersAndDisplay();
            })
    }

    function FormatData(UserDataList) {
        if(!UserDataList || UserDataList.length == 0){
            return [];
        }
        var formattedUserData = [];
        for (let index = 0; index < UserDataList.length; index++) {
            const User = UserDataList[index];

            formattedUserData.push({
                'username': User.username,
                'email': User.email,
                'Gender': 'Unavaliable',
                'City': 'Unavaliable',
                'Status': 'Unknown',
                'id': User.id,
            })
        }
        return formattedUserData;
    }

    return (
        <>
            <CssBaseline />
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
            <Container style={{ marginTop: 10 }}>
                <TableContainer component={Paper}>
                    <Link href="/add-user" className="btn btn-primary">Add User</Link>

                    {/* <Button variant='contained' color='primary'>Add User</Button> */}
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.slice(page * row, (page + 1) * row).map((item) => (
                                <TableRow>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.Gender}</TableCell>
                                    <TableCell>
                                        <IconButton data-tag={item}  onClick={DeleteUser.bind(null, item)}aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{item.Status} </TableCell>
                                    <TableCell>
                                        <LongMenu />
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TablePagination rowsPerPageOptions={[2, 4, 10, 15]} count={userList.length} rowsPerPage={row} page={page} onChangePage={(event, newPage) => setPage(newPage)} onChangeRowsPerPage={(event) => setRow(event.target.value)} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
