import React from 'react';
import PropTypes from 'prop-types'

const ErrorDisplay = ({ errorMsg }) => {
    return (
        <div id="wrapper">
            <h1>{errorMsg}</h1>
            <img src="https://i.imgur.com/qIufhof.png" />
        </div >
    )
}

export default ErrorDisplay;

ErrorDisplay.propTypes = {
    errorMsg: PropTypes.string.isRequired
}
