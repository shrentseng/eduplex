import React, { useRef } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Feeds from './Feeds';
import Post from './Post';
import RightPanel from '../../common/leaderboard/RightPanel';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxWidth: '1200px',
        margin: '2rem',
    },
}));

function Homepage() {
    const classes = useStyles();
    const createPostRef = useRef();

    const onCreatePost = (content, course) => {
        createPostRef.current.createPost(content, course);
    }
    return (
        <div className={classes.root}>
            <div>
                <Post createPost={onCreatePost} />
                <Feeds ref={createPostRef} />
            </div>
        </div>
    )
}

export default Homepage;
