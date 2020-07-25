import React, { useState } from 'react';
import Select from 'react-select'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import exclude from '../assets/exclude.svg';
import anonymous from '../assets/anonymous.svg';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em',
    },
    paper: {
        padding: "1em",
    },
    select: {
        width: '7.5em',
        marginLeft: 'auto',
    },
    post: {
        marginTop: '1em',
        height: '6em',
        width: '100%',
        backgroundColor: '#D1D1D1',
        outlineWidth: '0em',
        border: 'none',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '98%',
        marginTop: '-1.6em',
    },
    anonymous: {
        margin: '0.2em',
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: 'white',
    },
    exclude: {
        margin: '0.2em',
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
}));

const options = [
    { value: 'Course 1', label: 'Course 1' },
    { value: 'Course 2', label: 'Course 2' },
    { value: 'Course 3', label: 'Course 3' }
]

const Post = ({createPost}) => {
    const classes = useStyles();
    const [content, setContent] = useState("");

    const onCreatePost = (content) => {
        createPost(content);
        setContent("");
    }

    return(
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <div>
                        <Select className={classes.select} options = {options} placeholder="Select"/>
                    </div>
                    <div>
                        <textarea className={classes.post} type="text" placeholder="Start a discussion... " value={content} onChange={event => setContent(event.target.value)}/>
                    </div>
                    <div className={classes.buttons}>
                        <Avatar className={classes.anonymous} src={anonymous}/>
                        <Avatar className={classes.exclude} src={exclude} onClick={event => onCreatePost(content)}/>
                    </div>
                </Paper>
            </div>
    )
}

export default Post;

