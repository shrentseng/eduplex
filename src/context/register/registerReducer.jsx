function setRegister1(values, state) {
    //cannot use arrow function paras will be undefined
    return {
        ...state,
        userData: { ...state.userData, ...values },
    };
}

function setRegister2(values, state) {
    return {
        ...state,
        userData: { ...state.userData, ...values },
    };
}

const setRegister3 = (course, state) => {
    return {
        ...state,
        userData: { ...state.userData, course: course },
    };
};

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
