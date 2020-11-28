import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DocumentList from "./DocumentList";
import DocumentsContext from "../../context/document/documentsContext";

function Documents() {
    const documentsContext = useContext(DocumentsContext);
    const [documents, setDocuments] = useState([]);

    const handleDocumentPreview = (id) => {
        documentsContext.setCurrentInfo(id);
    };

    useEffect(() => {
        setDocuments(documentsContext.documents);
    }, []);
    const renderDocuments = (documents) => {
        if (documents.length === 0) {
            return <div>No documents</div>;
        } else {
            return documents.map((document) => {
                return (
                    <Link to="/DocumentPreview" onClick={handleDocumentPreview(document.key)}>
                        <DocumentList document={document} />
                    </Link>
                );
            });
        }
    };

    return <div>{renderDocuments(documents)}</div>;
}

export default Documents;
