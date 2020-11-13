import { useReducer } from "react";

const sendingRequest = (state) => {
    return {
        ...state,
        loading: true,
    };
};

const requestFinished = (state) => {
    return {
        ...state,
        loading: false,
    };
};

const addingCourse = (course, state) => {
    const newCourse = [...state.myCourses, course];
    return{
        ...state,
        myCourses: newCourse,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        case "ADDING_COURSE":
            return addingCourse(action.payload, state);
        default:
            return state;
    }
};

export default reducer;
