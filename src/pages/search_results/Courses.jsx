import React from "react"
import Course from "./Course.jsx"

const Courses = (props) => {
    return props.courses.map((details) => {
        return <Course
            coursename={details.coursename}
            description={details.description}
            joined={details.joined}
            key={details.key}
            />
    })
}

export default Courses;