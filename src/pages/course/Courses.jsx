import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedsProvider from "../../context/feed/FeedsProvider";
import CourseContext from "../../context/course/courseContext";
import Course from "./Course";

function Courses() {
    const courseContext = useContext(CourseContext);
    console.log(courseContext.myCourses);
    const courseList = (myCourses) => {
        if (myCourses.length === 0) {
            return null;
        } else {
            return myCourses.map((university) => {
                let length = university.Courses.length;
                let course = university.Courses;
                for (let i = 0; i < length; ++i) {
                    return (
                        <Route
                            key={i}
                            path={`/Courses/${course[i].CourseNumber}`}
                        >
                            <FeedsProvider>
                                <Course course={course[i].CourseNumber} />
                            </FeedsProvider>
                        </Route>
                    );
                }
            });
        }
    };

    return <Switch>{courseList(courseContext.myCourses)}</Switch>;
}

export default Courses;
