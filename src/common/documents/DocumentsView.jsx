import React, { useState, useEffect, useContext } from "react";
import { Router, Route, Switch, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DocumentGrid from "./DocumentGrid";
import DocumentList from "./DocumentList";
import DocumentPreview from "../../pages/preview/DocumentPreview";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "1rem",
    },
});

function DocumentsGrid({ isGrid }) {
    const classes = useStyles();
    const View = isGrid ? DocumentGrid : DocumentList;

    const documentsContext = useContext(DocumentsContext);
    const [documents, setDocuments] = useState([]);
    const viewURL = "/^((?!DocumentPreview).)*$"
    let location = useLocation();

    const previewURL = `${location.pathname}/DocumentPreview`;
    console.log(previewURL);

    useEffect(() => {
        setDocuments(documentsContext.documents);
    }, []);

    const handleDocumentPreview = (id) => {
        documentsContext.setCurrentDocument(id);
    };

    const renderDocuments = (documents) => {
        if (documents.length === 0) {
            return <div>No documents</div>;
        } else {
            return documents.map((document) => {
                return (
                    // <Link to="/DocumentPreview" onClick={handleDocumentPreview(document.key)}>
                    <View document={document} previewURL={previewURL} />
                    // {/* </Link> */}
                );
            });
        }
    };

    return (
        <Switch>
            <Route path={viewURL}>
                <DocumentPreview />
            </Route>
            <Route exact path={`${location.pathname}`}>
                <div className={classes.root}>{renderDocuments(documents)}</div>
            </Route>
        </Switch>
    );
}

export default DocumentsGrid;
