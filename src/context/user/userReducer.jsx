import userContext from "./userContext";

function setUser(userID, state) {
    return {
        ...state,
        userID: userID,
    };
}

const handleLikePost = ({ postID, active }, state) => {
    if (active) {
        //todo: prevent multiple likes, check if PostID is in the array
        return {
            ...state,
            postsLiked: [...state.postsLiked, postID],
        };
    } else {
        const newPostsLiked = state.postsLiked;
        const index = newPostsLiked.indexOf(postID);
        if (index > -1) {
            newPostsLiked.splice(index, 1);
        }
        return {
            ...state,
            postsLiked: newPostsLiked,
        };
    }
};
const handleDislikePost = ({ postID, active }, state) => {
    if (active) {
        //todo: prevent multiple dislikes, check if PostID is in the array
        return {
            ...state,
            postsDisliked: [...state.postsDisliked, postID],
        };
    } else {
        const newPostsDisliked = state.postsDisliked;
        const index = newPostsDisliked.indexOf(postID);
        if (index > -1) {
            newPostsDisliked.splice(index, 1);
        }
        return {
            ...state,
            postsDisliked: newPostsDisliked,
        };
    }
};

export default (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return setUser(action.payload, state);
        case "LOGGING_IN":
            return {
                ...state,
                loading: true,
            };
        case "LOGGED_IN":
            return {
                ...state,
                loading: false,
            };
        case "HANDLE_LIKE_POST":
            return handleLikePost(action.payload, state);
        case "HANDLE_DISLIKE_POST":
            return handleDislikePost(action.payload, state);
    }
};
