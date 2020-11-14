import React from "react"
import Course from "./Course.jsx"

const Courses = (props) => {
    return props.courses.map((details) => {
        return <Course
            coursename={details.coursename}
            coursenumber={details.coursenumber}
            universityID={details.universityID}
            key={details.key}
            />
    })
}

export default Courses;