import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import avatar from '../assets/avatar.svg';

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
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
                <Typography variant='h5'>{props.username}</Typography>
                <Typography variant='body1'>{props.content}</Typography>
            </div>
        </div>
    )
}

export default Reply;