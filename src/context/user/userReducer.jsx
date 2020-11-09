export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
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