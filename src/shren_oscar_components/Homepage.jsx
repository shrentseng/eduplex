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
                    "username": "Shren",
                    "content": "fuck off",
                    "likeCount": 1,
                    "key": 0,
                },
                {
                    "username": "Shren",
                    "content": "eat shit",
                    "likeCount": 1,
                    "key": 1,
                },
                {
                    "username": "Shren",
                    "content": "suck my dick",
                    "likeCount": 1,
                    "key": 2,
                }
            ],
        };
    }

    onHandleLikeButton = (i) => {
        let temp = this.state.feeds
        temp[i].likeCount ++
        this.setState({feeds: temp })
    }

    onHandleDislikeButton = (i) => {
        let temp = this.state.feeds
        temp[i].likeCount --
        this.setState({feeds: temp })
    }

    renderFeed() {
        if (this.state.feeds.length === 0) {
            return <div>No Feed</div>
        } else {
            return this.state.feeds.map((feed) => {
                return <Feed
                    username={feed.username}
                    content={feed.content}
                    likeCount={feed.likeCount}
                    index={feed.key}
                    key={feed.key}
                    handleLikeButton={this.onHandleLikeButton}
                    handleDislikeButton={this.onHandleDislikeButton}
                />
            })
        }
    }

    onCreatePost = (content) => {
        let key = this.state.feeds.length;
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


