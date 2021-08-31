import UserRow from "../components/UserRow";

import { GetWithAuth, PostWithAuth } from "../apis/api-controller";

import React from "react";

import {    Container, CssBaseline, Paper,  Table,
    TableContainer, TableBody, TableHead, TableRow, TableCell, TablePagination,
 MenuItem, Link, Select,
} from "@material-ui/core";
import { useState, useEffect } from 'react';


import NavBar from "../components/NavBar";

export default function MapUser(props) {
    const [role, setRole] = useState('');

    const [page, setPage] = useState(0);
    const [row, setRow] = useState(10);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    var selectedUsers = [];

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
                'id': User.id,
            })
        }
        return formattedUserData;
    }

    function ChangeSelection(UserId, Selected) {
        if(Selected){
            AddUserToSelection(UserId);
        }
        else{
            DeleteUserToSelection(UserId);
        }
        console.log("the selected user is now: ", selectedUsers);
    }

    function AddUserToSelection(UserId) {
        selectedUsers.push(UserId);
        console.log("the user was added! ", UserId);
    }
    function DeleteUserToSelection(UserId) {
        console.log("the user was removed! ", UserId);
        selectedUsers = selectedUsers.filter(function(item) {
            return item !== UserId
        })
    }

  const handleChange = (event) => {
    console.log("the value selected is: ", event.target.value);
    const chosenRole = event.target.value;
    const roleToRoleId ={
        "Guest": "4",
        "Customer": "3"
    }
    console.log(roleToRoleId[chosenRole]);
    const roleId = roleToRoleId[chosenRole];

    const url = "/roles/" + roleId + "/users";
    PostWithAuth(url, {
        "users": selectedUsers
    }).then((response) =>{
        console.log("assigned role to users");
    })
  };

    return (
        <>
            <CssBaseline />
            <NavBar/>
      
            <Container style={{ marginTop: 10 }}>
            <Select onChange={handleChange}
                        label="Role" variant='outlined' fullWidth>
                        <MenuItem value={'Guest'} >Guest</MenuItem>
                        <MenuItem value={'Customer'}>Customer</MenuItem>
                    </Select>
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
                                <UserRow UpdateUsers={GetUsersAndDisplay} UserData={item} onCheckBoxChange={ChangeSelection} />
                            ))}
                            <TablePagination rowsPerPageOptions={[2, 4, 10, 15]} count={userList.length} rowsPerPage={row} page={page} onChangePage={(event, newPage) => setPage(newPage)} onChangeRowsPerPage={(event) => setRow(event.target.value)} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
