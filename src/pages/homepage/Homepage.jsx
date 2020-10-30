import React, { useEffect, useReducer } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Feeds from './Feeds';
import Post from './Post';
import FeedsContext from '../../context/feedsContext';
import feedsReducer from '../../context/feedsReducer';
import { ADD_FEED, FETCH_SUCCESS, FETCH_FAILURE, HANDLE_DISLIKE, HANDLE_LIKE } from '../../context/type';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxWidth: '1100px',
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Homepage = () => {
    const classes = useStyles();
    const [state, dispatch] = feedsReducer()

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/shrentseng/my_json_server/Posts')
        .then(response => response.json())
		.then(data => {
            dispatch({type: FETCH_SUCCESS, payload: data})
        })
        .catch(error =>
            dispatch({type: FETCH_FAILURE})
		);
    }, [])
    
    return (
        <FeedsContext.Provider 
            value={{
                feeds: state.feeds,
                dispatch
            }}
        >
            <div className={classes.root}>
                    <Post />
                    <Feeds />
            </div>
        </FeedsContext.Provider>

    )
}

export default Homepage;
