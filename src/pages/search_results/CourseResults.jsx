import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Courses from "./Courses";
import FindCourse from "./FindCourse";
import Filter from "./Filter";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles(() => ({
    root: {},
    noCourse: {
        margin: "1.5rem",
        textAlign: "center",
        color: "#7C7C7C",
        fontSize: "1.5em",
    },
}));

const CourseResults = () => {
    const classes = useStyles();
    const courseContext = useContext(CourseContext);

    const renderCourses = () => {
        if (courseContext.courses.length === 0) {
            return (
                <div>
                    <Typography className={classes.noCourse}>
                        No Courses Found
                    </Typography>
                </div>
            );
        } else {
            return <Courses courses={courseContext.courses} />;
        }
    };
    return (
        <div className={classes.root}>
            <div>
                <Filter />
            </div>
            <div>{renderCourses()}</div>
            <div>
                <FindCourse />
            </div>
        </div>
    );
};

export default CourseResults;
