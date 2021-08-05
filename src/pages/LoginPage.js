import React from "react";

import {
    Grid,
    Typography,
    Link,
    Box,
    InputAdornment,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import { green } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";

const useStyle = makeStyles((them) => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    loginButton: {
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
        [them.breakpoints.down('sm')]: {
            fontSize: 24
        }
    },
}));

export default function LoginPage(props) {
    const classes = useStyle();

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
                    <Grid item>
                        <Typography variant="h4" className={classes.MainTitle}>
                            Log In to CORK
                        </Typography>
                        <Typography>
                            New Here? <Link href="#"> Create an account</Link>
                        </Typography>
                        <Box my={4} mb={2}>
                            <TextField
                                placeholder="Username"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                placeholder="Password"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                type="password"
                                fullWidth
                            />
                            <FormControl>
                                <FormControlLabel
                                    label={<Typography>Keep me logged in</Typography>}
                                    control={<Checkbox style={{ color: green[700] }} />}
                                />
                            </FormControl>
                            <Button fullWidth className={classes.loginButton} variant="contained">
                                Login
                            </Button>
                            <Link>Forgot Password?</Link>
                        </Box>
                        <Typography>
                            © 2021 All Rights Reserved. CORK is a product of Designreset.
                            <Link style={{ color: green[700] }}>Cookie Preferences, Privacy</Link>, and
                            <Link style={{ color: green[700] }}> Terms</Link>.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
