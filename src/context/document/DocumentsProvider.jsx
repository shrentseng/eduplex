import React, { useReducer } from "react";
import DocumentsContext from "./documentsContext";
import documentsReducer from "./documentsReducer";

const DocumentsProvider = (props) => {
    const initialState = {
        documents: [
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 0,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 1,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 2,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 3,
            },
            {
                "username": "Brad Pitt",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 4,
            },
        ],
        currentDocument: null,
        loading: true,
    };

    const [state, dispatch] = useReducer(documentsReducer, initialState);

    const getDocuments = async () => {
        // try {
        //     dispatch({ type: "SENDING_REQUEST" });
        //     fetch('/home/feed?userID=1')
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             dispatch({type: "SET_DOCUMENTS", payload: result})
        //             console.log(result)
        //         }
        //     );

        //     // const res = await fetch(
        //     //     "https://my-json-server.typicode.com/shrentseng/my_json_server/Posts"
        //     // );
        //     // const data = await res.json();
        //     // dispatch({ type: "REQUEST_FINISHED" });
        //     // dispatch({ type: "SET_FEEDS", payload: data });
        // } catch (err) {
        //     console.log('get documents')
        //     console.log(err);
        // }
    };

    const addDocument = async (new_document) => {

        fetch('/home/document', {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_document)
        }).then((res) => {
            console.log(res)
        })
    };

    const setCurrentDocument = async (id) => {
        //get document data
        console.log(id)
    }

    const downloadDocument = async () => {
        //fetch document
    }

    return (
        <DocumentsContext.Provider
            value={{
                documents: state.documents,
                loading: state.loading,
                getDocuments: getDocuments,
                addDocument: addDocument,
                setCurrentDocument: setCurrentDocument,
                downloadDocument: downloadDocument,
            }}
        >
            {props.children}
        </DocumentsContext.Provider>
    );
};
export default DocumentsProvider;