import React, { useReducer } from "react";
import courseContext from "./courseContext";
import courseReducer from "./courseReducer";

const CourseProvider = (props) => {
    const initialState = {
        courses: [],
        myCourses: [],
        currentUniversity: "",
        loading: false,
    };
    const [state, dispatch] = useReducer(courseReducer, initialState);

    const getMyCourses = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("mycourse?userID=1") //id
                .then((res) => res.json())
                .then((result) => {
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
            fetch(`mycourse/addCourse?userID=1&universityID=${UniversityID}`)
                .then((res) => res.json())
                .then((result) => {
                    dispatch({ type: "SET_COURSES", payload: result });
                });
        } catch (err) {
            console.log("get courses");
            console.log(err);
        }
    }

    const addCourse = async (course) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch("mycourse", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(course),
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: "ADD_COURSE", payload: course });
                } else {
                    console.log(response.status);
                }
            });
        } catch (err) {
            console.log("add courses");
            console.log(err);
        }
    };

    const deleteCourse = async (body) => {
        console.log(body)
        try {
            fetch("mycourse", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
            dispatch({ type: "DELETE_COURSE", payload: body.courseID})
        } catch(err){
            console.log("Delete courses");
            console.log(err);
        }
    }

    const setCurrentUniversity = async (university) => {
        dispatch({ type: "SET_CURRENT_UNIVERSITY" , payload: university})
    }

    return (
        <courseContext.Provider
            value={{
                courses: state.courses,
                myCourses: state.myCourses,
                currentUniversity: state.currentUniversity,
                getMyCourses: getMyCourses,
                addCourse: addCourse,
                deleteCourse: deleteCourse,
                setCurrentUniversity: setCurrentUniversity,
                getCoursesByUniversity: getCoursesByUniversity,
            }}
        >
            {props.children}
        </courseContext.Provider>
    );
};
export default CourseProvider;
