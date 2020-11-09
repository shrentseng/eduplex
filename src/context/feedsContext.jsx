import { createContext } from 'react';

const feedsContext = createContext({
    feeds: [],
    fetchSuccess: (my_feeds) => {},
    fetchFailure: () => {},
    addFeed: (feed) => {},
    handleLike: (id) => {},
    handleDislike: (id) => {},
    addComment: (id) => {},
    addReply: (id) => {}
});

export default feedsContext;