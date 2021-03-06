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

const handleLike = ({ postID, active }, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.postID === postID) {
            let newFeed = { ...feed };
            newFeed.likes += active ? 1 : -1;
            return newFeed;
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const handleDislike = ({ postID, active }, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.postID === postID) {
            let newFeed = { ...feed };
            newFeed.unlikes += active ? 1 : -1;
            return newFeed;
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const setComments = ({ postID, my_comments }, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.postID === postID) {
            return {
                ...feed,
                comments: my_comments,
            };
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const addComment = (comment, state) => {
    console.log(comment)
    let newFeeds = state.feeds.map((feed) => {
        if (feed.postID === comment.postID) {
            let newFeed = { ...feed };
            if (newFeed.comments === undefined) {
                newFeed.comments = [comment]
            } else {
                newFeed.comments = [...newFeed.comments, comment];
            }
            return newFeed;
        }
        return feed;
    });
    return {
        ...state,
        feeds: newFeeds,
    };
};

const addReply = (id, state) => {};

const feedsReducer = (state, action) => {
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
        case "SET_COMMENTS":
            return setComments(action.payload, state);
        case "ADD_COMMENT":
            return addComment(action.payload, state);
        case "ADD_REPLY":
            return addReply(action.payload, state);
        default:
            return state;
    }
};

export default feedsReducer;
