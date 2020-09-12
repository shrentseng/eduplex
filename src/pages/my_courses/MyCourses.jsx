import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import CardList from './CourseList';
import Typography from '@material-ui/core/Typography';
import { theme_homepage, theme_my_courses } from '../../common/theme';

const styles = () => ({
	root: {
		marginTop: '2rem',
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

class MyCourses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			college: 'University of California, Los Angeles',
		};
  	}

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/albums')
	// 	.then(response => response.json())
	// 	.then(courses => this.setState({courses: courses.splice(0, 5)}));
	// }

	// onDeleteCourse = (index) => {
	// 	let temp = this.state.courses;
	// 	temp.splice(index, 1);
	// 	this.setState({courses: temp});
	// }
	
	render() {
		const { classes } = this.props;
		// const courses = this.state.courses.filter(course => {
		// 	return course.title.toLowerCase().includes(searchField.toLowerCase());
		// });

		return (
			<ThemeProvider theme={theme_my_courses}>
				<div className={classes.root}>
					<Typography variant="h2">My Courses</Typography>
					<div>
						<Typography variant="h3">{this.state.college}</Typography>
						<CardList />
					</div>
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(MyCourses);;
