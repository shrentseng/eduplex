import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContext from "../../context/user/userContext";
import FeedsProvider from "../../context/feed/FeedsProvider";
import CourseContext from "../../context/course/courseContext";
import Course from "./Course";

const Courses = () => {
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);
    
    useEffect(() => {
        console.log("sidebar")
        courseContext.getMyCourses(userContext.userID);
    }, [userContext.userID]);

    const courseList = (myCourses) => {
        if (myCourses.length === 0) {
            return null;
        } else {
            return myCourses.map((university) => {
                return university.Courses.map((course, i) => {
                    const courseURL = course.CourseNumber.replace(/\s+/g, "");
                    return (
                        <Route key={i} path={`/Courses/${courseURL}`}>
                            <Course
                                CourseNumber={course.CourseNumber}
                                CourseID={course.CourseID}
                            />
                        </Route>
                    );
                });
            });
        }
    };

    return <Switch>{courseList(courseContext.myCourses)}</Switch>;
};

export default Courses;
