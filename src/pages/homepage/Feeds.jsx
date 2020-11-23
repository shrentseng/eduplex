import React, { useState, useEffect, useContext } from "react";
import Feed from "./Feed";
import FeedsContext from "../../context/feed/feedsContext";

const Feeds = () => {
    //useContext
    const feedsContext = useContext(FeedsContext);

    useEffect(() => {
        feedsContext.getFeeds();
    }, []);

    const renderFeeds = (feeds) => {
        if (feeds.length === 0) {
            return <div>No Feed</div>;
        } else {
            return feeds
                .slice(0)
                .reverse()
                .map((feed) => {
                    return (
                        <Feed
                            username={feed.firstName + " " + feed.lastName}
                            message={feed.message}
                            likes={feed.likes}
                            unlikes={feed.unlikes}
                            childComments={feed.childComments}
                            key={feed.postID}
                            postID={feed.postID}
                            courseName={feed.courseName}
                        />
                    );
                });
        }
    };
    return <div>{renderFeeds(feedsContext.feeds)}</div>;
};

export default Feeds;
