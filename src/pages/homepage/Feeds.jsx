import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import Feed from './Feed';

const Feeds = forwardRef((props, ref) => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        let temp = [
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
        ]
        setFeeds(temp);
    }, [])

    useImperativeHandle(ref, () => ({
        createPost(content, course) {
            let key = feeds.length;
            let temp = [
                {
                    "username": 'shren', 
                    "content": content, 
                    "likeCount": 0, 
                    "key": key, 
                    "course": course
                }
            ].concat(feeds)
            setFeeds(temp);
        }
    }));

    const onHandleLikeButton = (key) => {
        
        let temp = [...feeds];
        let index = temp.findIndex(feed => feed.key === key); // because key doesn't equal to index
        temp[index].likeCount ++;
        setFeeds(temp);
    }

    const onHandleDislikeButton = (key) => {
        let temp = [...feeds];
        let index = temp.findIndex(feed => feed.key === key);
        temp[index].likeCount --;
        setFeeds(temp);
    }

    const renderFeeds = (feeds) => {
        if (feeds.length === 0) {
            return <div>No Feed</div>
        } else {
            return feeds.map((feed) => {
                return <Feed
                    username={feed.username}
                    content={feed.content}
                    likeCount={feed.likeCount}
                    index={feed.key}
                    key={feed.key}
                    course={feed.course}
                    handleLikeButton={onHandleLikeButton}
                    handleDislikeButton={onHandleDislikeButton}
                />
            })
        }
    }

    return (
        <div>
            {renderFeeds(feeds)}
        </div>
    )
})

export default Feeds;


// import React, { Component } from 'react';
// import Feed from './Feed';

// class Feeds extends Component {
    
//     constructor(props) {
//         super(props);

//         this.state = {
//             feeds: [
//                 {
//                     "username": "Shren",
//                     "content": "fuck off",
//                     "likeCount": 1,
//                     "key": 0,
//                     "commentCount": 0,
//                     "course": 'Course 1',
//                 },
//                 {
//                     "username": "Shren",
//                     "content": "eat shit",
//                     "likeCount": 1,
//                     "key": 1,
//                     "commentCount": 0,
//                     "course": 'Course 2',
//                 },
//                 {
//                     "username": "Shren",
//                     "content": "suck my dick",
//                     "likeCount": 1,
//                     "commentCount": 0,
//                     "key": 2,
//                     "course": 'Course 3',
//                 }
//             ]
//         };
//     }

//     createPost = (content, course) => {
//         let key = this.state.feeds.length;
//         this.setState({ feeds: [{"username": 'shren', "content": content, "likeCount": 0, "key": key, "course": course}].concat(this.state.feeds)});
//     }

//     onHandleLikeButton = (key) => {
        
//         let temp = this.state.feeds
//         let index = temp.findIndex(feed => feed.key === key) // because key doesn't equal to index
//         temp[index].likeCount ++
//         this.setState({feeds: temp })
//     }

//     onHandleDislikeButton = (key) => {
//         let temp = this.state.feeds
//         let index = temp.findIndex(feed => feed.key === key)
//         temp[index].likeCount --
//         this.setState({feeds: temp })
//     }

//     renderFeeds = (feeds) => {
//         if (this.state.feeds.length === 0) {
//             return <div>No Feed</div>
//         } else {
//             return this.state.feeds.map((feed) => {
//                 return <Feed
//                     username={feed.username}
//                     content={feed.content}
//                     likeCount={feed.likeCount}
//                     index={feed.key}
//                     key={feed.key}
//                     course={feed.course}
//                     handleLikeButton={this.onHandleLikeButton}
//                     handleDislikeButton={this.onHandleDislikeButton}
//                 />
//             })
//         }
//     }

//     render() {
//         return(
//             <div>
//                 {this.renderFeeds(this.state.feeds)}
//             </div>
//         )
//     }
// }

// export default Feeds;
