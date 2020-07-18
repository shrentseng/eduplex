import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import bookmark from '../assets/bookmark.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg';
import report from '../assets/report.svg';
import CommentBoard from './CommentBoard.jsx'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: '8px',
            width: '1000px',
        },
    },
    paper: {
        padding: '16px',
        marginBottom: '0px',
    },
    header: {
        margin: '4px',
        height: '50px',
        display: 'flex',
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
        };
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
      }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.header}>
                        {this.state.username}
                        <span>Posted in Course 1</span>
                        <img alt="" className={classes.bookmark} src={bookmark} />
                    </div>
                    <div className={classes.body}>{this.props.content}</div>
                    <div className={classes.footer}>
                        <img alt="" className={classes.img} src={like} />
                        <p className={classes.img}>{this.props.upvote}</p>
                        <img alt="" className={classes.img} src={dislike} />
                        <img alt="" className={classes.img} src={comment} onClick={event => this.focusTextInput()}/>
                        <img alt="" className={classes.img} src={share} />
                        <img alt="" className={classes.report} src={report} />
                    </div>
                </Paper>
                <CommentBoard isFocused={this.textInput}/>
            </div>
        );
    }
}

export default withStyles(styles)(Feed);