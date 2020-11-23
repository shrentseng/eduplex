import React, { useReducer } from "react";
import courseContext from "./courseContext";
import courseReducer from "./courseReducer";

const CourseProvider = (props) => {
    const initialState = {
        courses: [],
        myCourses: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(courseReducer, initialState);

    const getMyCourses = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("mycourse?userID=1") //id
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    dispatch({ type: "SET_MY_COURSES", payload: result });
                });
        } catch (err) {
            console.log("get courses");
            console.log(err);
        }
    };

    const getCoursesByUniversity = async (UniversityID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch(`mycourse/addCourse?userID=1&universityID=4`)
                .then((res) => res.json())
                .then((result) => {
                    dispatch({ type: "SET_COURSES", payload: result });
                });
        } catch (err) {
            console.log("get courses");
            console.log(err);
        }
    };

    const addCourse = async (course) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("mycourse", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(course),
            }).then((res) => {
                if (res.status == 201) {
                    dispatch({ type: "ADD_COURSE", payload: course });
                } else {
                    console.log(res.status);
                }
            });
        } catch (err) {
            console.log("add courses");
            console.log(err);
        }
    };

    return (
        <courseContext.Provider
            value={{
                courses: state.courses,
                myCourses: state.myCourses,
                getMyCourses: getMyCourses,
                addCourse: addCourse,
                getCoursesByUniversity: getCoursesByUniversity,
            }}
        >
            {props.children}
        </courseContext.Provider>
    );
};
export default CourseProvider;
