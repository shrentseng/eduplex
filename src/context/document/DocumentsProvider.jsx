import React, { useReducer } from "react";
import DocumentsContext from "./documentsContext";
import documentsReducer from "./documentsReducer";

const DocumentsProvider = (props) => {
    const initialState = {
        documents: [
            // {
            //     CourseName: "PHYSICS 101",
            //     Title: "Theory of Relativity",
            //     Description: "theory developed by Albert Einstein–the greatest scienctist.",
            //     UserName: "Jim Corey",
            //     UniversityName: "University of California, Los Angeles",
            //     DownloadTimes : "Spring",
            //     Like: 5,
            //     Unlike: 1,
            //     Comment:[
            //         {
            //         UserName: "Oscar",
            //         Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti dolorum."
            //         },
            //     ],
            //     key:0,
            // },
            // {
            //     CourseName: "MATH 61",
            //     Title: "Discrete Math Midterm 1 ",
            //     Description: "Review on Discrete Math",
            //     UserName: "Jim Corey",
            //     UniversityName: "University of California, Los Angeles",
            //     DownloadTimes : "Spring",
            //     Like: 3,
            //     Unlike: 2,
            //     Comment:[
            //         {
            //         UserName: "Oscar",
            //         Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti dolorum."
            //         },
            //         {
            //         UserName: "Morris",
            //         Content: " Quas fuga beatae consequatur at ratione, culpa praesentium illo laudantium est perspiciatis odio, in placeat dignissimos quos tempore quaerat!"
            //         },
            //         {
            //         UserName: "Shren",
            //         Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti dolorum.",
            //         },
            //     ],
            //     key:1,
            // },
        ],
        
        currentInfo: {
            /*CourseName: "",
            Title: "",
            Description: "",
            UserName: "",
            UniversityName: "",
            DownloadTimes: "",
            FrontPage: "",
            Like: 0,
            Unlike: 0,
            Comment: [],
            key: null,*/
        },
        currentComments: [],
        currentSimilarDocuments: [],
        currentURL: "",
        loading: true,
    };

    const [state, dispatch] = useReducer(documentsReducer, initialState);

    const getDocuments = async () => {
        // try {
        //     dispatch({ type: "SENDING_REQUEST" });
        //     fetch(`/viewdoc?user=?documentID=${state.currentDocument.key}`)
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

    const getDocumentsByCourse = async (userID, courseID) => {
        try {
            dispatch({ type: "SENDING_REQUEST" });
            const response = await fetch(
                `/course/document?userID=${userID}&courseID=${courseID}`
            );
            const result = await response.json();
            dispatch({ type: "REQUEST_FINISHED" });
            dispatch({ type: "SET_COURSE_DOCUMENTS", payload: result });
        } catch (err) {
            console.error("get document by course err");
        }
    };

    const addDocument = async (new_document) => {
        fetch("/home/document", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_document),
        }).then((res) => {
            //console.log(res);
        });
    };

    const setCurrentInfo = async (document) => {
        try {
            const response1 = await fetch(`/viewdoc?documentID=${document.documentID}`);
            const result1 = await response1.json();
            const response2 = await fetch(`/viewdoc/download?documentID=${document.documentID}`)
            const blob = await response2.blob();
            let url = window.URL.createObjectURL(blob);
            dispatch({ type: "SET_CURRENT_INFO", payload: result1 });
            dispatch({ type: "SET_CURRENT_URL", payload: url});

        } catch (err) {
            console.error("setCurrentInfo", err);
        }
    };

    const getCurrentComments = async (documentID) => {
        try
        {
            const response = await fetch(`/viewdoc/comments?documentID=${documentID}`);
            const result = await response.json();
            dispatch({ type: "SET_CURRENT_COMMENTS", payload: result})
            console.log(result)
        }
        catch(err)
        {
            console.log("setCurrentComments")
            console.log(err)
        }
    }

    const getSimilarDocuments = async () => {
        /*try{
            fetch(`viewdoc/similar?user=?document_id=?`)
            .then(
                (result) => {
                dispatch({type: "SET_SIMILAR_DOCUMENTS", payload: result})
            });
        }
        catch(err){
            console.log("getSimilarDocuments")
            console.log(err)
        }*/
    };

    const addComment = async (new_comment) => {
        console.log(new_comment)
        dispatch({ type: "ADD_COMMENT", payload: new_comment });
        try{
        fetch("/viewdoc/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_comment)
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: "ADD_COMMENT", payload: new_comment });
            } else {
                console.log(response.status);
            }
        });
        }
        catch(err){
            console.log("getSimilarDocuments")
            console.log(err)
        }
    };

    const downloadDocument = async (documentID) => {
        try {
            const response = await fetch(
                `/viewdoc/download?documentID=${documentID}`
            );
            const blob = await response.blob();
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = "test.svg";
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("downloadDocument", err);
        }
    };

    const uploadDocument = async (document) => {
        try {
            fetch("/upload", {
                method: "POST",
                body: document,
            }).then((res) => {
                //console.log(res);
            });
        } catch (err) {
            console.error("uploadDocument", err);
        }
    };

    return (
        <DocumentsContext.Provider
            value={{
                documents: state.documents,
                loading: state.loading,
                currentInfo: state.currentInfo,
                currentComments: state.currentComments,
                currentSimilarDocuments: state.currentSimilarDocuments,
                currentURL: state.currentURL,
                getDocuments: getDocuments,
                getDocumentsByCourse: getDocumentsByCourse,
                addDocument: addDocument,
                setCurrentInfo: setCurrentInfo,
                downloadDocument: downloadDocument,
                uploadDocument: uploadDocument,
                getCurrentComments: getCurrentComments,
                addComment: addComment,
                getSimilarDocuments: getSimilarDocuments,
            }}
        >
            {props.children}
        </DocumentsContext.Provider>
    );
};
export default DocumentsProvider;
