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
    const new_my_courses = [...state.myCourses, course];
    return {
        ...state,
        myCourses: new_my_courses,
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
