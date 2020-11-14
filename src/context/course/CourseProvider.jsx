import React, { useReducer } from "react";
import courseContext from "./courseContext";
import courseReducer from "./courseReducer";

const CourseProvider = (props) => {

    const initialState = {
        courses:[
            {
                "coursename": "Complex Programming",
                "coursenumber": "COMSCI 180",
                "universityID": 1,
                "key": 0,
            },
            {
                "coursename": "Behavioral Neuroscience",
                "coursenumber": "PSYCH 115",
                "universityID": 2,
                "key": 1,
            },
        ],
        myCourses:[],
        loading:false,
    }
    const [state, dispatch] = useReducer(courseReducer, initialState);

    const getCourses = async () => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            fetch('')
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: "SET_COURSES", payload: result})
                    console.log(result)
                });
        }
        catch(err){
            console.log('get courses')
            console.log(err);
        }
    }

    const addCourse = async(add_course) => {
        dispatch({type: "ADDING_COURSE", payload: add_course});
    }

    return(
        <courseContext.Provider 
            value={{
                courses: state.courses,
                myCourses: state.myCourses,
                getCourse: getCourses,
                addCourse: addCourse,
            }}
        >
            {props.children}
        </courseContext.Provider>
    )
};
export default CourseProvider;
