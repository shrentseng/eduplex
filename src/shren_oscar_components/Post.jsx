import React, { useState } from 'react';
import Select from 'react-select'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Exclude from '../assets/Exclude.svg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: '8px',
            width: '1000px',
        },
    },
    paper: {
        padding: "16px"
    },
    select: {
        width: "90px",
        height: "15px",
        fontSize: "13px",
        boxShadow: "none",
        margin: "15px",
        marginLeft: "auto"
    },
    post: {
        outlineWidth: "0px",
        border: "none",
        textAlign: "left",
        fontSize: "20px",
        width: "940px",
        height:"73px",
        margin: "15px",
        backgroundColor: "#F7F7F7",
        "&::placeholder": {
            color: "#C4C4C4"
          },
    },
    buttons: {
        display: "flex"
    },
    send: {
        border: "none",
        background: "none",
        marginLeft: "auto"
    },
    exclude: {
        margin: '2px',
        height: '22px',
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
                        <textarea className={classes.post} type="text" placeholder=" Start a discussion... " value={content} onChange={event => setContent(event.target.value)}/>
                    </div>
                    <div className={classes.buttons}>
                        <button className={classes.send} >
                            <img alt="" className={classes.exclude} src={Exclude} onClick={event => onCreatePost(content)}/>
                        </button>
                    </div>
                </Paper>
            </div>
    )
}

export default Post;

