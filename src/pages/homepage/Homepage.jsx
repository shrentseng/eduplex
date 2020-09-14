import React, { Component, createRef } from 'react';
import './Homepage.css';
import Feeds from './Feeds';
import Post from './Post';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.createPostRef = createRef();
        this.state = {
            
        };
    }

    onCreatePost = (content, course) => {
        this.createPostRef.current.createPost(content, course);
    }

    render() {
        return (
            <div>
                <Post createPost={this.onCreatePost}/>
                <Feeds  ref={this.createPostRef}/>
            </div>
        );
    }
}

export default Homepage;


