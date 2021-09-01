import { GetWithAuth } from "../apis/api-controller";
import ReactPopup from "../components/ReactPopup";

import React from "react";
import { withRouter } from "react-router-dom";
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
    ListItemIcon,
    CircularProgress
} from "@material-ui/core";
import PropTypes from 'prop-types'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { green } from "@material-ui/core/colors";
import NavBar from "../components/NavBar";


class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        console.log("the props are: ", props);
        this.state = {
            externalData: null,
            redirectToReferrer: false,
            name: 'Blank Name',
            email: 'Blank Email'
        }
        this.setProfileInfo = this.setProfileInfo.bind(this)
    }

    componentDidMount() {
        this.mounted = true;

        this._asyncRequest = GetWithAuth('/user/me')
            .then((externalData) => {
                console.log("the external data is: ", externalData);
                this._asyncRequest = null;
                const updatedName = externalData.data.firstname + " " + externalData.data.lastname;
                const updatedEmail = externalData.data.email;
                if(this.mounted){
                    this.setProfileInfo(updatedName, updatedEmail);
                    this.setState({ externalData });
                }
                console.log("the reponse is: ", externalData);
                
            })
            .catch((error) => {
                console.log("the error recorded in UserProfile is ", error);
                this.props.history.push('/page-not-found')
            })
    }

    componentWillUnmount(){
        this.mounted = false;
      }

    setProfileInfo(updatedName, updatedEmail){
        this.setState({name: updatedName})
        this.setState({email: updatedEmail})
    }

    render() { 
        
        if (this.state.externalData === null) {
            return (<> 	
                    <NavBar/>		
                    <CircularProgress />
                </>)
        }
        else {
            return (

                <>
                    <CssBaseline />
                    <NavBar/>
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
export default withRouter(UserProfile);

UserProfile.propTypes = {
    history: PropTypes.object.isRequired,
};