import React from "react";
import {
    Typography
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import PropTypes from 'prop-types'

function Message(props){
    const {title, message} = props;
        return (
            <>
                <Typography variant="h4" style={{ color: green[700] }}>{title}</Typography>
                <Typography>
                    {message}
                </Typography>
            </>
        );
}


export default Message;

Message.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};