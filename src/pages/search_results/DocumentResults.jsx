import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Documents from "../../common/documents/Documents";
import Filter from "./Filter.jsx";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles(() => ({
    root: {
    },
    search: {
        margin: "0.5rem",
        fontSize: "1.8em",
        fontWeight: "500",
    },
    noDocument: {
        margin: "1.5rem",
        textAlign: "center",
        color: "#7C7C7C",
        fontSize: "1.5em",
    },
}));

const DocumentResults = () => {
    const classes = useStyles();
    const documentsContext = useContext(DocumentsContext);
    const renderDocuments = () => {
        if (documentsContext.documents.length === 0) {
            return (
                <div>
                    <Typography className={classes.noDocument}>
                        No Documents Found
                    </Typography>
                </div>
            );
        } else {
            return <Documents />;
        }
    };

    return (
        <div className={classes.root}>
            <div>
                <Filter />
            </div>
            <div>{renderDocuments()}</div>
        </div>
    );
};

export default DocumentResults;