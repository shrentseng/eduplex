import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";
import Course from "./Course";

const Courses = () => {
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    useEffect(() => {
        console.log("courses");
        courseContext.getMyCourses(userContext.userID);
    }, [userContext.userID]);

    const courseList = (myCourses) => {
        if (myCourses.length === 0) {
            return null;
        } else {
            return myCourses.map((course, i) => {
                const courseURL = course.courseNumber.replace(/\s+/g, "");
                return (
                    <Route key={i} path={`/Courses/${courseURL}`}>
                        <Course
                            courseNumber={course.courseNumber}
                            courseID={course.courseID}
                        />
                    </Route>
                );
            });
        }
    };

    return <Switch>{courseList(courseContext.myCourses)}</Switch>;
};

export default Courses;
