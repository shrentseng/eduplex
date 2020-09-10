import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './Homepage.css';
import Feed from './Feed.jsx';
import Post from './Post.jsx';

const theme = createMuiTheme({
	typography: {
		h5: {
			fontFamily: 'Roboto',
			color: '#365E7D',
			fontWeight: 500,
			fontSize: '1.25em',
        },
        h6: {
            fontFamily: 'Roboto',
            color: '#5A5A5A',
            fontSize: '0.75em',
        },
		body1: {
			fontFamily: 'Roboto',
			fontSize: '1em',
        },
        p: {
            wordBreak: 'break-all',
        }
	}
})



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
                    "commentCount": 0,
                    "course": 'Course 1',
                },
                {
                    "username": "Shren",
                    "content": "eat shit",
                    "likeCount": 1,
                    "key": 1,
                    "commentCount": 0,
                    "course": 'Course 2',
                },
                {
                    "username": "Shren",
                    "content": "suck my dick",
                    "likeCount": 1,
                    "commentCount": 0,
                    "key": 2,
                    "course": 'Course 3',
                }
            ],
        };
    }

    onHandleLikeButton = (key) => {
        let temp = this.state.feeds
        let index = temp.findIndex(feed => feed.key === key) // because key doesn't equal to index
        temp[index].likeCount ++
        this.setState({feeds: temp })
    }

    onHandleDislikeButton = (key) => {
        let temp = this.state.feeds
        let index = temp.findIndex(feed => feed.key === key)
        temp[index].likeCount --
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
                    course={feed.course}
                    handleLikeButton={this.onHandleLikeButton}
                    handleDislikeButton={this.onHandleDislikeButton}
                />
            })
        }
    }

    onCreatePost = (content, course) => {
        let key = this.state.feeds.length;
        this.setState({ feeds: [{"username": 'shren', "content": content, "likeCount": 0, "key": key, "course": course}].concat(this.state.feeds)});
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Post createPost={this.onCreatePost}/>
                    {this.renderFeed()}
                </div>
            </ThemeProvider>
        );
    }
}

export default Homepage;


