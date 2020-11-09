import { useReducer } from 'react';
import { 
    FETCH_SUCCESS, 
    FETCH_FAILURE, 
    ADD_FEED, 
    HANDLE_LIKE, 
    HANDLE_DISLIKE,
    ADD_COMMENT,
    ADD_REPLY,
} from './type';

const initialState = {
    feeds: []
}

const fetchSuccess = (my_feeds, state) => {
    return {
        ...state,
        feeds: my_feeds,
        error: ''
    }
}

const fetchFailure = (state) => {
    return {
        ...state,
        feeds: [],
        error: 'Something went wrong!!'
    }
}

const addFeed = (feed, state) => {
    const newFeeds = [...state.feeds, feed]
    // fetch('https://my-json-server.typicode.com/shrentseng/my_json_server/Posts', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         ...state,
    //         feeds: newFeeds
    //     }),
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Success:', result);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // })
    return {
        ...state,
        feeds: newFeeds
    }
}

const handleLike = (id, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.PostID === id) {
            let newFeed = {...feed}
            newFeed.Likes ++
            return newFeed
        }
        return feed
    });
    return {
        ...state,
        feeds: newFeeds
    }
}

const handleDislike = (id, state) => {
    let newFeeds = state.feeds.map((feed) => {
        if (feed.PostID === id) {
            let newFeed = {...feed}
            newFeed.Unlikes ++
            return newFeed
        }
        return feed
    });
    return {
        ...state,
        feeds: newFeeds
    }
}

const addComment = (id, state) => {
    
}

const addReply = (id, state) => {

}

const reducer = (state, action) => {
    switch(action.type) {
        case FETCH_SUCCESS: 
            return fetchSuccess(action.payload, state);
        case FETCH_FAILURE:
            return fetchFailure(action.payload, state);
        case ADD_FEED:
            return addFeed(action.payload, state);
        case HANDLE_LIKE:
            return handleLike(action.payload, state);
        case HANDLE_DISLIKE:
            return handleDislike(action.payload, state);
        case ADD_COMMENT:
            return addComment(action.payload, state);
        case ADD_REPLY:
            return addReply(action.payload, state);
        default:
            return state;
    }
}

export default () => {
    return useReducer(reducer, initialState);
}