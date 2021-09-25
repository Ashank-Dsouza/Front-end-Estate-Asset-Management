import React, {useContext} from "react";
import { useState } from 'react';
import {
  Typography, InputAdornment,
  Card, CardContent,
  CardHeader,CardActions,
  Button, TextField,
} from "@material-ui/core";
import { Post } from "../../apis/api-controller";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import SubmitHandler from "../../components/forms/withErrorMessage";
import FormatForm from "../../components/forms/withPageFormatting";

import { RoutePath } from "../../constants/routes";

import { green } from "@material-ui/core/colors";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { EmailContext } from "../../state-management/EmailContext";


const useStyle = makeStyles((them) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
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

function ForgotPasswordForm(props) {
  const classes = useStyle();

  const [email, setEmailInput] = useState(''); // '' is the initial state value

  const [userEmail, setUserEmail] = useContext(EmailContext);

  const submitOnClick = async(event) => {
    console.log("the value of email input is: ", email);
    var response = await Post('/users/sendMail', {
      Email: email
    }).then((resp) =>{
      setUserEmail(email)
      props.handleSubmitSuccess("Reset Email Sent", "Please follow the instructions in\
                                                     the email sent to you registered email.")
    }) .catch((error) => {
      if (error?.response?.data?.error) {
          const errorMessage = error.response.data.error;
          props.handleSubmitError(errorMessage);
      }
    })
  }


  return (
    <>
            <Card style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardHeader
                title={
                  <Typography variant="h4" className={classes.MainTitle}>
                    Password Recovery
                  </Typography>
                }
                subheader="Enter your email and instructions will be sent to you!"
              />
              <CardContent>
                <TextField
                  value={email}
                  onInput={e => setEmailInput(e.target.value)}
                  placeholder="Email"
                  margin="normal"
                  type='email'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />
              </CardContent>
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

const ForgotPasswordWithRouter = withRouter(ForgotPasswordForm);    

const FormWithErrorHandler =  SubmitHandler(ForgotPasswordWithRouter);

const ForgotPasswordPage = FormatForm(FormWithErrorHandler)

export default ForgotPasswordPage;

ForgotPasswordForm.propTypes = {
    history: PropTypes.object.isRequired,

};