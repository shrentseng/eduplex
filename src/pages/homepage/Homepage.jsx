import React, { useEffect, useReducer, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostFeeds from "./PostFeeds";
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
    
    useEffect(() => {
        console.log("homepage")
        feedsContext.getFeeds();
    }, []);

    return (
        <div className={classes.root}>
           <PostFeeds /> 
        </div>
    )
}

export default Homepage;
