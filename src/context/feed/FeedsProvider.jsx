import React, { useReducer } from "react";
import axios from "axios";
import FeedsContext from "./feedsContext";
import feedsReducer from "./feedsReducer";

const FeedsProvider = (props) => {
    const initialState = {
        feeds: [
            // {
            //     PostID: 1,
            //     Message: "test",
            //     CourseID: 1,
            //     UserID: 1,
            //     FirstName: "Shren",
            //     LastName: "Tseng",
            //     CourseName: "course",
            //     ChildComments: [],
            //     Likes: 0,
            //     Unlikes: 0,
            // },
        ],
        loading: true,
    };

    const [state, dispatch] = useReducer(feedsReducer, initialState);

    const getFeeds = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            const response = await fetch("home/feed?userID=1");
            //console.log('text', await response.text())
            const result = await response.json();
            //console.log("feeds", result);
            // const response = await axios.get("home/feed?userID=1")
            // console.log(response)
            // const result = await response.data;
            // console.log("get My feeds", result);
            dispatch({ type: "SET_FEEDS", payload: result });
        } catch (err) {
            console.error("get feeds err");
        }
    };

    const getFeedsByCourse = async (courseID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            // const response = await fetch("home/feed?userID=1");
            // const result = await response.json();
            // console.log("feeds", result);
            //dispatch({ type: "SET_FEEDS", payload: result });
        } catch (err) {
            console.log("get feeds");
            console.log(err);
        }
    }

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
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: "ADD_FEED", payload: new_feed });
            } else {
                console.log(response.status);
            }
        });
    };

    const handleLike = async (PostID, active, userID) => {
        try {
            const body = {
                userID: userID,
                postID: PostID,
                undo: +!active,
            };
            console.log(body);
            dispatch({ type: "HANDLE_LIKE", payload: { PostID, active } });
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

    const getCommentsByPostID = async (PostID) => {
        try {
            // const response = await fetch(`home/feed?postID=${PostID}`, {
            //     method: "GET",
            // });
            // const result = await response.json();
            // console.log(result);
        } catch (err) {}
    };

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
                getFeedsByCourse: getFeedsByCourse,
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
