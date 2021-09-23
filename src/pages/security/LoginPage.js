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
import { TextField } from "@material-ui/core";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from "@material-ui/icons/Lock";
import { Post } from "../../apis/api-controller";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import PropTypes from 'prop-types'
import { GetDeviceId } from "../../utility/ApiHelperFunctions";

import { RoutePath } from "../../constants/routes";
import { MockSetup } from "../../variables";


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

function GetRandomNumberString() {
    var deviceIdNumber = Math.floor((Math.random() * 1000) + 1);
    const deviceId = deviceIdNumber.toString()
    return deviceId;
}


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: ''
        }
        this.SubmitLoginDetails = this.SubmitLoginDetails.bind(this);
    }

    async SubmitLoginDetails() {
        console.log("the email entered is: ", this.state.email);
        console.log("the password entered is: ", this.state.password);
        const deviceId = await GetDeviceId();

        Post('/login', {
            Email: this.state.email,
            Password: this.state.password,
            DeviceID: deviceId
        })
            .then((response) => {
                console.log("the response is: ", response);
                if (response?.data?.access_token) {
                    this.SetUserTokenGotoHomePage(response.data.access_token);
                }
            })

    };

    SetUserTokenGotoHomePage(token){
        sessionStorage.setItem('userToken', token)
        this.props.history.push(RoutePath.Dashboard)
    }

    render() {
        const { classes } = this.props;

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
                                Log In to TruVest
                            </Typography>
                            <Typography>
                                New Here?  <Link href={RoutePath.SignUpPage}> Create an account</Link>
                            </Typography>
                            <Typography>
                                Please make sure you have confirmed your email before trying to login. 
                            </Typography>
                            <Box my={4} mb={2}>
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
                                <TextField
                                    value={this.state.password}
                                    onInput={e => this.setState({ password: e.target.value })}
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
                                <Button  onClick={() => this.SubmitLoginDetails()} fullWidth className={classes.loginButton} variant="contained">
                                    Login
                                </Button>
                                <Typography>
                                    <Link href={RoutePath.ForgotPasswordPage} activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Forgot Password?</Link>
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </>
        );
    }
}
export default withStyles(useStyle, { withTheme: true })(LoginPage);

LoginPage.propTypes = {
    history: PropTypes.object.isRequired,
};