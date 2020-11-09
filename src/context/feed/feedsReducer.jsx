import { useReducer } from "react";

const setFeeds = (my_feeds, state) => {
    return {
        ...state,
        feeds: my_feeds,
    };
};

const sendingRequest = (state) => {
    return {
        ...state,
        loading: true,
    };
};

const requestFinished = (state) => {
    return {
        ...state,
        loading: false,
    };
};

const addFeed = (feed, state) => {
    const newFeeds = [...state.feeds, feed];
    return {
        ...state,
        feeds: newFeeds,
    };
};

const handleLike = (id, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.PostID === id) {
            let newFeed = { ...feed };
            newFeed.Likes++;
            return newFeed;
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const handleDislike = (id, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.PostID === id) {
            let newFeed = { ...feed };
            newFeed.Unlikes++;
            return newFeed;
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const addComment = (data, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.postID == data.id) {
            let newFeed = { ...feed };
            newFeed.comment = [...newFeed.comment, data.Comment];
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const addReply = (id, state) => {};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FEEDS":
            return setFeeds(action.payload, state);
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        case "ADD_FEED":
            return addFeed(action.payload, state);
        case "HANDLE_LIKE":
            return handleLike(action.payload, state);
        case "HANDLE_DISLIKE":
            return handleDislike(action.payload, state);
        case "ADD_COMMENT":
            return addComment(action.payload, state);
        case "ADD_REPLY":
            return addReply(action.payload, state);
        default:
            return state;
    }
};

export default reducer;
