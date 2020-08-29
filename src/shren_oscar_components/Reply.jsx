import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../assets/avatar.svg';

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        padding: "4px",
        marginLeft: "auto",
        display: 'flex',
    },
    reply: {
        display: 'flex',
		flexDirection: 'column',
    },
}));

const Reply = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div style={{marginRight: '1em'}}>
                <Avatar className={classes.avatar} src={avatar} />
            </div>
            <div className={classes.reply}>
                <span>{props.username}</span>
                <span>{props.content}</span>
            </div>
        </div>
    )
}

export default Reply;