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
        setTimeout(function(){ console.log(state.userData); }, 3000);
        
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
