import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const UserProvider = (props) => {
    const initialState = {
        userID: 1,
        postsLiked: [],
        postsDisliked: [],
        loading: true,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    // const login = async () => {
    //     try {
    //         dispatch({ type: "LOGGING_IN" });
    //         const res = await fetch("");
    //         const data = await res.json();
    //         dispatch({ type: "LOGGED_IN" });
    //         dispatch({ type: "SET_USER", payload: data });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const signIn = async (user) => {
        dispatch({ type: "LOGGING_IN" });
        //fetching
        let userID;
        dispatch({ type: "LOGGED_IN" });
        dispatch({ type: "SET_USER", payload: userID });
    };

    const handleLikePost = async (PostID, active) => {
        try {
            dispatch({
                type: "HANDLE_LIKE_POST",
                payload: { PostID, active },
            });
        } catch (err) {}
        return "done";
    };

    const handleDislikePost = async (PostID, active) => {
        try {
            dispatch({
                type: "HANDLE_DISLIKE_POST",
                payload: { PostID, active },
            });
        } catch (err) {}
    };

    return (
        <UserContext.Provider
            value={{
                userID: state.userID,
                postsLiked: state.postsLiked,
                postsDisliked: state.postsDisliked,
                loading: state.loading,
                signIn: signIn,
                handleLikePost: handleLikePost,
                handleDislikePost: handleDislikePost,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export default UserProvider;
