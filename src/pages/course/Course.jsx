import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from "@material-ui/core/Typography";
import { theme_homepage, theme_course } from '../../common/theme';
import SearchBox from '../../common/SearchBox';
import Homepage from '../homepage/Homepage';
import CourseButtons from './CourseButtons';
import Document from '../../common/documents/Documents';

const useStyles = makeStyles(() => ({
    root: {
		marginTop: '2rem',
    },
    join: {
        display: 'flex',
        alignItems: 'center',
    },
    select: {
        height: '2.25rem',
        backgroundColor: '#FFFFFF',
        width:'98%',
        '& .css-yk16xz-control': {
            minHeight: '0px',
            height: '2.25rem',
            borderColor: '#E5E5E5',
        },
        '& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue': {
            fontFamily: 'Raleway',
            color: '#111111',
            fontSize: '1rem',
            fontWeight: '400',
        },
        '&:focus': {
            outline: 'none',
        },
    },
}));

const StyledButton = withStyles({
    root: {
        height: '2.25rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E5',
        width:'98%',
        '&:focus': {
            outline: 'none',
        },
    },
})(Button)

const options = [
    { value: '1', label: 'Documents' },
    { value: '2', label: 'Lecture Notes' },
    { value: '3', label: 'Assignments' },
    { value: '4', label: 'Past Exams' },
    { value: '5', label: 'Essays' },
    { value: '6', label: 'Others' },
]

function Course({ course }) {
    const classes = useStyles();
    const history = useHistory();
    const [selected, setSelected] = useState(null);

    const handleSelectChange = (option) => {
        console.log(option);
        setSelected(option);
        history.push("/Profile/Uploaded")
    }

    return (
        <ThemeProvider theme={theme_course}>
            <div className={classes.root}>
                <Typography variant="h2">{course}</Typography>
                <div className={classes.join}>
                    <AddCircleOutlineIcon />
                    <Typography variant="h2">Join Course</Typography>
                </div>
                <CourseButtons course={course} />
                
                <Switch>
                    <Route path={`/${course.split(" ").join("")}/Discussion`}>
                        <SearchBox />
						<ThemeProvider theme={theme_homepage}>
                            <Homepage />
						</ThemeProvider>
					</Route>
					<Route path={`/${course.split(" ").join("")}/Documents`}>
                        <SearchBox />
						<Document />
					</Route>
				</Switch>
            </div>
        </ThemeProvider>
    )
}

export default Course;
