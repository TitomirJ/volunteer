import React from 'react';
import { Link } from 'react-router-dom';
import { default as MaterialButton } from '@mui/material/Button';

import { useStyles } from './styles';

const Button = ({ children, className, variant = 'default', to = '', fontSize, width, ...props }) => {
    const classes = useStyles({fontSize, width});

    return !to ? (
        <MaterialButton
            className={`${classes.button} ${classes[variant]} ${className}`}
            {...props}
        >
            {children}
        </MaterialButton>
    ) : (
        <Link className={classes.link} to={to}>
            <MaterialButton
                className={`${classes.button} ${classes[variant]} ${className}`}
                {...props}
            >
                {children}
            </MaterialButton>
        </Link>
    );
};

export default Button;
