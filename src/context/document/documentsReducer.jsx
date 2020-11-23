const setCourseDocuments = (course_documents, state) => {
    console.log(course_documents);
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
        currentDocument: info,
    };
};

const addComment = (comment, state) => {
    let new_comments = [
        ...state.currentDocument.Comment,
        { UserName: "Oscar", Content: comment.Message },
    ];
    let new_current_document = {
        CourseName: state.currentDocument.CourseName,
        Title: state.currentDocument.Title,
        Description: state.currentDocument.Description,
        UserName: state.currentDocument.UserName,
        UniversityName: state.currentDocument.UniversityName,
        DownloadTimes: state.currentDocument.DownloadTimes,
        FrontPage: state.currentDocument.FrontPage,
        Like: state.currentDocument.Like,
        Unlike: state.currentDocument.Unlike,
        Comment: new_comments,
        key: state.currentDocument.key,
    };
    return {
        ...state,
        currentDocument: new_current_document,
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
        default:
            return state;
    }
};

export default reducer;
