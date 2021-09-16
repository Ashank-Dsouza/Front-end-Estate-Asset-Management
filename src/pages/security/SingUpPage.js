import React from "react";
import {
    Container,
    CssBaseline
} from "@material-ui/core";
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'

import AddUserForm from "../../components/forms/AddUserForm";
import { RoutePath } from "../../constants/routes";


function SingUp(props) {

    const navigateToLogin = () => { // the callback. Use a better name
        console.log("inside SignUp. Routing to Login page");
        props.history.push(RoutePath.LoginPage);
      };

    return (
        <>
            <CssBaseline />
            <Container>
                <Container maxWidth="md">
                    <Typography variant="h4" style={{ color: green[700] }}>Get started with a free account</Typography>
                    <Typography>
                        Already have an account?{" "}
                        <NavLink exact to={RoutePath.LoginPage} activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                    </Typography>
                    <AddUserForm navigateToLogin={navigateToLogin} ShowAgreementCheckbox={true}/>
                </Container>
                </Container>
        </>
    );
}

export default withRouter(SingUp);

SingUp.propTypes = {
    history: PropTypes.object.isRequired,
};
