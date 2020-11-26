import React, { useState, useContext, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import CommentPost from "./CommentPost.jsx";
import Comment from "./Comment.jsx";
import { Paper } from "@material-ui/core";
import FeedsContext from "../../context/feed/feedsContext";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        marginLeft: "auto",
        fontWeight: "100",
    },
    paper: {
        width: "95%",
        marginLeft: "auto",
    },
    heading: {
        fontSize: "1rem",
        fontWeight: "400",
    },
    accDetails: {
        padding: "0%",
    },
    lineSeparate: {
        margin: "0px",
        marginLeft: "18px",
        justifyContent: "center",
        width: "96%",
    },
}));

const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            paddingBottom: "1em",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderBottom: "1px solid rgba(0, 0, 0, 0)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {},
}))(MuiAccordionDetails);

const CommentBoard = (props) => {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const feedsContext = useContext(FeedsContext);

    useEffect(() => {
        let didCancel = false;
        async function getComments() {
            const response = await fetch(`/home/feed?postID=${props.postID}`);
            const result = await response.json();
            setComments(result);
        }
        getComments();
        return () => {
            didCancel = true;
        };
    }, [props.postID]);

    const renderComment = () => {
        if (comments.length === 0) {
            return <div>No Comment</div>;
        } else {
            return comments.map((comment) => {
                return (
                    <AccordionDetails className={classes.accDetails}>
                        <Comment
                            context={comment.message}
                            key={comment.postID}
                            username={comment.firstName + comment.lastName}
                        />
                    </AccordionDetails>
                );
            });
        }
    };

    // const onCreateComment = (context) => {
    //
    // 	//let key = comments.length.toString();
    // 	setComments([...comments, newComment]);
    // 	props.setExpandTrue();
    // 	feedsContext.addComment(newComment);
    // };

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.paper}>
                <Accordion elevation={5} expanded={props.isExpand}>
                    <AccordionSummary>
                        <CommentPost
                            className={classes.heading}
                            postID={props.postID}
                            // createComment={onCreateComment}
                        />
                    </AccordionSummary>
                    <hr className={classes.lineSeparate} />
                    {renderComment(comments)}
                </Accordion>
            </Paper>
        </div>
    );
};

export default CommentBoard;
