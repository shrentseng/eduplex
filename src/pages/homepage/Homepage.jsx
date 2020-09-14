// import React, { Component, createRef } from 'react';
// import Feeds from './Feeds';
// import Post from './Post';

// class Homepage extends Component {
//     constructor(props) {
//         super(props);
//         this.createPostRef = createRef();
//         this.state = {
            
//         };
//     }

//     onCreatePost = (content, course) => {
//         this.createPostRef.current.createPost(content, course);
//     }

//     render() {
//         return (
//             <div>
//                 <Post createPost={this.onCreatePost}/>
//                 <Feeds  ref={this.createPostRef}/>
//             </div>
//         );
//     }
// }

// export default Homepage;


import React, { useRef } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Feeds from './Feeds';
import Post from './Post';

const useStyles = makeStyles(() => ({
    root: {
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
            <Post createPost={onCreatePost}/>
            <Feeds ref={createPostRef}/>
        </div>
    )
}

export default Homepage;
