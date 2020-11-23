import React, { useState, useEffect, useContext } from "react";
import {
    Router,
    Route,
    Switch,
    useLocation,
    useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DocumentGrid from "./DocumentGrid";
import DocumentList from "./DocumentList";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "1rem",
    },
});

function DocumentsView({ isGrid }) {
    const classes = useStyles();
    const View = isGrid ? DocumentGrid : DocumentList;
    const documentsContext = useContext(DocumentsContext);
    //const [documents, setDocuments] = useState(documents);
    // const previewRegex = new RegExp("/.*DocumentPreview.*");
    // const isPreviewing = false; //previewRegex.test(location.pathname) ? true : false;

    // const previewURL = `${location.pathname}/DocumentPreview`;

    useEffect(() => {}, []);

    const renderDocuments = (documents) => {
        if (documents.length === 0) {
            return <div>No documents</div>;
        } else {
            return documents.map((document) => {
                return <View document={document} />;
            });
        }
    };

    return (
        <div>
            <div className={classes.root}>
                {renderDocuments(documentsContext.documents)}
            </div>
        </div>
    );
}

export default DocumentsView;
