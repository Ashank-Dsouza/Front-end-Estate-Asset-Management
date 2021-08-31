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
import NavBar from "../components/NavBar";

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
            <NavBar/>
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
