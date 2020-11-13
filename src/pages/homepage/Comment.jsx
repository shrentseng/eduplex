import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ReplyPost from './ReplyPost.jsx'
import Reply from './Reply.jsx'
import avatar from '../../assets/avatar.svg';

const styles = theme => ({
    root: {
		display: 'flex',
		width: "95%",
		margin: '1em 0 0 1em',
	},
	avatar: {
        borderRadius: '50%',
	},
	comment: {
		display: 'flex',
		flexDirection: 'column',
	},
    heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	accDetails: {
		padding: "0.5em",
	},
});

const Accordion = withStyles({
	root: {
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			height: '2em',
			minHeight: '1em',
			display: 'none',
		},
		'&$expanded': {
			margin: '0',
		},
	},
	expanded: {
		margin: 0,
	}
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		marginBottom: -1,
		minHeight: 0,
		'&$expanded': {
			minHeight: 0,
			margin: '0',
		},
	},
	content: {
		marginTop: '0.4em',
		marginBottom: 0,
		minHeight: 0,
		'&$expanded': {
			margin: '0.4em 0px',
		},
	},
	expanded: {},
  })(MuiAccordionSummary);

class Comment extends Component{

    constructor(props){
        super(props);
        this.state = {
            replies: [
                {
					"username": "Oscar",
                    "content": "123",
                    "key": "0",
                },
                {
					"username": "Morris",
                    "content": "456",
                    "key": "1",
                }
			],
			isExpand: false,
        };
    }

	renderReply() {
		const { classes } = this.props;
        if (this.state.replies.length === 0) {
            return <div>No Replies</div>
        } else {
            return this.state.replies.map((reply) => {
				return (
					<AccordionDetails className={classes.accDetails}>
						<Reply
							content={reply.content}
							username={reply.username}
							key={reply.key}
						/>
					</AccordionDetails>
				)
            })
        }
    }
    
    onCreateReply = (content) => {
		if(content.length !== 0){
			let key = this.state.replies.length.toString();
			this.setState({ replies: this.state.replies.concat([{"username": 'Shren', "content": content, "key": key}])});
			this.setState({isExpand: true})
		}
    }
    
    onSetExpand = () =>{
		if(this.state.isExpand === false){
			this.setState({isExpand: true})
		}
		else if(this.state.isExpand === true){
			this.setState({isExpand: false})
		}
	}

    render() {
		const { classes } = this.props;

        return(
            <div className={classes.root}>
				<div style={{marginRight: '1em'}}>
					<Avatar className={classes.avatar} src={avatar} />
				</div>
                <div style={{width: '90%'}}>
					<div className={classes.comment}>
						<div style={{display: 'flex', alignItems: 'center'}}>
							<Typography variant='h5'>{this.props.username}</Typography>
							<Typography variant='h6' style={{margin: '0 0.4em'}}>•</Typography>
							<Typography variant='h6'>{'5 min ago'}</Typography>
						</div>
						<Typography variant='body1'>{this.props.context}</Typography>
					</div>
					<Accordion elevation={0} expanded={this.state.isExpand}>
						<AccordionSummary onClick={event => this.onSetExpand()}>
							<Typography variant='h5'>Reply</Typography>
						</AccordionSummary>
						{this.renderReply()}
						<ReplyPost createReply={this.onCreateReply}/>
					</Accordion>
				</div>
            </div>
        )
    }
}
export default withStyles(styles)(Comment);