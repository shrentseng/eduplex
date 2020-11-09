import React, { useState, useEffect, useContext } from "react";
import Feed from "./Feed";
import FeedsContext from "../../context/feed/feedsContext";

const Feeds = (props) => {
    //useContext
    const feedsContext = useContext(FeedsContext);

    useEffect(() => {
        
    }, [props.feeds]);

    const renderFeeds = (feeds) => {
        if (feeds.length === 0) {
            return <div>No Feed</div>;
        } else {
            return feeds.map((feed) => {
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

    return <div>{renderFeeds(props.feeds)}</div>;
};

export default Feeds;
