import { useReducer } from "react";


// const initialState = {
//     feeds: []
// }

// const fetchSuccess = (my_feeds, state) => {
//     return {
//         ...state,
//         feeds: my_feeds,
//         error: ''
//     }
// }

// const fetchFailure = (state) => {
//     return {
//         ...state,
//         feeds: [],
//         error: 'Something went wrong!!'
//     }
// }

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

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FEEDS":
            return setFeeds(action.payload, state);
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        default:
            return state;
    }
};

export default reducer;
