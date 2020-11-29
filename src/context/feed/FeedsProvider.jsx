import React, { useReducer } from "react";
import FeedsContext from "./feedsContext";
import feedsReducer from "./feedsReducer";

const FeedsProvider = (props) => {
    const initialState = {
        feeds: [
            // {
            //     postID: 1,
            //     message: "test",
            //     courseID: 1,
            //     userID: 1,
            //     firstName: "Shren",
            //     lastName: "Tseng",
            //     courseName: "course",
            //     childComments: [], //stores comments id
            //     comments: [], //stores comments content 
            //     likes: 0,
            //     unlikes: 0,
            // },
        ],
        loading: true,
    };

    const [state, dispatch] = useReducer(feedsReducer, initialState);

    const getFeeds = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            const response = await fetch("/home/feed?userID=1");
            const result = await response.json();
            dispatch({ type: "SET_FEEDS", payload: result });
        } catch (err) {
            console.error("get feeds err");
        }
    };

    const getFeedsByCourse = async (userID, courseID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            const response = await fetch(
                `/course/discussion?userID=${userID}&courseID=${courseID}`
            );
            const result = await response.json();
            dispatch({ type: "SET_FEEDS", payload: result.posts });
        } catch (err) {
            console.error("get feeds", err);
        }
    };

    const addFeed = async (new_feed) => {
        let feedForDb = {
            postID: new_feed.postID,
            message: new_feed.message,
            courseID: new_feed.courseID,
            userID: new_feed.userID,
        };
        fetch("/home/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedForDb),
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: "ADD_FEED", payload: new_feed });
            } else {
                console.error(response.status);
            }
        });
    };

    const handleLike = async (postID, active, userID) => {
        try {
            const body = {
                userID: userID,
                postID: postID,
                undo: +!active,
            };
            dispatch({ type: "HANDLE_LIKE", payload: { postID, active } });
            fetch("/home/likes", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }).then((response) => {
                console.log(response);
            });
        } catch (err) {
            console.error("handle like", err);
        }
    };
    const handleDislike = async (postID, active) => {
        try {
            dispatch({ type: "HANDLE_DISLIKE", payload: { postID, active } });
            //fetch POST
        } catch (err) {
            console.error("handle like", err);
        }
    };

    const getCommentsByPostID = async (postID) => {
        try {
            const response = await fetch(`home/feed?postID=${postID}`, {
                method: "GET",
            });
            const result = await response.json();
            dispatch({ type: "SET_COMMENTS", payload: { postID, my_comments: result } });
        } catch (err) {
            console.error("get comments by post id", err)
        }
    };

    const addComment = async (new_comment) => {
        let feedForDb = {
            postID: new_comment.postID,
            message: new_comment.message,
            userID: new_comment.userID,
        };

        try {
            const response = await fetch("/home/feed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(feedForDb),
            });
            if (response.ok) {
                dispatch({ type: "ADD_COMMENT", payload: new_comment });
            }
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
                getFeedsByCourse: getFeedsByCourse,
                addFeed: addFeed,
                handleLike: handleLike,
                handleDislike: handleDislike,
                getCommentsByPostID: getCommentsByPostID,
                addComment: addComment,
                addReply: addReply,
            }}
        >
            {props.children}
        </FeedsContext.Provider>
    );
};

export default FeedsProvider;
