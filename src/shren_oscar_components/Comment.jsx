import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ReplyPost from './ReplyPost.jsx'
import Reply from './Reply.jsx'

const styles = theme => ({
    root: {
        width: "95%",
        padding: "4px",
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

class Comment extends Component{

    constructor(props){
        super(props);
        this.state = {
            replies: [
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
			this.setState({ replies: this.state.replies.concat([{"content": content, "key": key}])});
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
                <div>   
                    {this.props.content}
                </div>
				<Accordion elevation={0} expanded={this.state.isExpand}>
					<AccordionSummary id="panel2a-header" style={{textDecorationLine: "underline"}} onClick={event => this.onSetExpand()}>
							Reply
					</AccordionSummary>
					{this.renderReply()}
				</Accordion>
                <ReplyPost createReply={this.onCreateReply}/>
            </div>
        )
    }
}
export default withStyles(styles)(Comment);
