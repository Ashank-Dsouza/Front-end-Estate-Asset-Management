import UserRow from "../components/UserRow";
import { GetWithAuth, PostWithAuth, DeleteWithAuth } from "../apis/api-controller";
import React from "react";
import {
    Container, CssBaseline, Paper, Table,
    TableContainer, TableBody, TableHead,
    TableRow, TableCell, TablePagination,
    MenuItem, Select, CircularProgress, InputLabel, FormControl
}
    from "@material-ui/core";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { RoutePath } from "../constants/routes";
import Heading from "../components/Heading";
import ConfirmationPopup from "../components/ConfirmationPopup";

import NavBar from "../components/NavBar";
import ButtonLink from "../components/ButtonLink";

class MapUser extends React.Component{

    constructor(props){
        super(props);
        console.log("the props are ", props);
        this.state ={
            page: 0,
            row: 10,
            userList: null,
            isPopupOpen: false,
            roleToRoleId: null
        }
        this.selectedUsers = [];
        this.roleToRoleId = {
            "Guest": null,
            "Customer": null
        }

        this.selectedUserToBeDeleted = null;
        this.SelectedUserId = React.createRef(null);
    }

    componentDidMount(){
        this.SetRoleIds();
        this.GetUsersAndDisplay();
    }

    openConfirmationPopup = (user_id) => {
        console.log("confirm the deletion");
        if(!this.SelectedUserId){
            console.log("no user was selected!!! expected selection!");
            return;
        }
        this.SelectedUserId.current = user_id;
        this.setState({isPopupOpen: true})
    }

    DeleteUser = async() => {
        console.log(this.SelectedUserId);
        if(!this.SelectedUserId.current){
            console.log("error: no user was selected!");
            return;
        }
        const url = '/users/' + this.SelectedUserId.current;
        DeleteWithAuth(url)
            .then((response) =>{
                console.log("the user was deleted! ", response);
                this.GetUsersAndDisplay();
            })
    }

    async SetRoleIds() {
        GetWithAuth('/roles')
            .then((response) => {
                console.log("the roles are: ", response);
                this.roleToRoleId = this.GetRoleMap(response.data)
            })
            .catch((error) => {
                this.props.history.push(RoutePath.NotAllowed);
            })
    }

    async GetRoleMap(Roles) {
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

    async GetUsersAndDisplay() {
        GetWithAuth('/users')
            .then((response) => {
                console.log("the user data is: ", response);
                const UserDataList = this.FormatData(response.data)
                console.log("setting state of userList with ", UserDataList);
                this.setState({userList: UserDataList});
            })
            .catch((error) => {
                this.props.history.push(RoutePath.NotAllowed);
            })
    }

    GetAssignableRoles(roles) {
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

    FormatData(UserDataList) {
        if (!UserDataList || UserDataList.length == 0) {
            return [];
        }
        var formattedUserData = [];
        for (let index = 0; index < UserDataList.length; index++) {
            const User = UserDataList[index];
            const role = this.GetAssignableRoles(User.roles)

            formattedUserData.push({
                'username': User.username,
                'email': User.email,
                'id': User.id,
                'role': role
            })
        }
        return formattedUserData;
    }

    ChangeSelection = (UserId, Selected) => {
        if (Selected) {
            this.AddUserToSelection(UserId);
        }
        else {
            this.DeleteUserToSelection(UserId);
        }
    }

    AddUserToSelection = (UserId) => {
        this.selectedUsers.push(UserId);
    }
    DeleteUserToSelection = (UserId) => {
        this.selectedUsers = this.selectedUsers.filter(function (item) {
            return item !== UserId
        })
    }

    AssignRole = (event) => {
        const chosenRole = event.target.value;
        if (this.selectedUsers.length === 0 || !chosenRole) {
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
            "users": this.selectedUsers
        }).then((response) => {
            this.GetUsersAndDisplay();
            console.log("assigned role to users");

        })
    };

    ClosePopup = () => {
        this.setState({isPopupOpen: false})
    }

    render(){
        const { classes } = this.props;
        console.log("rendering with ", this.state.userList);

    return (

        <>
            <NavBar />

            {
                this.state.userList === null || this.state.userList === undefined ?
                    (
                        <CircularProgress />
                    ) :
                    (
                        <div>
                            <CssBaseline />
                            <Container style={{ marginTop: 20 }}>
                                <Heading Text={"User List"}> </Heading>
                                <ConfirmationPopup ClosePopup={this.ClosePopup} Message={"Do you really want to delete this user?"} onConfirm={this.DeleteUser} IsOpen={this.state.isPopupOpen} />
                                <ButtonLink Text={"Add User"} Kind={"Blue"} To={RoutePath.AddUserPage}  >Add User</ButtonLink>
                                <FormControl style={{ float: "right", width: '170px' }}>
                                    <InputLabel style={{paddingLeft: '10px'}} id="demo-simple-select-label">Assign Role</InputLabel>
                                    <Select onChange={this.AssignRole}
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
                                            {this.state.userList.slice(this.state.page * this.state.row, (this.state.page + 1) * this.state.row).map((item) => (
                                                <UserRow  onDelete={this.openConfirmationPopup} UserData={item} onCheckBoxChange={this.ChangeSelection} />
                                            ))}
                                            <TablePagination rowsPerPageOptions={[2, 4, 10, 15]} count={this.state.userList.length} rowsPerPage={this.state.row} page={this.state.page} onChangePage={(event, newPage) => this.setState({page: newPage})} onChangeRowsPerPage={(event) => this.setState({row: event.target.value})} />
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
}

export default withRouter(MapUser);

MapUser.propTypes = {
    history: PropTypes.object.isRequired,
};
