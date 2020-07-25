import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import exclude from '../assets/exclude.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "0px",
        width: "100%",
        margin: "0px",
    },
    paper: {
        margin: "0px",
        padding: "4px",
        display: "flex",
    },
    textArea: {
        margin: "10px",
        marginLeft:"15px",
        paddingBottom: "0px",
        fontSize: "20px",
        width: "93%",
        backgroundColor: "#F7F7F7",
        "&::placeholder": {
            color: "#C4C4C4"
          },
        
    },
    lineSeparate:{
        margin: "0px",
        marginLeft: "18px",
        justifyContent: "center",
        width: "96%",
    },
    commentLink: {
        marginLeft: "2px",
    },
}));

const ReplyPost = ({createReply}) => {
    const classes = useStyles();
    const [content, setContent] = useState("");

    const onCreateReply = (content) => {
        createReply(content);
        setContent("");
    }    
    return(
            <div className={classes.root}>
                    <TextField multiline className={classes.textArea} InputLabelProps={{shrink: false}} type="text" placeholder="Write a comment... " value={content} onChange={event => setContent(event.target.value)}/>             
                    <img src={exclude} style={{marginTop:"10px"}} onClick={event => onCreateReply(content)}/>
            </div>
    )
}

export default ReplyPost;