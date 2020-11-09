import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReduer from "./userReducer";

const UserProvider = (props) => {
    const initialState = {
        user: null,
        loading: true,
    };

    const [state, dispatch] = useReducer(userReduer, initialState);

    const login = async () => {
        try {
            dispatch({ type: "LOGGING_IN" });
            const res = await fetch("");
            const data = await res.json();
            dispatch({ type: "LOGGED_IN" });
            dispatch({ type: "SET_USER", payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                setUser: state.setUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
export default UserProvider;
