import React, { Component, createRef } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme_homepage } from '../../common/theme';
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
            <ThemeProvider theme={theme_homepage}>
                <div>
                    <Post createPost={this.onCreatePost}/>
                    <Feeds  ref={this.createPostRef}/>
                </div>
            </ThemeProvider>
        );
    }
}

export default Homepage;


