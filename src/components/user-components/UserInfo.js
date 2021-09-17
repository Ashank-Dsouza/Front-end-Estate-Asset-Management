import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import UserName from "./UserName";

function UserInfo({name, email}) {

    return (
        <>
        <UserName name={name}></UserName>
        <Typography variant='h6'>{email}</Typography>

        </>
    )

}

export default UserInfo;

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

