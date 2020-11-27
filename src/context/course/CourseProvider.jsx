import React, { useReducer } from "react";
import courseContext from "./courseContext";
import courseReducer from "./courseReducer";

const CourseProvider = (props) => {
    const initialState = {
        courses: [],
        myCourses: [],
        currentUniversity: { university: "", universityID: -1 }, //{university: , universityID: }
        loading: false,
    };
    const [state, dispatch] = useReducer(courseReducer, initialState);

    const getMyCourses = async (userID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            const response = await fetch(`/mycourse?userID=${userID}`); //fix id
            const result = await response.json();
            dispatch({ type: "SET_MY_COURSES", payload: result });
        } catch (err) {
            console.log("hihi");
            console.error("get my courses err");
        }
    };

    const getCoursesByUniversity = async (UniversityID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch(`/mycourse/addCourse?userID=1&universityID=${UniversityID}`)
                .then((response) => response.json())
                .then((result) => {
                    dispatch({ type: "SET_COURSES", payload: result });
                });
        } catch (err) {
            console.error("get courses err", err);
        }
    };

    const addCourse = async (course) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("/mycourse", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(course),
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: "ADD_COURSE", payload: course });
                } else {
                    console.error(response.status);
                }
            });
        } catch (err) {
            console.error("add courses", err);
        }
    };

    const deleteCourse = async (body) => {
        try {
            fetch("/mycourse", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            dispatch({ type: "DELETE_COURSE", payload: body.courseID });
        } catch (err) {
            console.error("Delete courses", err);
        }
    };

    // const setCurrentUniversity = (university) => {
    //     try {
    //         dispatch({ type: "SET_CURRENT_UNIVERSITY", payload: university });
    //     } catch (err) {
    //         console.error("set Current University", err);
    //     }
    // };

    return (
        <courseContext.Provider
            value={{
                dispatch: dispatch,
                courses: state.courses,
                myCourses: state.myCourses,
                currentUniversity: state.currentUniversity,
                getMyCourses: getMyCourses,
                addCourse: addCourse,
                deleteCourse: deleteCourse,
                //setCurrentUniversity: setCurrentUniversity,
                getCoursesByUniversity: getCoursesByUniversity,
            }}
        >
            {props.children}
        </courseContext.Provider>
    );
};
export default CourseProvider;
