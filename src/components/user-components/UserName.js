import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

function UserName(props) {

    return (
        <>
            <Typography variant='h4'>{props.name}</Typography>
        </>
    )

}

export default UserName;

UserName.propTypes = {
    name: PropTypes.string.isRequired
}

