const setCourseDocuments = (course_documents, state) => {
    return {
        ...state,
        documents: course_documents,
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

const setCurrentInfo = (info, state) => {
    return {
        ...state,
        currentInfo: info,
    };
};

const addComment = (comment, state) => {
    let new_comments = [...state.currentComments,comment];
    return {
        ...state,
        currentComments: new_comments,
    };
};

const setSimilarDocuments = (similarDocuments, state) => {
    return {
        ...state,
        currentSimilarDocuments: similarDocuments,
    };
};

const setCurrentComments = (comments, state) => {
    return {
        ...state,
        currentComments: comments,
    };
}

const setCurrentURL = (url, state) => {
    return{
        ...state,
        currentURL: url,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_COURSE_DOCUMENTS":
            return setCourseDocuments(action.payload, state);
        case "SENDING_REQUEST":
            return sendingRequest(state);
        case "REQUEST_FINISHED":
            return requestFinished(state);
        case "ADD_DOCUMENT":
            return addDocument(action.payload, state);
        case "SET_CURRENT_INFO":
            return setCurrentInfo(action.payload, state);
        case "ADD_COMMENT":
            return addComment(action.payload, state);
        case "SET_SIMILAR_DOCUMENTS":
            return setSimilarDocuments(action.payload, state);
        case "SET_CURRENT_COMMENTS":
            return setCurrentComments(action.payload, state);
        case "SET_CURRENT_URL":
            return setCurrentURL(action.payload, state);
        default:
            return state;
    }
};

export default reducer;
