import React from "react";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { Put } from "../../apis/api-controller";

import { RoutePath } from "../../constants/routes";

import { useParams } from "react-router";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Heading from "../../components/Heading";


function CodeVerificationForm(props) {
    const { pin } = useParams(null);

    useEffect(() => {
        // This effect uses the `value` variable,
        // so it "depends on" `value`.
        console.log("the value is now: ");
        console.log(pin);
        await Put('/user/verifyPIN', {
            PIN: pin
        }).then((response) => {
            props.history.push(RoutePath.PasswordResetPage)
        })
          .catch((error) => {
            props.history.push(RoutePath.SomethingWentWrongPage);
          })
      }, [pin])

    return (
        <>
        <NavBar></NavBar> 
        <Heading >Reset Password</Heading>
        <div>   Reset Pin: { pin }</div>
        </>
    );
}

export default withRouter(CodeVerificationForm);

CodeVerificationForm.propTypes = {
    history: PropTypes.object.isRequired,
    Email: PropTypes.string.isRequired,
};