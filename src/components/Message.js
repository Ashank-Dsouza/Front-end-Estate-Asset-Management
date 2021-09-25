import React from "react";
import {
    Typography
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import PropTypes from 'prop-types'
import {
    Grid,
} from "@material-ui/core";
import { Box } from "@material-ui/core";



function Message(props) {
    const { title, message } = props;
    return (
        <Grid
            container
            justifyContent="center"
            alignContent="center"
            
        >
            <Box>
                <Typography variant="h4" style={{ color: green[700] }}>{title}</Typography>
                <Typography>
                    {message}
                </Typography>
            </Box>
        </Grid>

    );
}


export default Message;

Message.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};