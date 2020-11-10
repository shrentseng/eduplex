function setUser(userID, state) {
    return {
        ...state,
        userID: userID,
    }
}


export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return setUser(action.payload, state);
        case 'LOGGING_IN':
            return {
                ...state,
                loading: true                
            }
        case 'LOGGED_IN':
            return {
                ...state,
                loading: false
            }
    }
}