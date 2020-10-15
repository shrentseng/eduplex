import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import bookmark from '../../assets/bookmark.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';
import report from '../../assets/report.svg';
import avatar from '../../assets/avatar.svg';
import CommentBoard from './CommentBoard.jsx'

const styles = theme => ({
    root: {
        margin: '1em 0',
    },
    paper: {
        padding: '1.25em',
        marginBottom: '1em',
        display: 'grid',
        gridTemplateRows: '3rem auto 2rem', 
    },
    header: {
        display: 'flex',
    },
    avatar: {
        borderRadius: '50%',
        marginRight: '0.7em',
    },
    bookmark: {
        marginTop: '-1em',
    },
    body: {
        margin: '0.5rem 0',
        minHeight: '3em',
        whiteSpace: "pre-wrap",
    },
    footer: {
        display: 'flex',
        height: '2em',
        width: '10rem',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    footerItem: {
        height: '1.5em',
    }
});

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }
    
    onSetExpandTrue = () => {
        this.setState({isExpand: true})
    }

    onToggleExpand = () => {
        this.setState(state => ({
            isExpand: !state.isExpand
        }));
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <div className={classes.header}>
                        <div>
                            {/* avatar */}
                            <Avatar className={classes.avatar} src={avatar} />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                {/* username */}
                                <Typography variant='h5'>{this.props.username}</Typography>
                                {/* date */}
                                <Typography variant='h6' style={{margin: '0 0.4em'}}>•</Typography>
                                <Typography variant='h6'>{'5 mins ago'}</Typography>
                            </div>
                            {/* posted in */}
                            <Typography variant='h6'>{`Posted in ${this.props.course} `}</Typography>
                        </div>
                        {/* <div className={classes.headerItem} style={{marginLeft: 'auto'}}>
                            <img className={classes.bookmark} src={bookmark} />
                        </div> */}
                    </div>
                    <Typography className={classes.body} variant='body1'>{this.props.content}</Typography>
                    <div className={classes.footer}>
                        <div>
                            <img className={classes.footerItem} style={{marginRight: '1em'}} src={like} onClick={(event) => this.props.handleLikeButton(this.props.index)}/>
                            <Typography display='inline'>{this.props.likeCount}</Typography>
                        </div>
                        <div>
                            <img className={classes.footerItem} style={{marginRight: '1em'}} src={comment} onClick={this.onToggleExpand}/>
                            <Typography display='inline'>{this.props.commentCount}3</Typography>
                        </div>
                        <div>
                            <img className={classes.footerItem} src={share}/>
                        </div>
                    </div>
                </Paper>
                <CommentBoard isExpand={this.state.isExpand} setExpandTrue={this.onSetExpandTrue}/>
            </div>
        );
    }
}

export default withStyles(styles)(Feed)