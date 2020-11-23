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
        const body = {
            firstName: state.userData.firstName,
            lastName: state.userData.lastName,
            email: state.userData.email,
            password: state.userData.password,
            universityID: state.userData.university,
            major: [state.userData.major],
            minor: [state.userData.minor],
            enrolledCourses: [course],
        };
        try {
            const response = await fetch("register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                console.log("account successfully created");
            } else {
                console.log(response.status);
            }
            return response.ok;
        } catch (err) {
            console.log("create Account");
            console.log(err);
            return err.status;
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
