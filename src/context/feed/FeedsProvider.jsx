import React, { useReducer } from "react";
import FeedsContext from "./feedsContext";
import feedsReducer from "./feedsReducer";

const FeedsProvider = (props) => {
    const initialState = {
        feeds: [],
        loading: true,
    };

    const [state, dispatch] = useReducer(feedsReducer, initialState);

    const getFeeds = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch('/home/feed?userID=1')
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: "SET_FEEDS", payload: result})
                    console.log(result)
                }
            );
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
            } else {
                console.log(res.status);
            }
        });
        dispatch({ type: "ADD_FEED", payload: new_feed });
    };

    const handleLike = async (id) => {
        try {
            dispatch({ type: "HANDLE_LIKE", payload: id });
            fetch("/home/likes", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: 1,
                    postID: id,
                    undo: 0,
                }),
            }).then((res) => {
                console.log(res);
                console.log(id);
            });
        } catch (err) {
            console.log("handle like");
            console.log(err);
        }
    };
    const handleDislike = async (id) => {
        try {
            dispatch({ type: "HANDLE_DISLIKE", payload: id });
            //fetch POST
        } catch (err) {
            console.log("handle like");
            console.log(err);
        }
    };

    const addComment = async (comment) => {
        try {
            dispatch({type: "ADD_COMMENT", payload: comment})
        } catch (err) {}
    };

    const addReply = async (reply) => {
        try {
            dispatch({type: "ADD_REPLY", payload: reply})
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
            }}
        >
            {props.children}
        </FeedsContext.Provider>
    );
};

export default FeedsProvider;
