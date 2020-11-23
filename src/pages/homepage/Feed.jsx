import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bookmark from "../../assets/bookmark.svg";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import Liked from "../../assets/liked.svg";
import Disliked from "../../assets/disliked.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";
import report from "../../assets/report.svg";
import avatar from "../../assets/avatar.svg";
import CommentBoard from "./CommentBoard.jsx";
import UserContext from "../../context/user/userContext";
import FeedsContext from "../../context/feed/feedsContext";

const useStyles = makeStyles(() => ({
    root: {
        margin: "1em 0",
    },
    paper: {
        padding: "1.25rem 1.25rem 1rem 1.25rem",
        marginBottom: "1rem",
        display: "grid",
        gridTemplateRows: "3rem auto 2rem",
    },
    header: {
        display: "flex",
    },
    avatar: {
        borderRadius: "50%",
        marginRight: "0.7em",
    },
    bookmark: {
        marginTop: "-1em",
    },
    body: {
        margin: "1rem 0",
        minHeight: "3em",
        whiteSpace: "pre-wrap",
    },
    footer: {
        display: "flex",
        height: "2em",
        width: "15rem",
        alignContent: "center",
        justifyContent: "space-between",
    },
    footerItem: {
        height: "1.5em",
    },
}));

const Feed = (props) => {
    const classes = useStyles();
    const userContext = useContext(UserContext);
    const feedsContext = useContext(FeedsContext);
    const [isExpand, setIsExpand] = useState(false);
    const [likeImg, setLikeImg] = useState(null);
    const [dislikeImg, setDislikeImg] = useState(null);

    useEffect(() => {
        //console.log("use effect", userContext.postsLiked);
        if (userContext.postsLiked.includes(props.postID)) {
            setLikeImg(Liked);
            setDislikeImg(Dislike);
            //setHasLiked(classes.imgActive);
            //setHasDisLiked(null)
        } else if (userContext.postsDisliked.includes(props.postID)) {
            setLikeImg(Like);
            setDislikeImg(Disliked);
            //setHasDisLiked(classes.imgActive);
            //setHasLiked(null)
        } else {
            setLikeImg(Like);
            setDislikeImg(Dislike);
            //setHasLiked(null)
            //setHasDisLiked(null)
        }
    }, [userContext.postsLiked, userContext.postsDisliked]);

    const handleLike = () => {
        if (likeImg == Like) {
            feedsContext.handleLike(props.postID, true, userContext.userID);
            userContext.handleLikePost(props.postID, true, userContext.userID);
            if (dislikeImg == Disliked) {
                feedsContext.handleDislike(
                    props.postID,
                    false,
                    userContext.userID
                );
                userContext.handleDislikePost(
                    props.postID,
                    false,
                    userContext.userID
                );
            }
        }
    };

    const handleDislike = () => {
        if (dislikeImg == Dislike) {
            feedsContext.handleDislike(props.postID, true, userContext.userID);
            userContext.handleDislikePost(
                props.postID,
                true,
                userContext.userID
            );
            if (likeImg == Liked) {
                feedsContext.handleLike(
                    props.postID,
                    false,
                    userContext.userID
                );
                userContext.handleLikePost(
                    props.postID,
                    false,
                    userContext.userID
                );
                //console.log("posts liked", userContext.postsLiked);
            }
        }
    };

    const onSetExpandTrue = () => {
        setIsExpand(true);
    };

    const onToggleExpand = () => {
        setIsExpand(!isExpand);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <div className={classes.header}>
                    <div>
                        {/* avatar */}
                        <Avatar className={classes.avatar} src={avatar} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {/* username */}
                            <Typography variant="h5">
                                {props.username}
                            </Typography>
                            {/* date */}
                            <Typography
                                variant="h6"
                                style={{ margin: "0 0.4em" }}
                            >
                                •
                            </Typography>
                            <Typography variant="h6">{"5 mins ago"}</Typography>
                        </div>
                        {/* posted in */}
                        <Typography variant="h6">{`Posted in ${props.courseName} `}</Typography>
                    </div>
                    {/* <div className={classes.headerItem} style={{marginLeft: 'auto'}}>
                        <img className={classes.bookmark} src={bookmark} />
                    </div> */}
                </div>
                <Typography className={classes.body} variant="body1">
                    {props.message}
                </Typography>
                <div className={classes.footer}>
                    <div>
                        <img
                            className={classes.footerItem}
                            style={{ marginRight: "1em" }}
                            src={likeImg}
                            onClick={handleLike}
                        />
                        <Typography display="inline">{props.likes}</Typography>
                    </div>
                    <div>
                        <img
                            className={classes.footerItem}
                            style={{ marginRight: "1em" }}
                            src={dislikeImg}
                            onClick={handleDislike}
                        />
                        <Typography display="inline">
                            {props.unlikes}
                        </Typography>
                    </div>
                    <div>
                        <img
                            className={classes.footerItem}
                            style={{ marginRight: "1em" }}
                            src={comment}
                            onClick={onToggleExpand}
                        />
                        <Typography display="inline">
                            {props.childComments.length}
                        </Typography>
                    </div>
                    <div>
                        <img className={classes.footerItem} src={share} />
                    </div>
                </div>
            </Paper>
            <CommentBoard
                postID={props.postID}
                isExpand={isExpand}
                setExpandTrue={onSetExpandTrue}
            />
        </div>
    );
};

export default Feed;
