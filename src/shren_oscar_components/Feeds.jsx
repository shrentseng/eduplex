import React from 'react'
import Feed from './Feed';

function Feeds(props) {

    // const onHandleLikeButton = (key) => {
    //     let temp = this.state.feeds
    //     let index = temp.findIndex(feed => feed.key === key) // because key doesn't equal to index
    //     temp[index].likeCount ++
    //     this.setState({feeds: temp })
    // }

    // const onHandleDislikeButton = (key) => {
    //     let temp = this.state.feeds
    //     let index = temp.findIndex(feed => feed.key === key)
    //     temp[index].likeCount --
    //     this.setState({feeds: temp })
    // }

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
                    //handleLikeButton={onHandleLikeButton}
                    //handleDislikeButton={onHandleDislikeButton}
                />
            })
        }
    }

    return (
        <div>
            {renderFeeds(props.feeds)}
        </div>
    )
}

export default Feeds
