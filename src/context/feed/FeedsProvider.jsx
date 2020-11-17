import React, { useReducer } from "react";
import FeedsContext from "./feedsContext";
import feedsReducer from "./feedsReducer";

const FeedsProvider = (props) => {
    const initialState = {
        feeds: [
            /*{
                PostID: 1,
                Message: "test",
                CourseID: 1,
                UserID: 1,
                FirstName: "Shren",
                LastName: "Tseng",
                CourseName: "course",
                ChildComments: [],
                Likes: 0,
                Unlikes: 0,
            },*/
        ],
        loading: true,
    };

    const [state, dispatch] = useReducer(feedsReducer, initialState);

    const getFeeds = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("/home/feed?userID=1")
                .then((res) => res.json())
                .then((result) => {
                    dispatch({ type: "SET_FEEDS", payload: result });
                });
        } catch (err) {
            console.log("get feeds");
            console.log(err);
        }
    };

    const addFeed = async (new_feed) => {
        let feedForDb = {
            postID: new_feed.postID,
            message: new_feed.content,
            courseID: new_feed.course,
            userID: new_feed.userID,
        };
        fetch("/home/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedForDb),
        }).then((res) => {
            if (res.status == 201) {
                dispatch({ type: "ADD_FEED", payload: new_feed });
            } else {
                console.log(res.status);
            }
        });
    };

    const handleLike = async (PostID, active) => {
        try {
            dispatch({ type: "HANDLE_LIKE", payload: { PostID, active } });
            // fetch("/home/likes", {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         userID: 1,
            //         postID: id,
            //         undo: 0,
            //     }),
            // }).then((res) => {
            //     console.log(res);
            //     console.log(id);
            // });
        } catch (err) {
            console.log("handle like");
            console.log(err);
        }
    };
    const handleDislike = async (PostID, active) => {
        try {
            dispatch({ type: "HANDLE_DISLIKE", payload: { PostID, active } });
            //fetch POST
        } catch (err) {
            console.log("handle like");
            console.log(err);
        }
    };

    const getCommentsByPostID = async (PostID) => {};

    const addComment = async (comment) => {
        try {
            dispatch({ type: "ADD_COMMENT", payload: comment });
        } catch (err) {}
    };

    const addReply = async (reply) => {
        try {
            dispatch({ type: "ADD_REPLY", payload: reply });
        } catch (err) {}
    };

    return (
        <FeedsContext.Provider
            value={{
                feeds: state.feeds,
                loading: state.loading,
                getFeeds: getFeeds,
                addFeed: addFeed,
                handleLike: handleLike,
                handleDislike: handleDislike,
                addComment: addComment,
                addReply: addReply,
                getCommentsByPostID: getCommentsByPostID,
            }}
        >
            {props.children}
        </FeedsContext.Provider>
    );
};

export default FeedsProvider;
