import React, { useReducer } from "react";
import RegisterContext from "./registerContext";
import registerReducer from "./registerReducer";

const RegisterProvider = (props) => {
    const initialState = {
        userData: {},
        loading: true,
    };

    const [state, dispatch] = useReducer(registerReducer, initialState);

    const createAccount = async () => {
        //fetch POST
        console.log(state.userData)
        try {
            fetch("register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(state.userData),
            }).then((res) => {
                if (res.status == 201) {
                    console.log(res)
                } else {
                    console.log(res.status);
                }
            });
        } catch (err) {
            console.log("create Account");
            console.log(err);
        }
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
