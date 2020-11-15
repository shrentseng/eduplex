import React, { useState, useContext, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Courses from "../search_results/Courses.jsx";
import FindCourse from "../search_results/FindCourse.jsx";
import Filter from "../search_results/Filter.jsx";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "4rem",
    },
    title: {
        margin: "0.5rem",
        fontSize: "1.8em",
        fontWeight: "500",
    },
    noCourse: {
        margin: "1.5rem",
        textAlign: "center",
        color: "#7C7C7C",
        fontSize: "1.5em",
    },
    search: {
        marginLeft: "0.5rem",
        marginBottom: "1.5rem",
        border: "#E5E5E5",
        padding: "0.5rem",
        width: "53.5em",
    },
}));

/*const courses = [
    {
        "coursename": "COMSCI 180",
        "description": "Complex Programming",
        "universityID": "UCLA",
        "key": 0,
    },
    {
        "coursenumber": "PSYCH 115",
        "coursename": "Behavioral Neuroscience",
        "universityID": "Berkeley",
        "key": 1,
    },
]*/

const AddCourse = () => {
    const classes = useStyles();
    const [searchField, setSearch] = useState("");
    const universitySelectedRef = useRef();
    
    // const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    useEffect(() => {
        console.log(universitySelectedRef.current)
        courseContext.getCoursesByUniversity(universitySelectedRef.current);
    }, [universitySelectedRef.current]);



    // console.log(courseContext.courses);
    //const courseList = courseContext.courses;
    // console.log(courseList)

    // const courseList = courseContext.courses.filter((course) => {
    //     return (
    //         course.coursename
    //             .toLowerCase()
    //             .includes(searchField.toLowerCase()) ||
    //         course.description.toLowerCase().includes(searchField.toLowerCase())
    //     );
    // });

    const renderCourse = (courses) => {
        if (courses.length === 0) {
            return (
                <div>
                    <Typography className={classes.noCourse}>
                        No Courses Found
                    </Typography>
                </div>
            );
        } else {
            return <Courses courses={courses} />;
        }
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className={classes.root}>
            <div>
                <Typography className={classes.title}>
                    Add to My Courses
                </Typography>
            </div>
            <div>
                <Filter universitySelectedRef={universitySelectedRef} />
            </div>
            <div>
                <input
                    className={classes.search}
                    value={searchField}
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </div>
            <div>{renderCourse(courseContext.courses)}</div>
            <div>
                <FindCourse />
            </div>
        </div>
    );
};

export default AddCourse;
