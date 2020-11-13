import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';
import Courses from '../search_results/Courses.jsx';
import FindCourse from '../search_results/FindCourse.jsx';
import Filter from '../search_results/Filter.jsx';
import CourseContext from '../../context/course/courseContext'

const useStyles = makeStyles(theme => ({
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
        marginLeft:'0.5rem',
        marginBottom:'1.5rem',
        border:'#E5E5E5',
        padding:'0.5rem',
        width:'53.5em',
    }

}));

/*const courses = [
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
]*/

const AddCourse = () => 
{
    const classes = useStyles();
    const [searchField,setSearch] = React.useState("");
    const courseContext = useContext(CourseContext);

    const courseList = courseContext.courses.filter(course => {
        return (
            (course.coursename.toLowerCase().includes(searchField.toLowerCase())) ||
            (course.description.toLowerCase().includes(searchField.toLowerCase()))
            );
        });

    const renderCourse = (courseList) => {
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

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return(
        <div className={classes.root}>
            <div>
                <Typography className={classes.title}>Search Results</Typography>
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <input className={classes.search} value={searchField} placeholder="Search" onChange={handleSearch}/>
            </div>
            <div>
                {renderCourse(courseList)}
            </div>
            <div>
                <FindCourse />
            </div>
        </div>
    );
}

export default AddCourse;
