import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import exclude from '../../assets/Exclude.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "0px",
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
    },
    textArea: {
        margin: "10px",
        marginLeft:"15px",
        paddingLeft: "0.1em",
        paddingBottom: "0px",
        fontSize: "20px",
        width: "90%",
        backgroundColor: "#F7F7F7",
        "&::placeholder": {
            color: "#C4C4C4"
          },
    },
    commentLink: {
        marginLeft: "2px",
    },

}));

const CommentPost = ({createComment,isFocused}) => {
    const classes = useStyles();
    const [content, setContent] = useState("");

    const onCreateComment = (content) => {
        
        createComment(content);
        setContent("");
    }    
    return(
        <div className={classes.root}>
            <TextField multiline inputRef={isFocused} className={classes.textArea} InputLabelProps={{shrink: false}} InputProps={{ disableUnderline: true }} type="text" placeholder="Write a comment... " value={content} onChange={event => setContent(event.target.value)}/>             
            <img src={exclude} onClick={event => onCreateComment(content)}/>
        </div>
    )
}

export default CommentPost;