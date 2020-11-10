function setRegister1(values, state) {
    //cannot use arrow function paras will be undefined
    let newUserData = { ...state.userData, ...values };
    return {
        ...state,
        userData: newUserData,
    };
}

function setRegister2(values, state) {
    let newUserData = { ...state.userData, ...values };
    return {
        ...state,
        userData: newUserData,
    };
}

function setRegister3(course, state) {
    let newUserData = { ...state.userData, "Course": course };
    return {
        ...state,
        userData: newUserData,
    };
}

const registerReducer = (state, action) => {
    switch (action.type) {
        case "SET_REGISTER1":
            return setRegister1(action.payload, state);
        case "SET_REGISTER2":
            return setRegister2(action.payload, state);
        case "SET_REGISTER3":
            return setRegister3(action.payload, state);
        default:
            return state;
    }
};

export default registerReducer;
