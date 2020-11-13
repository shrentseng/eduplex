const setDocuments = (my_documents, state) => {
    return {
        ...state,
        feeds: my_documents,
    };
};

const sendingRequest = (state) => {
    return {
        ...state,
        loading: true,
    };
};

const requestFinished = (state) => {
    return {
        ...state,
        loading: false,
    };
};

const addDocument = (document, state) => {
    const newDocuments = [...state.documents, document];
    return {
        ...state,
        documents: newDocuments,
    };
};

const setCurrentDocument = (id, state) => {
    return { 
        ...state,
        currentDocument: id,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DOCUMENTS":
            return setDocuments(action.payload, state);
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        case "ADD_DOCUMENT":
            return addDocument(action.payload, state);
        case "setCurrentDocument":
            return setCurrentDocument(action.payload, state);
        default:
            return state;
    }
};

export default reducer;