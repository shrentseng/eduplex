import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';
import Courses from './Courses.jsx';
import FindCourse from './FindCourse.jsx';
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
                    "coursenumber": "COMSCI 180",
                    "coursename": "Complex Programming",
                    "university": "UCLA",
                    "key": 0,
                },
                {
                    "coursenumber": "PSYCH 115",
                    "coursename": "Behavioral Neuroscience",
                    "university": "Berkeley",
                    "key": 1,
                },
                {
                    "coursenumber": "COMSCI 32",
                    "coursename": "Introduction to Programming",
                    "university": "Berkeley",
                    "key": 2,
                },
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
            return <Courses courses={courseList}/>
        }
    }

    render()
    {
        const searchField = this.props.searchValue;
        const courseList = this.state.courses.filter(course => {
              return (
                  (course.coursename.toLowerCase().includes(searchField.toLowerCase())) ||
                  (course.couresnumber.toLowerCase().includes(searchField.toLowerCase()))
                  );
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