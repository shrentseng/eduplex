import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import CardList from './CourseList';
import Typography from '@material-ui/core/Typography';
import { theme_my_courses } from '../../common/theme';

const useStyles = makeStyles(() => ({
	root: {
		margin: '2rem 2rem 0rem 4rem',
	},
	title: {
		fontSize: '26px',
		background: '#F7F7F7',
		marginTop: '24px',
		marginBottom: '24px',
	},
	college:{
		marginBottom: '2rem',
	}
}));

function MyCourses() {
	const classes = useStyles();
	const [colleges, setColleges] = useState(['University of California, Los Angeles', 'University of California, Berkeley']);

	const renderColleges = () => {
		return colleges.map((college) => {
			return (
				<div className={classes.college}>
					<Typography variant="h3">{college}</Typography>
					<CardList />
				</div>
			)
		})
	}

	return (
		<ThemeProvider theme={theme_my_courses}>
			<div className={classes.root}>
				<Typography variant="h2">My Courses</Typography>
				{renderColleges()}
			</div>
		</ThemeProvider>
	);
}

export default MyCourses;
