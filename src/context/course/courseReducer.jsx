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

const setCourses = (courses, state) => {
    return {
        ...state,
        courses: courses,
    }
}

const setMyCourses = (my_courses, state) => {
    return {
        ...state,
        myCourses: my_courses,
    };
};

const addCourse = (course, state) => {
    const newCourse = [...state.myCourses, course];
    return {
        ...state,
        myCourses: newCourse,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        case "ADD_COURSE":
            return addCourse(action.payload, state);
        case "SET_MY_COURSES":
            return setMyCourses(action.payload, state);
        case "SET_COURSES":
            return setCourses(action.payload, state);
        default:
            return state;
    }
};

export default reducer;
