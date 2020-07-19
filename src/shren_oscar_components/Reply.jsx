import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        padding: "4px",
        marginLeft: "auto",
    },
}));

const Reply = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div>
                    {props.content}
            </div>
        </div>
    )
}

export default Reply;