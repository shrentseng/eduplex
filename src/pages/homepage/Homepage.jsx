import React, { useEffect, useReducer, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Feeds from "./Feeds";
import Post from "./Post";
import FeedsProvider from "../../context/feed/FeedsProvider";
import FeedsContext from "../../context/feed/feedsContext";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxWidth: '1100px',
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Homepage = () => {
    const classes = useStyles();
    const feedsContext = useContext(FeedsContext);
    // useEffect(() => {
    //     feedsContext.getFeeds();
    // }, []);

    return (
        <FeedsContext.Provider 
            value={{
                feeds: state.feeds,
                dispatch
            }}
        >
            <div className={classes.root}>
                <Post />
                <Feeds />
            </div>
        </FeedsContext.Provider>

    )
}

export default Homepage;
