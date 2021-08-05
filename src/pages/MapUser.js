import React from "react";

import {
    Typography,
    Container,
    CssBaseline,
    IconButton,
    List,
    Paper,
    ListItem,
    ListItemText,
    ListItemIcon,
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TablePagination,
    Button,
    AppBar,
    Toolbar,
    Hidden,
    Menu,
    MenuItem,
    Drawer,
    Divider,
    Select
} from "@material-ui/core";




import { green } from "@material-ui/core/colors";


import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import AndroidIcon from '@material-ui/icons/Android';


const dummyArrat = [{ 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }, { 'username': 'Ahmad.Nader89', 'email': "Ahmad_Nader91@yahoo.com", "Gender": 'Female', "City": "South Coleville", "Status": 'Approved' }]


export default function MapUser(props) {

    const [page, setPage] = React.useState(0);
    const [row, setRow] = React.useState(10);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

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
            <Container style={{ marginTop: 10 }}>
                <TableContainer component={Paper}>
                    <Button variant='contained' color='primary'>Add User</Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dummyArrat.slice(page * row, (page + 1) * row).map((item) => (
                                <TableRow>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.Gender}</TableCell>
                                    <TableCell>{item.City}</TableCell>
                                    <TableCell>{item.Status}</TableCell>
                                    <TableCell>
                                        <Select label="Role" variant='outlined' fullWidth>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TablePagination rowsPerPageOptions={[2, 4, 10, 15]} count={dummyArrat.length} rowsPerPage={row} page={page} onChangePage={(event, newPage) => setPage(newPage)} onChangeRowsPerPage={(event) => setRow(event.target.value)} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}
