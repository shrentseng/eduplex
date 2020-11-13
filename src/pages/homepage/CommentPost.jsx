import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import exclude from "../../assets/Exclude.svg";
import avatar from "../../assets/avatar.svg";

import FeedsContext from "../../context/feed/feedsContext";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0px",
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
    },
    textArea: {
        fontSize: "20px",
        width: "100%",
        margin: "0 1rem",
        backgroundColor: "#F7F7F7",
        "&::placeholder": {
            color: "#C4C4C4",
        },
    },
    commentLink: {
        marginLeft: "2px",
    },
}));

const CommentPost = ({ createComment, isFocused }) => {
    const classes = useStyles();
    const [context, setContext] = useState("");
    const feedsContext = useContext(FeedsContext);

    const onCreateComment = (context) => {
        //feedsContext.addComment({id: props.id, newComment: context});
        createComment(context);
        setContext("");
    };
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar} src={avatar} />
            <TextField
                multiline
                inputRef={isFocused}
                className={classes.textArea}
                InputLabelProps={{ shrink: false }}
                InputProps={{ disableUnderline: true }}
                type="text"
                placeholder="Write a comment... "
                value={context}
                onChange={(event) => setContext(event.target.value)}
            />
            <img src={exclude} onClick={(event) => onCreateComment(context)} />
        </div>
    );
};

export default CommentPost;
