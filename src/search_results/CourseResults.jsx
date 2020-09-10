import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Course from './Course.jsx';
import { Button } from '@material-ui/core';

const styles = theme => ({

    title:{
        margin:'0.5em',
        marginTop:'1em',
    },
    addCourse:
    {
        marginLeft:'0.5em',
    },
    add:
    {
        height:'3.5em',
        width:'10em',
        margin:'0.5em',
        backgroundColor:"#0088D7",
        "&:hover": {
            backgroundColor: "#0088D7"
        },
    }
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
                }
            ],
        };
    }

    renderCourse(courseList)
    {
        const { classes } = this.props;
        if (courseList.length === 0) {
            return <div className={classes.title}>No Courses Found</div>
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
            <div>
                <div className={classes.title}>
                Search Results
                </div>
                <div>
                    {this.renderCourse(courseList)}
                </div>
                <div className={classes.title}>
                    Didn't Find Your Course?
                </div>
                <div className={classes.addCourse}>
                    <input style={{width:"30em", height:"2.5em", border:"none"}} placeholder="Course Name (Enter full course name)"></input>
                    <input style={{marginLeft:"0.5em", width:"13.5em", height:"2.5em", border:"none"}} placeholder="Course ID"></input>
                    <Button className={classes.add} style={{marginLeft:"1em"}}>Add</Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CourseResults);