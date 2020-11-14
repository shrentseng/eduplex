import React, { useState, useEffect, useContext } from "react";
import Feed from "./Feed";
import FeedsContext from "../../context/feed/feedsContext";

const Feeds = (props) => {
    //useContext
    const feedsContext = useContext(FeedsContext);
    
    useEffect(() => {
        feedsContext.getFeeds();
        
    }, []);

    const renderFeeds = (feeds) => {
        if (feeds.length === 0) {
            return <div>No Feed</div>;
        } else {
            return feeds.slice(0).reverse().map((feed) => {
                return (
                    <Feed
                        Username={feed.FirstName + " " + feed.LastName}
                        Message={feed.Message}
                        Likes={feed.Likes}
                        Unlikes={feed.Unlikes}
                        ChildComments={feed.ChildComments}
                        key={feed.PostID}
                        PostID={feed.PostID}
                        CourseName={feed.CourseName}
                    />
                );
            });
        }
    };
    return <div>{renderFeeds(feedsContext.feeds)}</div>;
};

export default Feeds;
