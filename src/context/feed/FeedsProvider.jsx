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

            // const res = await fetch(
            //     "https://my-json-server.typicode.com/shrentseng/my_json_server/Posts"
            // );
            // const data = await res.json();
            // dispatch({ type: "REQUEST_FINISHED" });
            // dispatch({ type: "SET_FEEDS", payload: data });
        } catch (err) {
            console.log('get feeds')
            console.log(err);
        }
    };

    const addFeed = async (new_feed) => {

        fetch('/home/feed', {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_feed)
        }).then((res) => {
            console.log(res)
        })
    };

    const handleLike = async (id) => {
        try { 
            dispatch({ type: "HANDLE_LIKE", payload: id});
            //fetch POST
        } catch (err) { 
            console.log('handle like')
            console.log(err)
        }
    }
    const handleDislike = async (id) => {
        try { 
            dispatch({ type: "HANDLE_DISLIKE", payload: id});
            //fetch POST
        } catch (err) { 
            console.log('handle like')
            console.log(err)
        }
    }

    return (
        <FeedsContext.Provider
            value={{
                feeds: state.feeds,
                loading: state.loading,
                getFeeds: getFeeds,
                addFeed: addFeed,
                handleLike: handleLike,
                handleDislike: handleDislike,
            }}
        >
            {props.children}
        </FeedsContext.Provider>
    );
};
export default FeedsProvider;
