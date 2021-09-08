import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";
import { GetDeviceId } from "../utility/ApiHelperFunctions";
import { PostWithAuth } from "../apis/api-controller";
import { RoutePath } from "../constants/routes";
import ButtonLink from "./ButtonLink";
import { withRouter } from "react-router";
import PropTypes from 'prop-types'

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));
function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function Logout() {
        const device_id = await GetDeviceId();
        PostWithAuth('/logout', {
            'device_id': device_id
        }).then(() => {
            console.log("removing token.... logging out.....");
            sessionStorage.removeItem('userToken');
            props.history.push(RoutePath.LoginPage);
        })
    }

    return (
        <div>
            <Button

                onClick={handleClick}
            >
                <Avatar>P</Avatar>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem >        <ButtonLink Text="Setting" RoutePath={RoutePath.SettingsPage}>Hello</ButtonLink>
                </MenuItem>
                <MenuItem >        <ButtonLink Text="Profile" RoutePath={RoutePath.UserProfile}>Hello</ButtonLink>
                </MenuItem>
                <MenuItem >        <Button style={{textTransform: "none", fontSize: "16px"}} onClick={Logout}>  Logout </Button>                 </MenuItem>

            </StyledMenu>

        </div>
    );
}

export default withRouter(CustomizedMenus);

CustomizedMenus.propTypes = {
    history: PropTypes.object.isRequired,
};

