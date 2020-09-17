import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Course from './Course.jsx';
import FindCourse from './FindCourse.jsx';
import { Typography} from '@material-ui/core';
import Filter from './Filter.jsx';

const styles = theme => ({
    root:{
        marginLeft:'4rem',
    },
    search:{
        margin:'0.5rem',
        fontSize:'1.8em',
        fontWeight:'500',
    },
    noCourse:{
        margin:'1.5rem',
        textAlign:"center",
        color:'#7C7C7C',
        fontSize:'1.5em',
    },
});

class CourseResults extends Component
{
    constructor(props){
        super(props);
        this.state = {
            courses: [
                {
                    "coursename": "COMSCI 180",
                    "description": "Complex Programming",
                    "joined":0,
                    "key": 0,
                },
                {
                    "coursename": "PSYCH 115",
                    "description": "Behavioral Neuroscience",
                    "joined":0,
                    "key": 1,
                },
                {
                    "coursename": "COMSCI 32",
                    "description": "Introduction to Programming",
                    "joined":0,
                    "key": 2,
                },

                {
                    "coursename": "PHYSICS 1A",
                    "description": "Intro to Physics",
                    "joined":0,
                    "key": 3,
                },
                {
                    "coursename": "STATS 10",
                    "description": "Intro to Statistics",
                    "joined":0,
                    "key": 4,
                },
                {
                    "coursename": "SCAND 50",
                    "description": "Introduction to Scandanavian Culture",
                    "joined":0,
                    "key": 5,
                },
                {
                    "coursename": "PHYSICS 1B",
                    "description": "Intro to Physics",
                    "joined":0,
                    "key": 6,
                },
                {
                    "coursename": "STATS 13",
                    "description": "Intro to Statistics",
                    "joined":0,
                    "key": 7,
                },
                {
                    "coursename": "SCAND 60",
                    "description": "Introduction to Scandanavian Culture",
                    "joined":0,
                    "key": 8,
                },
                {
                    "coursename": "PHYSICS 1C",
                    "description": "Intro to Physics",
                    "joined":0,
                    "key": 9,
                },
                {
                    "coursename": "STATS 20",
                    "description": "Intro to R Programming",
                    "joined":0,
                    "key": 10,
                },
                {
                    "coursename": "SCAND 60W",
                    "description": "Introduction to Scandanavian Culture",
                    "joined":0,
                    "key": 11,
                }
            ],
        };
    }

    renderCourse(courseList)
    {
        const { classes } = this.props;
        if (courseList.length === 0) {
            return (
                <div>
                    <Typography className={classes.noCourse}>No Courses Found</Typography>
                </div>
            )
        }
        else {
            return courseList.map((details) => {
                return <Course
                    coursename={details.coursename}
                    description={details.description}
                    joined={details.joined}
                    key={details.key}
                />
        })}
    }

    render()
    {
        const searchField = this.props.keyWords;
        const courseList = this.state.courses.filter(course => {
          return course.coursename.toLowerCase().includes(searchField.toLowerCase());
        });
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div>
                    <Typography className={classes.search}>Search Results</Typography>
                </div>
                <div>
                    <Filter />
                </div>
                <div>
                    {this.renderCourse(courseList)}
                </div>
                <div>
                    <FindCourse />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CourseResults);