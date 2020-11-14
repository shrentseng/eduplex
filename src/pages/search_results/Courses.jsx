import React from "react";
import Course from "./Course.jsx";

const Courses = ({ courses }) => {
    return courses.map((course) => {
        return (
            <Course
                CourseName={course.CourseName}
                CourseNumber={course.CourseNumber}
                key={course.CourseID}
                CourseID={course.CourseID}
            />
        );
    });
};

export default Courses;
