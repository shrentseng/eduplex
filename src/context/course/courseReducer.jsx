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

const addCourse = (courseForContext, state) => {
    const newUniversity = state.myCourses.find((university) => {
        return university.UniversityID === courseForContext.universityID;
    });
    if (newUniversity === undefined) {
        return {
            ...state,
            myCourses: [
                ...state.myCourses,
                {
                    university: courseForContext.university,
                    universityID: courseForContext.universityID,
                    Courses: [...courseForContext.course],
                },
            ],
        };
    } else {
        const newMyCourses = state.myCourses.map((university) => {
            if (university.UniversityID === courseForContext.universityID) {
                return {
                    ...university,
                    Courses: [...university.Courses, courseForContext.course],
                };
            }
            return university;
        });
        return {
            ...state,
            myCourses: newMyCourses,
        };
    }
};

const deleteCourse = (courseID, state) => {
    const newMyCourses = state.myCourses.map((university) => {
        let index = -1;
        university.Courses.map((course, i) => {
            if (course.CourseID === courseID) {
                index = i;
            }
        });
        if (index !== -1) {
            let newCourses = [...university.Courses];
            newCourses.splice(index, 1);
            return { ...university, Courses: newCourses };
        }
        return university;
    });
    return {
        ...state,
        myCourses: newMyCourses,
    };
};

const setCurrentUniversity = (university, state) => {
    return {
        ...state,
        currentUniversity: university,
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
        case "DELETE_COURSE":
            return deleteCourse(action.payload, state);
        case "SET_CURRENT_UNIVERSITY":
            return setCurrentUniversity(action.payload, state);
        default:
            return state;
    }
};

export default reducer;
