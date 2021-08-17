import React from "react";
import { useState } from 'react';
import {
  Grid, Typography, InputAdornment,
  Container, CssBaseline, Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  TextField,
  Link,
} from "@material-ui/core";
import { Post } from "./../apis/api-controller";
import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

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

export default function PasswordRecoverPage(props) {
  const classes = useStyle();

  const [email, setEmailInput] = useState(''); // '' is the initial state value

  const submitOnClick = async(event) => {
    console.log("the value of email input is: ", email);
    var response = await Post('/users/sendMail', {
      Email: email
    })
  }


  return (
    <>
      <CssBaseline />
      <Container>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          className={classes.root}
        >
          <Grid item xs={12} md={8}>
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
            <Typography>
              © 2021 All Rights Reserved. TruVest is a product of Designreset.
              <Link style={{ color: green[700] }}>Cookie Preferences, Privacy</Link>, and
              <Link style={{ color: green[700] }}> Terms</Link>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
