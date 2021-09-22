import PropTypes from 'prop-types'
import React from 'react';

function ErrorMessage(props) {
    const { message } = props;
    return <p key={message} style={{ color: "red" }} className="error"> {message} </p>
}

export default ErrorMessage;

ErrorMessage.props = {
    message: PropTypes.string.isRequired
}
