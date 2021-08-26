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
import { Post } from "./../apis/api-controller";
import { withStyles } from "@material-ui/core/styles";


import Auth from "./../auth/Auth"
import { green } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import FingerprintJS from '@fingerprintjs/fingerprintjs'


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

async function GetDeviceId() {
    const fpPromise = FingerprintJS.load()
    const fp = await fpPromise
    const result = await fp.get()

    // This is the visitor identifier:
    const deviceId = result.visitorId
    console.log(deviceId);
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
        console.log(props);
        this.SubmitLoginDetails = this.SubmitLoginDetails.bind(this);
    }

    async SubmitLoginDetails() {
        //event.preventDefault();
        console.log("the email entered is: ", this.state.email);
        console.log("the password entered is: ",this.state.password);
        var deviceId = null;

        if(this.props.IsMockOn){
            console.log("the mock has been turned on!!");
            deviceId = Math.floor((Math.random() * 1000) + 1);
        }
        else{
            deviceId = await GetDeviceId();
        }

        Post('/login', {
            Email: this.state.email,
            Password: this.state.password,
            DeviceID: deviceId
        })
            .then((response) => {
                console.log("the response is: ", response);
                if (response?.data?.access_token) {
                    sessionStorage.setItem('userToken', response.data.access_token)
                    this.props.history.push('/home-page')
                }
            })

    };

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
                                New Here?  <Link href="/sign-up"> Create an account</Link>
                            </Typography>
                            <Box my={4} mb={2}>
                                <TextField
                                    value={this.state.email}
                                    onInput={e => this.setState({email: e.target.value}) }
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
                                    onInput={e => this.setState({password: e.target.value})  }
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
                                <Button onClick={() => this.SubmitLoginDetails()} fullWidth className={classes.loginButton} variant="contained">
                                    Login
                                </Button>
                                <Typography>
                                    <Link href="/forgot-password" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Forgot Password?</Link>
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