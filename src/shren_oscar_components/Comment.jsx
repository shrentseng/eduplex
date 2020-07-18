import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        padding: "4px",
        marginLeft: "auto",
    },
    paper: {
        padding: "12px",
    },
}));

const options = [
    { value: 'Course 1', label: 'Course 1' },
    { value: 'Course 2', label: 'Course 2' },
    { value: 'Course 3', label: 'Course 3' }
]

const Comment = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div>
                    {props.content}
            </div>
        </div>
    )
}

export default Comment;

