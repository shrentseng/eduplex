import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bookmark from "../../assets/bookmark.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";
import report from "../../assets/report.svg";
import avatar from "../../assets/avatar.svg";
import CommentBoard from "./CommentBoard.jsx";
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

    const feedsContext = useContext(FeedsContext);
    console.log(feedsContext)
    const [isExpand, setIsExpand] = useState(false);

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
                        <Typography variant="h6">{`Posted in ${props.course} `}</Typography>
                    </div>
                    {/* <div className={classes.headerItem} style={{marginLeft: 'auto'}}>
                        <img className={classes.bookmark} src={bookmark} />
                    </div> */}
                </div>
                <Typography className={classes.body} variant="body1">
                    {props.content}
                </Typography>
                <div className={classes.footer}>
                    <div>
                        <img
                            className={classes.footerItem}
                            style={{ marginRight: "1em" }}
                            src={like}
                            onClick={() => feedsContext.handleLike(props.id)}
                        />
                        <Typography display="inline">
                            {props.likeCount}
                        </Typography>
                    </div>
                    <div>
                        <img
                            className={classes.footerItem}
                            style={{ marginRight: "1em" }}
                            src={dislike}
                            onClick={() => feedsContext.handleDislike(props.id)}
                        />
                        <Typography display="inline">
                            {props.dislikeCount}
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
                            {props.commentCount}
                        </Typography>
                    </div>
                    <div>
                        <img className={classes.footerItem} src={share} />
                    </div>
                </div>
            </Paper>
            <CommentBoard isExpand={isExpand} setExpandTrue={onSetExpandTrue} />
        </div>
    );
};

export default Feed;
