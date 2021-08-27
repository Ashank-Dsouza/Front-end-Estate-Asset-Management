import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';

import {
    IconButton,
    Box,
    InputAdornment,
    Button

} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EditIcon from "@material-ui/icons/Edit";

import { PutWithAuth } from "../apis/api-controller";


const useStyle = theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    loginButton: {
        backgroundColor: green[700],
        color: theme.palette.primary.contrastText,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        "&:hover": {
            backgroundColor: green[600],
            color: theme.palette.primary.contrastText,
        },
        "&:active": {
            backgroundColor: green[700],
            color: theme.palette.primary.contrastText,
        },
    },
    MainTitle: {
        color: green[700],
        [theme.breakpoints.down('sm')]: {
            fontSize: 24
        }
    },
});

class ReactPopup extends React.Component {
    constructor(props) {
        super(props)
        console.log("the props: ", props);
        this.state = {
            email: this.props.UserInfo.email,
            firstName: this.props.UserInfo.firstname,
            lastName: this.props.UserInfo.lastname
        }
    }

    UpdateUserInfo() {
        const url = "/user/edit/" + this.props.UserInfo.id;

        PutWithAuth(url, {
            "email": this.state.email,
            "firstname": this.state.firstName,
            "lastname": this.state.lastName,
        }).then((response) => {
            const userInfo = response.data;

            const firstName = userInfo.firstname;
            const lastName = userInfo.lastname;
            const email = userInfo.email;

            this.setState({ email: email })
            this.setState({ firstName: firstName })
            this.setState({ lastName: lastName })

            const fullName = firstName + " " + lastName;

            this.props.onUpdateInfo(fullName, email);
            console.log("the user was updated!", response);
        })
            .catch((error) => { console.log("updation failed!!!!", error); })
    }

    render() {
        const { classes } = this.props;

        return (<>

            <Popup trigger={<IconButton style={{ color: green[700] }}>
                <EditIcon />
            </IconButton>}
                position="bottom center">
                <div>Popup content here !!</div>
                <Box className={classes.InputFields}>
                    <TextField
                        value={this.state.firstName}
                        onInput={e => this.setState({ firstName: e.target.value })}
                        label="First Name"
                        variant="outlined"
                        className={classes.InputFieldsText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth={true}
                    />
                    <TextField
                        value={this.state.lastName}
                        onInput={e => this.setState({ lastName: e.target.value })}
                        label="Last Name"
                        variant="outlined"
                        className={classes.InputFieldsText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth={true}
                    />

                    <TextField
                        value={this.state.email}
                        onInput={e => this.setState({ email: e.target.value })}
                        label="Email"
                        variant="outlined"
                        className={classes.InputFieldsText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth={true}
                    />
                    <Button onClick={() => this.UpdateUserInfo()} fullWidth className={classes.loginButton} variant="contained">
                        Update
                    </Button>
                </Box>
            </Popup>
        </>)
    };
};
export default withStyles(useStyle, { withTheme: true })(ReactPopup);

ReactPopup.propTypes = {
    UserInfo:      PropTypes.object,
    onUpdateInfo:   PropTypes.func
  }