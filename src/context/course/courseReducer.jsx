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
    };
};

const setMyCourses = (my_courses, state) => {
    return {
        ...state,
        myCourses: my_courses,
    };
};

const addCourse = (course, state) => {
    return {
        ...state,
        myCourses: [...state.myCourses, course],
    };
};

const deleteCourse = (courseID, state) => {
    const newMyCourses = state.myCourses;
    newMyCourses.map((university) => {
        let index = -1;
        university.Courses.map((course, i) => {
            if (course.CourseID === courseID) {
                index = i;
            }
        });
        if (index > -1) {
            university.Courses.splice(index, 1);
        }
        return university.Courses;
    });
    return {
        ...state,
        myCourse: newMyCourses,
    };
};

const setCurrentUniversity = (university, state) => {
    return {
        ...state,
        currentUniversity: university,
    }
}

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
        case "DELETE_COURSE":
            return deleteCourse(action.payload, state);
        case "SET_CURRENT_UNIVERSITY":
            return setCurrentUniversity(action.payload, state)
        default:
            return state;
    }
};

export default reducer;
