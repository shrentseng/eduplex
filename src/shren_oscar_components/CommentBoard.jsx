import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import CommentPost from './CommentPost.jsx';
import Comment from './Comment.jsx';
import { Paper } from '@material-ui/core';

const styles = theme => ({
	root: {
		width: '100%',
		marginLeft: "auto",
	},
	paper: {
		width: "95%",
        marginLeft: "auto",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	accDetails: {
		padding: "0%",
	},
	lineSeparate:{
        margin: "0px",
        marginLeft: "18px",
        justifyContent: "center",
        width: "96%",
    },
});

const Accordion = withStyles({
	root: {
	  border: '1px solid rgba(0, 0, 0, .125)',
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
	  borderBottom: '1px solid rgba(0, 0, 0, 0)',
	  marginBottom: -1,
	  minHeight: 56,
	  '&$expanded': {
		minHeight: 56,
	  },
	},
	content: {
	  '&$expanded': {
		margin: '12px 0',
	  },
	},
	expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
	root: {
	  padding: theme.spacing(2),
	},
  }))(MuiAccordionDetails);

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
                    "content": "this is comment",
                    "key": "0",
                },
                {
                    "content": "this is comment too",
                    "key": "1",
                }
			],
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
			this.props.setExpandTrue();
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Accordion elevation={0} expanded={this.props.isExpand}>
						<AccordionSummary id="panel1a-header" >
							<CommentPost className={classes.heading} createComment={this.onCreateComment}/>
						</AccordionSummary>
						<hr className={classes.lineSeparate}/>
						{this.renderComment()}
					</Accordion>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(CommentBoard);