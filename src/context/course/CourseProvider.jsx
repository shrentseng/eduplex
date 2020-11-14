import React, { useReducer } from "react";
import courseContext from "./courseContext";
import courseReducer from "./courseReducer";

const CourseProvider = (props) => {

    const initialState = {
        courses:[
            {
                "coursename": "COMSCI 180",
                "description": "Complex Programming",
                "university": "UCLA",
                "key": 0,
            },
            {
                "coursename": "PSYCH 115",
                "coursenumber": "Behavioral Neuroscience",
                "university": "Berkeley",
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
