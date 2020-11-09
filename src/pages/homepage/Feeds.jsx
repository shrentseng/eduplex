
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
                        username={feed.FirstName + " " + feed.LastName}
                        content={feed.Message}
                        likeCount={feed.Likes}
                        dislikeCount={feed.Unlikes}
                        commentCount={feed.ChildComments.length}
                        key={feed.PostID}
                        id={feed.PostID}
                        course={feed.CourseName}
                    />
                );
            });
        }
    };

    return <div>{renderFeeds(feedsContext.feeds)}</div>;
};

export default Feeds;
