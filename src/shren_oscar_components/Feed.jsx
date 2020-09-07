import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import bookmark from '../assets/bookmark.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg';
import report from '../assets/report.svg';
import avatar from '../assets/avatar.svg';
import CommentBoard from './CommentBoard.jsx'

const styles = theme => ({
    root: {
        margin: '1em',
    },
    paper: {
        padding: '1em',
        marginBottom: '1em',
    },
    headerItem: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: '50%',
        marginRight: '0.5em',
    },
    bookmark: {
        marginTop: '-1em',
    },
    body: {
        marginTop: '2em',
        marginBottom: '2em',
        marginLeft: '1em',
        marginRight: '1em',
        minHeight: '3em',
        whiteSpace: "pre-wrap",
    },
    footer: {
        width: '12em',
        height: '2em',
        marginLeft: '1em',
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
                    <Grid container className={classes.header}>
                        <Grid className={classes.headerItem} item xs={4}>
                            <Avatar className={classes.avatar} src={avatar} />
                            <Typography variant='h5' style={{marginRight: '1em'}}>{this.props.username}</Typography>
                            <Typography variant='h6'>5 mins ago</Typography>
                        </Grid>
                        
                       
                        <Grid className={classes.headerItem} item xs={3}>
                            <Typography variant='h6'>Posted in {this.props.course}</Typography>
                        </Grid>
                        <Grid className={classes.headerItem} item xs={1} style={{marginLeft: 'auto'}}>
                            <img className={classes.bookmark} src={bookmark} />
                        </Grid>
                    </Grid>
                    <Typography className={classes.body} variant='body1'>{this.props.content}</Typography>
                    <Grid container className={classes.footer}>
                        <Grid item xs={2}>
                            <img className={classes.footerItem} src={like} onClick={(event) => this.props.handleLikeButton(this.props.index)}/>
                        </Grid>
                        <Grid item xs={2}>
                            <span style={{display: 'flex', justifyContent: 'center', paddingRight: '0.6em'}}>{this.props.likeCount}</span>
                        </Grid>
                        <Grid item xs={2}>
                            <img className={classes.footerItem} src={dislike} onClick={(event) => this.props.handleDislikeButton(this.props.index)}/>
                        </Grid>
                        <Grid item xs={4}>
                            <img className={classes.footerItem} style={{marginRight: '1em'}} src={comment} onClick={this.onToggleExpand}/>
                            <Typography display='inline'>{this.props.commentCount}3</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <CommentBoard isExpand={this.state.isExpand} setExpandTrue={this.onSetExpandTrue}/>
            </div>
        );
    }
}

export default withStyles(styles)(Feed)