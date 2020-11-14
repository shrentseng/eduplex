import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import CourseList from './CourseList';
import Typography from '@material-ui/core/Typography';
import { theme_my_courses } from '../../common/theme';
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

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
	const [colleges, setColleges] = useState(['University of California, Los Angeles', 'University Of California: Berkeley']);
	const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    useEffect(() => {
        courseContext.getMyCourses(userContext.userID);
    }, []);
    //console.log(courseContext.myCourses)

	const renderColleges = () => {
		return courseContext.myCourses.map((university) => {
			return (
				<div className={classes.college}>
					<Typography variant="h3">{university.University}</Typography>
					<CourseList courses={university.Courses}/>
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
