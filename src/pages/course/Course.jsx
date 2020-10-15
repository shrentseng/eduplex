import React from 'react';
import { Route, Switch } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from "@material-ui/core/Typography";
import { theme_homepage, theme_course } from '../../common/theme';
import Input from '../../common/Input';
import Homepage from '../homepage/Homepage';
import CourseButtons from './CourseButtons';
import Documents from '../../common/documents/Documents';

const useStyles = makeStyles(() => ({
    root: {
        margin: '2rem 1rem',
        maxWidth: '1200px',
    },
    join: {
        display: 'flex',
        alignItems: 'center',
        margin: '1rem 0',
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
    search: {
        width: 'calc(100% - 2rem)',
        height: '2.25rem',
        margin: 0,
        border: '1px solid #E5E5E5',
        borderRadius: '5px 5px 5px 5px',
        outline: 'none',
    },
}));


function Course({ course }) {
    const classes = useStyles();
    const courseURL = course.split(" ").join("");

    return (
        <ThemeProvider theme={theme_course}>
            <div className={classes.root}>
                <Typography variant="h2">{course}</Typography>
                <div className={classes.join}>
                    <AddCircleOutlineIcon style={{color: '#0088D7'}} />
                    <Typography variant="h4">Join Course</Typography>
                </div>
                <CourseButtons course={course} />
                <Switch>
                    <Route exact path={`/${courseURL}`}>
                        <input className={classes.search} placeholder='Search in Discussion' />
						<ThemeProvider theme={theme_homepage}>
                            <Homepage />
						</ThemeProvider>
					</Route>
					<Route path={`/${courseURL}/Documents`}>
                        <input className={classes.search} placeholder='Search in Documents' />
						<Documents />
					</Route>
				</Switch>
            </div>
        </ThemeProvider>
    )
}

export default Course;
