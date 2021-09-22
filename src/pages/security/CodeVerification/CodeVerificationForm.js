import React, {useContext} from "react";
import { useState } from 'react';
import {
    Typography,
    Card,
    CardHeader,
    CardActions,
    Button,
    TextField,
    Box
} from "@material-ui/core";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { Put } from "../../../apis/api-controller";

import { makeStyles } from "@material-ui/core/styles";
import { RoutePath } from "../../../constants/routes";

import { green } from "@material-ui/core/colors";
import { EmailContext } from "../../../state-management/EmailContext";
import ErrorHandler from "../../../components/forms/withErrorMessage";
import FormatForm from "../../../components/forms/withPageFormatting";

const useStyle = makeStyles((them) => ({
    resetButton: {
        backgroundColor: green[700],
        color: them.palette.primary.contrastText,
        marginTop: them.spacing(4),
        marginBottom: them.spacing(4),
        "&:hover": {
            backgroundColor: green[600],
            color: them.palette.primary.contrastText,
        },
        "&:active": {
            backgroundColor: green[700],
            color: them.palette.primary.contrastText,
        },
    },
    MainTitle: {
        color: green[700],
        [them.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
}));

function CodeVerificationForm(props) {
    const classes = useStyle();

    const [code, setCode] = useState('');

    const [userEmail, setUserEmail] = useContext(EmailContext);


    const submitOnClick = async (event) => {
        console.log("the value of code input is: ", code);
        console.log("the value of email is: ", userEmail);
        var response = await Put('/user/verifyPIN', {
            PIN: code
        }).then((response) => {
            props.history.push(RoutePath.PasswordResetPage)
        })
          .catch((error) => {
            if (error?.response?.data?.error) {
                const errorMessage = error.response.data.error;
                props.handleSubmitError(errorMessage);
            }
          })
    }

    let hideEmail = function(email) {
        return email.replace(/(.{2})(.*)(?=@)/,
          function(gp1, gp2, gp3) { 
            for(let i = 0; i < gp3.length; i++) { 
              gp2+= "*"; 
            } return gp2; 
          });
      };

    return (
        <>
                        <Card style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardHeader
                                title={
                                    <Typography variant="h4" className={classes.MainTitle}>
                                        We sent a code to your email
                                    </Typography>
                                }
                                subheader={"Enter the verification code sent to " + hideEmail(userEmail)}
                            />
                            <Box className={classes.InputFields}>
                                <TextField
                                    value={code}
                                    onInput={e => setCode(e.target.value)}
                                    label="Verification Code"
                                    variant="outlined"
                                    // className={classes.InputFieldsText}
                                
                                    fullWidth={true}
                                />

                            </Box>
                            <CardActions>
                                <Button
                                    onClick={() => submitOnClick()}
                                    variant="contained"
                                    className={classes.resetButton}
                                    fullWidth
                                >
                                    Reset
                                </Button>
                            </CardActions>
                        </Card>
        </>
    );
}
const CodeVerificationFormWithRouter = withRouter(CodeVerificationForm);    

const FormWithErrorHandler =  ErrorHandler(CodeVerificationFormWithRouter);
 const CodeVerificationPage = FormatForm(FormWithErrorHandler)

export default CodeVerificationPage;

CodeVerificationForm.propTypes = {
    history: PropTypes.object.isRequired,
    Email: PropTypes.string.isRequired,
};