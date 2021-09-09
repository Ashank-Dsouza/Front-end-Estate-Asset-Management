import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";
import { RoutePath } from "../constants/routes";
import ButtonLink from "./ButtonLink";
import LogoutButton from "./LogoutButton";

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
function AvatarMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


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
                <MenuItem >        <ButtonLink To={RoutePath.SettingsPage}>Setting</ButtonLink>
                </MenuItem>
                <MenuItem >        <ButtonLink To={RoutePath.UserProfile}>Profile</ButtonLink>
                </MenuItem>
                <MenuItem >        <LogoutButton > Logout </LogoutButton>                 </MenuItem>

            </StyledMenu>

        </div>
    );
}

export default AvatarMenu;



