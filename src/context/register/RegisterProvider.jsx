import React, { useReducer } from "react";
import RegisterContext from "./registerContext";
import registerReducer from "./registerReducer";

const RegisterProvider = (props) => {
    const initialState = {
        userData: {},
        loading: true,
    };

    const [state, dispatch] = useReducer(registerReducer, initialState);

    const createAccount = async (course) => {
        //fetch POST
        try {
            dispatch({ type: "SET_REGISTER3", payload: course });
            // const response = await fetch("register", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({...state.userData, course: course),
            // });
            // if (response.status == 201) {
            //     console.log("account successfully created");
            // } else {
            //     console.log(response.status);
            // }
        } catch (err) {
            console.log("create Account");
            console.log(err);
            return 201;
        }
        return 201;
    };

    return (
        <RegisterContext.Provider
            value={{
                userData: state.userData,
                loading: state.loading,
                createAccount: createAccount,
                dispatch: dispatch,
            }}
        >
            {props.children}
        </RegisterContext.Provider>
    );
};

export default RegisterProvider;
