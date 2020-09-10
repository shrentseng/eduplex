import React, { Component } from 'react';
import CardList from '../my_course_components/CardList';
import { withStyles } from "@material-ui/core/styles";


const styles = (theme) => ({
	root: {
		marginTop: '5px',
	},
	title: {
		fontSize: '26px',
		background: '#F7F7F7',
		marginTop: '24px',
		marginBottom: '24px',
	},
	college:{
		marginBottom: '20px',
	}
});

class MyCourse extends Component {
	constructor() {
		super();
		this.state = {
			docs: [],
			searchField: '',
			college: 'University of California, Los Angeles',
		};
		this.onChangeSearch = this.onChangeSearch.bind(this);
  	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/albums')
		.then(response => response.json())
		.then(docs => this.setState({docs: docs.splice(0, 5)}));
	}

	onChangeSearch(newValue) {
		this.setState(state => ({
			searchField: newValue
		}))
	}

	onDeleteDoc = (index) => {
		let temp = this.state.docs;
		temp.splice(index, 1);
		this.setState({docs: temp});
	}

	render() {
		const { classes } = this.props;
		const searchField = this.state.searchField;
		const college = this.state.college;
		

		const docs = this.state.docs.filter(doc => {
			return doc.title.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className={classes.root}>
				<div className={classes.title}>
					My Courses
				</div>
				<div>
					<div className={classes.college}>
						{college}
					</div>
					<CardList docs={docs} deleteDoc={this.onDeleteDoc}/>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MyCourse);
