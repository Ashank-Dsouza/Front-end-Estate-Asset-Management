import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RoutePath } from '../constants/routes';


const useStyles = makeStyles((theme) => ({
    linkButton: {
        textDecoration: 'none',
        color: 'blue',
        fontWeight: 500,
        paddingLeft: '20px'
    },
}));

export default function ButtonLink(props) {

    const classes = useStyles();

    return (
        <>
            <Link className={classes.linkButton} to={props.RoutePath}>
                {props.Text}
            </Link>
        </>
    );
}


ButtonLink.propTypes = {
    Text: PropTypes.string.isRequired,
    RoutePath: PropTypes.string.isRequired,
};