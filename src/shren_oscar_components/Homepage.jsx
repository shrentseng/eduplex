import React, { Component } from 'react';
import './Homepage.css';
import Feed from './Feed.jsx';
import Post from './Post.jsx';

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feeds: [
                {
                    "content": "fuck off",
                    "upvote": 1,
                    "downvote": 1,
                    "key": "0"
                },
                {
                    "content": "eat shit",
                    "upvote": 1,
                    "downvote": 1,
                    "key": "1"
                },
                {
                    "content": "suck my dick",
                    "upvote": 1,
                    "downvote": 1,
                    "key": "2"
                }
            ],
        };
    }

    renderFeed() {
        if (this.state.feeds.length === 0) {
            return <div>No Feed</div>
        } else {
            return this.state.feeds.map((feed) => {
                return <Feed
                    content={feed.content}
                    upvote={feed.upvote}
                    downvote={feed.downvote}
                    key={feed.key}
                />
            })
        }
    }

    

    onCreatePost = (content) => {
        let key = this.state.feeds.length.toString();
        this.setState({ feeds: [{"content": content, "upvote": 0, "downvote": 0, "key": key}].concat(this.state.feeds)});
    }

    

    render() {
        return (
            <div>
                <Post createPost={this.onCreatePost}/>
                {this.renderFeed()}
            </div>
        );
    }
}

export default Homepage;


