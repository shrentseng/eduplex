import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Courses from "../search_results/Courses.jsx";
import FindCourse from "../search_results/FindCourse.jsx";
import Filter from "../search_results/Filter.jsx";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "2rem",
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

const AddCourse = () => {
    const classes = useStyles();
    const courseContext = useContext(CourseContext);
    const [searchField, setSearch] = useState("");

    useEffect(() => {
        courseContext.getCoursesByUniversity(
            courseContext.currentUniversity.universityID
        );
    }, [courseContext.currentUniversity]);

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
                <Filter />
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
