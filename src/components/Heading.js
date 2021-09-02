import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

function Heading(props) {

    return (
        <>
            <Typography variant="h3"> {props.Text} </Typography>
        </>
    )

}

export default Heading;

Heading.propTypes = {
    Text: PropTypes.string.isRequired,
}