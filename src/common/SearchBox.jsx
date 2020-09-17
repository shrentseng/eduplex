import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
    },

    searchBox: {
        width: 'calc(100% - 2rem)',
        height: '2.5rem',
        margin: '0.5rem 1rem',
        border: '1px solid #E5E5E5',
        borderRadius: '5px 5px 5px 5px',
        outline: 'none',
    },
}));

function SearchBox() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input type="text" className={classes.searchBox} placeholder="Search in Discussion"></input>
        </div>
    );
}

export default SearchBox;
