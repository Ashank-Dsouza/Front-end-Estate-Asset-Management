import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    blueText: {
        textDecoration: 'none',
        color: 'blue',
        fontWeight: 500,
    },
    whiteText: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 500,
        paddingLeft: '20px'
    },
    blueButton: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 500,
        backgroundColor: '#3f51b5',
        padding: '12px 18px',
        borderRadius: '4px',
    },
}));

export default function ButtonLink(props) {

    const classes = useStyles();
    var ClassName = null;


    if(props.Kind === "Blue"){
        ClassName = classes.blueButton;
    }else if(props.Kind === "White"){
        ClassName = classes.whiteText;
    }else{
        ClassName = classes.blueText;
    }

    return (
        <>
            <Link to={props.To} className={ClassName}>
                {props.children}
            </Link>
        </>
    );
}


ButtonLink.propTypes = {
    To: PropTypes.string.isRequired,
    Kind: PropTypes.string,
};