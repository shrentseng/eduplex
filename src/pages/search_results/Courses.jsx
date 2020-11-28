import React from "react";
import Course from "./Course.jsx";

const Courses = ({ courses }) => {
    return courses.map((course) => {
        return (
            <Course
                courseName={course.courseName}
                courseNumber={course.courseNumber}
                key={course.courseID}
                courseID={course.courseID}
            />
        );
    });
};

export default Courses;
