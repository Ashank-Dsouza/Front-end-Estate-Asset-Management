import { GetWithAuth, PutWithAuth } from "../apis/api-controller";
import ReactPopup from "../components/ReactPopup";

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
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";

import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { green } from "@material-ui/core/colors";


class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            externalData: null,
            redirectToReferrer: false,
            name: 'Blank Name',
            email: 'Blank Email'
        }
        this.setProfileInfo = this.setProfileInfo.bind(this)

    }

    componentWillMount() {
        this._asyncRequest = GetWithAuth('/user/me')
            .then((externalData) => {
                this._asyncRequest = null;
                const updatedName = externalData.data.firstname + " " + externalData.data.lastname;
                const updatedEmail = externalData.data.email;
                this.setProfileInfo(updatedName, updatedEmail);
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

    setProfileInfo(updatedName, updatedEmail){
        this.setState({name: updatedName})
        this.setState({email: updatedEmail})
    }

    render() { 
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
                                            <ReactPopup UserInfo={this.state.externalData.data}  onUpdateInfo={this.setProfileInfo}> </ReactPopup>
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