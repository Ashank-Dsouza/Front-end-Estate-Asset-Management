import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

function Heading(props) {

    return (
        <>
            <Typography variant="h3"> {props.children} </Typography>
        </>
    )

}

export default Heading;

