import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CommentPost from './CommentPost.jsx';
import Comment from './Comment.jsx';
import { Paper } from '@material-ui/core';


const styles = theme => ({
	root: {
		width: '100%',
		marginLeft: "auto",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	accDetails: {
		padding: "0px",
	},
});

const Accordion = withStyles({
	root: {
	  boxShadow: 'none',
	  '&:not(:last-child)': {
		borderBottom: 0,
	  },
	  '&:before': {
		display: 'none',
	  },
	  '&$expanded': {
		margin: 'auto',
	  },
	},
	expanded: {},
  })(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
	  backgroundColor: 'rgba(0, 0, 0, 0)',
	  marginBottom: -1,
	  minHeight: 56,
	  '&$expanded': {
		minHeight: 56,
	  },
	},
	content: {
	  '&$expanded': {
		margin: '0px',
	  },
	},
	expanded: {},
  })(MuiAccordionSummary);

class CommentBoard extends Component  {

	constructor(props) {
        super(props);
        this.state = {
			paper: {
				margin: "0px",
				padding: "4px",
			},
            comments: [
                {
                    "content": "123",
                    "key": "0",
                },
                {
                    "content": "456",
                    "key": "1",
                }
			],
			isExpand: false,
        };
	}

	renderComment() {
		const { classes } = this.props;
        if (this.state.comments.length === 0) {
            return <div>No Comment</div>
        } else {
            return this.state.comments.map((comment) => {
				return (
					<AccordionDetails className={classes.accDetails}>
						<Comment
							content={comment.content}
							key={comment.key}
						/>
					</AccordionDetails>
				)
            })
        }
	}
	
    onCreateComment = (content) => {
		if(content.length !== 0){
			let key = this.state.comments.length.toString();
			this.setState({ comments: this.state.comments.concat([{"content": content, "key": key}])});
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


//Add expanded={this.props.isExpand} to Axccordion
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<CommentPost isFocused={this.props.isFocused} className={classes.heading} createComment={this.onCreateComment}/>
					<Accordion elevation={0} expanded={this.state.isExpand}>
						<AccordionSummary id="panel1a-header" className={classes.accSummary} style={{textDecorationLine: "underline"}} onClick={event => this.onSetExpand()}>
							Comments
						</AccordionSummary>
						{this.renderComment()}
					</Accordion>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(CommentBoard);