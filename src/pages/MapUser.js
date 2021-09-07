import UserRow from "../components/UserRow";
import { GetWithAuth, PostWithAuth, DeleteWithAuth } from "../apis/api-controller";
import React from "react";
import {
    Container, CssBaseline, Paper, Table,
    TableContainer, TableBody, TableHead,
    TableRow, TableCell, TablePagination,
    MenuItem, Link, Select, CircularProgress, Button, InputLabel, FormControl
}
    from "@material-ui/core";
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { RoutePath } from "../constants/routes";
import Heading from "../components/Heading";
import ConfirmationPopup from "../components/ConfirmationPopup";

import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
    linkButton: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 500,
        backgroundColor: '#3f51b5',
        padding: '12px 18px',
        borderRadius: '4px',
    },
}));

function MapUser(props) {

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [row, setRow] = useState(10);

    var [userList, setUsers] = useState(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    var roleToRoleId = {
        "Guest": null,
        "Customer": null
    }

    var selectedUsers = [];

    var selectedUserToBeDeleted = null;

    const SelectedUserId = useRef(null);


    function openConfirmationPopup(user_id){
        console.log("confirm the deletion");
        if(!SelectedUserId){
            console.log("no user was selected!!! expected selection!");
            return;
        }
        SelectedUserId.current = user_id;
        //isPopupOpen = true;
        console.log("the value of the popup is: ", isPopupOpen);
        setIsPopupOpen(true);
        //console.log("the value of isOpen is: ", isPopupOpen);

    }

    async function DeleteUser(){
        if(!SelectedUserId.current){
            console.log("error: no user was selected!");
            return;
        }
        const url = '/users/' + SelectedUserId.current;
        DeleteWithAuth(url)
            .then((response) =>{
                console.log("the user was deleted! ", response);
                GetUsersAndDisplay();
            })
    }

    useEffect(() => {
        SetRoleIds();
        GetUsersAndDisplay();
    }, []);

    async function SetRoleIds() {
        GetWithAuth('/roles')
            .then((response) => {
                console.log("the roles are: ", response);
                roleToRoleId = GetRoleMap(response.data)
            })
            .catch((error) => {
                props.history.push(RoutePath.NotAllowed);
            })
    }

    function GetRoleMap(Roles) {
        var roleToRoleId = {
            "Guest": "4",
            "Customer": "3"
        }

        for (let index = 0; index < Roles.length; index++) {
            const role = Roles[index];
            if(role.name === "Customer"){
                roleToRoleId["Customer"] = role.id.toString()
            }
            else if(role.name === "Guest"){
                roleToRoleId["Guest"] = role.id.toString()
            }
            
        }
        return roleToRoleId;
    }

    async function GetUsersAndDisplay() {
        GetWithAuth('/users')
            .then((response) => {
                console.log("the user data is: ", response);
                const UserDataList = FormatData(response.data)
                setUsers(UserDataList);
            })
            .catch((error) => {
                props.history.push(RoutePath.NotAllowed);
            })
    }

    function GetAssignableRoles(roles) {
        if (!roles)
            return "Unassigned";
        for (let index = 0; index < roles.length; index++) {
            const role = roles[index];
            if (role.name === "Guest" || role.name === "Customer") {
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

    const AssignRole = (event) => {
        const chosenRole = event.target.value;
        if (selectedUsers.length === 0 || !chosenRole) {
            console.log("no user selected. ");
            return
        }
        const roleToRoleId = {
            "Guest": "4",
            "Customer": "3"
        }
        console.log("the selected role is: ", chosenRole);
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

    const ClosePopup = () =>{
        setIsPopupOpen(false);
    }

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
                            <Container style={{ marginTop: 20 }}>
                                <Heading Text={"User List"}> </Heading>
                                <ConfirmationPopup ClosePopup={ClosePopup} Message={"Do you really want to delete this user?"} onConfirm={DeleteUser} IsOpen={isPopupOpen} />
                                <Link href={RoutePath.AddUserPage} className={classes.linkButton} >Add User</Link>
                                <FormControl style={{ float: "right", width: '170px' }}>
                                    <InputLabel style={{paddingLeft: '10px'}} id="demo-simple-select-label">Assign Role</InputLabel>
                                    <Select onChange={AssignRole}
                                        label="Role" variant='outlined' >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Guest'} >Guest</MenuItem>
                                        <MenuItem value={'Customer'}>Customer</MenuItem>
                                    </Select>
                                </FormControl>

                                <TableContainer component={Paper}>

                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Select</TableCell>
                                                <TableCell>Username</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Role</TableCell>
                                                <TableCell>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {userList.slice(page * row, (page + 1) * row).map((item) => (
                                                <UserRow  onDelete={openConfirmationPopup} UserData={item} onCheckBoxChange={ChangeSelection} />
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
