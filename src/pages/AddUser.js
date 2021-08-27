import React from "react";
import {
    Typography,
    Container,
    CssBaseline,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button,
    AppBar,
    Toolbar,
    Hidden,
    Menu,
    MenuItem,
    Drawer,
    Divider,
    CardMedia,
    Grid,
    TextField,
    InputAdornment,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@material-ui/core";



import { green } from "@material-ui/core/colors";




import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import AndroidIcon from '@material-ui/icons/Android';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";



import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));


export default function AddUser(props) {

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [gender, setGender] = React.useState('male');







    const selectGender = (event) => setGender(event.target.value);




    const classes = useStyles();


    return (
        <>
            <CssBaseline />
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                <List disablePadding style={{ width: '80vw', maxWidth: 300 }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 1" secondary="this is discripation" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 2" secondary="this is discripation" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AndroidIcon />
                        </ListItemIcon>
                        <ListItemText primary="List Item 3" secondary="this is discripation" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar style={{ backgroundColor: green[700] }}>
                <Toolbar>
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <DehazeIcon style={{ color: 'white' }} />
                    </IconButton>
                    <Typography variant='h6' style={{ flex: 1 }}>Menu Component</Typography>
                    <Hidden xsDown>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Details</Button>
                        <Button color='inherit'>Contect Us</Button>
                    </Hidden>
                    <Hidden smUp>
                        <Button variant='text' style={{ color: 'white' }} onClick={(e) => setMenuOpen(e.currentTarget)}>
                            <AppsIcon />
                        </Button>
                        <Menu open={Boolean(menuOpen)} onClose={() => setMenuOpen(null)} anchorEl={menuOpen}>
                            <MenuItem>
                                <Button color='inherit'>Home</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>About</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Details</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color='inherit'>Contect Us</Button>
                            </MenuItem>
                        </Menu>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container style={{ marginTop: 10,marginBottom:32 }}>
                <Typography variant='h4' style={{ color: green[700], marginBottom: 20 }}>Personal Information</Typography>
                <Grid container justifyContent='space-between'>
                    <Grid item md={5} sm={12} xs={12}>
                        <CardMedia src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" component="img" style={{ width: 400, maxWidth: '100%' }} />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} style={{paddingBottom:10}}>
                        <TextField
                            placeholder="Enter User Name"
                            margin="normal"
                            label="User Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Email"
                            margin="normal"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Password"
                            margin="normal"
                            label="Password"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Password"
                            margin="normal"
                            label="Confirm Password"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Phone Number"
                            margin="normal"
                            label="Phone Number"
                            type="number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Address"
                            margin="normal"
                            label="Address"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User City"
                            margin="normal"
                            label="City"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter User Pincode"
                            margin="normal"
                            label="Pincode"
                            type="number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircleOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <FormControl style={{margin:'10px 0px'}}>
                            <FormLabel>Chose gender</FormLabel>
                            <RadioGroup value={gender} onChange={selectGender} row>
                                <FormControlLabel label='Male' control={<Radio style={{ color: green[700] }} />} value='male' />
                                <FormControlLabel label='Female' control={<Radio style={{ color: green[700] }} />} value='female' />
                                <FormControlLabel label='other' control={<Radio style={{ color: green[700] }} />} value='other' />
                            </RadioGroup>
                        </FormControl>
                        <Button variant='contained' color='primary' fullWidth>Add User</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
