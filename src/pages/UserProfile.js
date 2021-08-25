import { GetWithAuth, PutWithAuth } from "../apis/api-controller";

import React from "react";

import {
    Grid,
    Typography,
    Container,
    CssBaseline,
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { green } from "@material-ui/core/colors";


class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            externalData: null,
            redirectToReferrer: false,
            name: 'Blank Name',
            email: 'Blanck Email'
        }
        console.log("the props are: ", props);
    }

    componentWillMount() {
        this._asyncRequest = GetWithAuth('/user/me')
            .then((externalData) => {
                this._asyncRequest = null;
                this.state.name = externalData.data.firstname + " " + externalData.data.lastname;
                this.state.email = externalData.data.email;
                this.setState({ externalData });
                console.log("the reponse is: ", externalData);
            })
            .catch((error) => {
                console.log("the error is ", error);
            })
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    UpdateUser(){
        const firstName = "UpdatedFirstName";
        const lastName = "UpdatedLastName";
        const email = "UpdatedEmail";

        console.log("the external data is: ", this.state.externalData);

        const userId = this.state.externalData.data.id;

        const url = "users/" + userId;

        console.log("the url passed was: ", url);

        PutWithAuth(url, {
            "email": "ashankdsouza8648@yahoo.com",
            "firstname": "Titus",
            "lastname": "Dsilva",
            "password": "password",
            "username": "ashank"
        }).then((response) => { console.log("the user was updated!", response);})
                        .catch((error) => { console.log("updation failed!!!!");})
    }

    render() { //this.SubmitLoginDetails()
        if (this.state.externalData === null) {
            return (<> <p> Loading.... </p></>)
        }
        else {
            return (

                <>
                    <CssBaseline />
                    <Container component={Box} my={4}>
                        <Grid container justifyContent="space-between" spacing={4}>
                            <Grid item md={5} xs={12}>
                                <Card>
                                    <CardHeader
                                        title={
                                            <Typography variant="h4" style={{ color: green[700] }}>
                                                User Details
                                            </Typography>
                                        }
                                        action={
                                            <IconButton onClick={() => { this.UpdateUser() }} style={{ color: green[700] }}>
                                                <EditIcon />
                                            </IconButton>
                                        }
                                    />
                                    <CardContent>
                                        <Typography variant='h4'>{this.state.name}</Typography>
                                        <List disablePadding>
                                            <ListItem>
                                                <ListItemIcon><MailOutlineIcon /></ListItemIcon>
                                                <ListItemText style={{ color: green[700] }} primary={this.state.email} />
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                    </Container>
                </>
            );
        }
    }
}
export default UserProfile;