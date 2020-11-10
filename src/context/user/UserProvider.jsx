import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const UserProvider = (props) => {
    const initialState = {
        userID: null,
        loading: true,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    // const login = async () => {
    //     try {
    //         dispatch({ type: "LOGGING_IN" });
    //         const res = await fetch("");
    //         const data = await res.json();
    //         dispatch({ type: "LOGGED_IN" });
    //         dispatch({ type: "SET_USER", payload: data });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const signIn = async (user) => {
        dispatch({ type: "LOGGING_IN" });
        //fetching
        let userID;
        dispatch({ type: "LOGGED_IN" });
        dispatch({ type: "SET_USER", payload: userID });
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                signIn: signIn,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export default UserProvider;
