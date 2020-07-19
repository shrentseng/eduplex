import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
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
        padding: "1em",
    },
    header: {
        margin: '4px',
        height: '50px',
        display: 'flex',
    },
    avatar: {
        borderRadius: '50%',
    },
    bookmark: {
        height: '27px',
        marginLeft: 'auto',
        margin: '0px'
    },
    body: {
        margin: '4px',
        minHeight: '50px',
        whiteSpace: "pre-wrap",
    },
    footer: {
        marginTop: '15px',
        margin: '4px',
        height: '25px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    img: {
        margin: '4px',
        marginRight: '23px',
        height: '22px',
    },
    report: {
        margin: '2px',
        height: '22px',
        marginLeft: 'auto',
    },
});

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'Shren Tsneg',
            isExpand: false,
        };
    }
    
    onSetExpandTrue = () =>{
        this.setState({isExpand: true})
    }

    onSetExpand = () =>{
		if(this.state.isExpand === false){
            this.setState({isExpand: true})
		}
		else {
			this.setState({isExpand: false})
		}
	}

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <div className={classes.header}>
                        <Avatar className={classes.avatar} src={avatar} />
                        <p>{this.state.username}</p>
                        <p>Posted in Course 1</p>
                        <img className={classes.bookmark} src={bookmark} />
                    </div>
                    <div className={classes.body}>{this.props.content}</div>
                    <div className={classes.footer}>
                        <img className={classes.img} src={like} />
                        <p className={classes.img}>{this.props.upvote}</p>
                        <img className={classes.img} src={dislike} />
                        <img className={classes.img} src={comment} onClick={event => this.onSetExpand()}/>
                        <img className={classes.img} src={share} />
                        <img className={classes.report} src={report} />
                    </div>
                </Paper>
                <CommentBoard isExpand={this.state.isExpand} setExpandTrue={this.onSetExpandTrue}/>
            </div>
        );
    }
}

export default withStyles(styles)(Feed);