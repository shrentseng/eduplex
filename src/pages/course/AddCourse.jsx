import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Courses from '../search_results/Courses';
import FindCourse from '../search_results/FindCourse.jsx';
import Filter from '../search_results/Filter.jsx';

const styles = theme => ({
    root:{
        marginLeft:'4rem',
    },
    title:{
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
    search:{
        marginLeft: '0.5rem',
        marginBottom: '1rem',
        paddingLeft:'0.5rem',
        width: '53.6em',
        border: '#E5E5E5',
        height: '2.5em',
    },
});

/*
useEffect(() => {
    fetch('https://my-json-server.typicode.com/shrentseng/my_json_server/Courses')
    .then(response => response.json())
    .then(data => {
        dispatch({type: FETCH_SUCCESS, payload: data})
    })
    .catch(error =>
        dispatch({type: FETCH_FAILURE})
    );
}, [])
*/

/*
async componentDidMount(){
    const response = await fetch('https://my-json-server.typicode.com/shrentseng/my_json_server/Posts');
    const data = await response.json();
    this.setState({courses:data});
}
*/

/*
const url = 'https://my-json-server.typicode.com/shrentseng/my_json_server/Courses'
const [courses,setCourses] = React.useState(null)

useEffect(()=>{
    fetch(url)
    .then(response => {
        setCourses(response.data)
    })
},[url])
*/


class AddCourse extends Component
{

    constructor(props){
        super(props);
        this.state = {
            courses: [
                {
                    "coursename": "COMSCI 180",
                    "description": "Complex Programming",
                    "university": "UCLA",
                    "joined":0,
                    "key": 0,
                },
                {
                    "coursename": "PSYCH 115",
                    "description": "Behavioral Neuroscience",
                    "university": "Berkeley",
                    "joined":0,
                    "key": 1,
                },
                {
                    "coursename": "COMSCI 32",
                    "description": "Introduction to Programming",
                    "university": "Berkeley",
                    "joined":0,
                    "key": 2,
                },

                {
                    "coursename": "PHYSICS 1A",
                    "description": "Intro to Physics",
                    "university": "UCI",
                    "joined":0,
                    "key": 3,
                },
                {
                    "coursename": "STATS 10",
                    "description": "Intro to Statistics",
                    "university": "UCLA",
                    "joined":0,
                    "key": 4,
                },
                {
                    "coursename": "SCAND 50",
                    "description": "Introduction to Scandanavian Culture",
                    "university": "UCLA",
                    "joined":0,
                    "key": 5,
                },
                {
                    "coursename": "PHYSICS 1B",
                    "description": "Intro to Physics",
                    "university": "UCI",
                    "joined":0,
                    "key": 6,
                },
                {
                    "coursename": "STATS 13",
                    "description": "Intro to Statistics",
                    "university": "UCI",
                    "joined":0,
                    "key": 7,
                },
                {
                    "coursename": "SCAND 60",
                    "description": "Introduction to Scandanavian Culture",
                    "university": "UCLA",
                    "joined":0,
                    "key": 8,
                },
                {
                    "coursename": "PHYSICS 1C",
                    "description": "Intro to Physics",
                    "university": "Berkeley",
                    "joined":0,
                    "key": 9,
                },
                {
                    "coursename": "STATS 20",
                    "description": "Intro to R Programming",
                    "university": "Berkeley",
                    "joined":0,
                    "key": 10,
                },
                {
                    "coursename": "SCAND 60W",
                    "description": "Introduction to Scandanavian Culture",
                    "university": "",
                    "joined":0,
                    "key": 11,
                }
            ],
            searchField:"",
        };
    }

    handleSearch = (event) => 
    {
        this.setState({searchField: event.target.value})
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
        const courseList = this.state.courses.filter(course => {
              return (
                  (course.coursename.toLowerCase().includes(this.state.searchField.toLowerCase())) ||
                  (course.description.toLowerCase().includes(this.state.searchField.toLowerCase()))
                  );
        });
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <div>
                    <Typography className={classes.title}>Search Results</Typography>
                </div>
                <div>
                    <Filter />
                </div>
                    <input variant="outlined" className={classes.search} placeholder="Search" value={this.state.searchField} onChange={this.handleSearch}/>
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

export default withStyles(styles)(AddCourse);