import UserRow from "../components/UserRow";

import { GetWithAuth, PostWithAuth } from "../apis/api-controller";

import React from "react";

import {
    Container, CssBaseline, Paper, Table,
    TableContainer, TableBody, TableHead,
    TableRow, TableCell, TablePagination,
    MenuItem, Link, Select, CircularProgress
}
    from "@material-ui/core";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";


import NotEnoughPermissions from "./NotEnoughPermissions";
import NavBar from "../components/NavBar";

function MapUser(props) {

    const [page, setPage] = useState(0);
    const [row, setRow] = useState(10);

    var selectedUsers = [];

    var [userList, setUsers] = useState(null);
    useEffect(() => {
        GetUsersAndDisplay();
    }, []);

    async function GetUsersAndDisplay() {
        GetWithAuth('/users')
            .then((response) => {
                console.log("the user data is: ", response);
                const UserDataList = FormatData(response.data)
                setUsers(UserDataList);
            })
            .catch((error) => {
                props.history.push('/not-allowed');
            })
    }

    function GetAssignableRoles(roles) {
        if(!roles)
            return "Unassigned";
        for (let index = 0; index < roles.length; index++) {
            const role = roles[index];
            if(role.name === "Guest" || role.name === "Customer"){
                return role.name
            }
        } 
            return "Unassigned";
    }

    function FormatData(UserDataList) {
        if (!UserDataList || UserDataList.length == 0) {
            return [];
        }
        var formattedUserData = [];
        for (let index = 0; index < UserDataList.length; index++) {
            const User = UserDataList[index];
            const role = GetAssignableRoles(User.roles)

            formattedUserData.push({
                'username': User.username,
                'email': User.email,
                'id': User.id,
                'role': role
            })
        }
        return formattedUserData;
    }

    function ChangeSelection(UserId, Selected) {
        if (Selected) {
            AddUserToSelection(UserId);
        }
        else {
            DeleteUserToSelection(UserId);
        }
    }

    function AddUserToSelection(UserId) {
        selectedUsers.push(UserId);
    }
    function DeleteUserToSelection(UserId) {
        selectedUsers = selectedUsers.filter(function (item) {
            return item !== UserId
        })
    }

    const handleChange = (event) => {
        if(selectedUsers.length === 0){
            console.log("no user selected. ");
            return
        }
        const chosenRole = event.target.value;
        const roleToRoleId = {
            "Guest": "4",
            "Customer": "3"
        }
        console.log(roleToRoleId[chosenRole]);
        const roleId = roleToRoleId[chosenRole];

        const url = "/roles/" + roleId + "/users";
        PostWithAuth(url, {
            "users": selectedUsers
        }).then((response) => {
            GetUsersAndDisplay();
            console.log("assigned role to users");

        })
    };

    return (

        <>
            <NavBar />

            {
                userList === null ?
                    (
                        <CircularProgress />
                    ) :
                    (
                        <div>
                            <CssBaseline />
                            
                            <Container style={{ marginTop: 10 }}>
                            <Link href="/add-user" className="btn btn-primary">Add User</Link>

                            <Select  onChange={handleChange}
                                    label="Role" variant='outlined'  style={{ marginTop: 10,
                                                                                       float:"right"
                                                                                     }}>
                                    <MenuItem value={'Guest'} >Guest</MenuItem>
                                    <MenuItem value={'Customer'}>Customer</MenuItem>
                                </Select>
                                
                                <TableContainer component={Paper}>

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
                        </div>
                    )

            }
        </>
    );
}

export default withRouter(MapUser);

MapUser.propTypes = {
    history: PropTypes.object.isRequired,
};
