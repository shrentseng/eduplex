import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles({
    root: {
        margin: "1rem",
        "& h5": {
            color: "#504F4F",
            fontWeight: "500",
        },
        "& h6": {
            color: "#504F4F",
        },
    },
    preview: {
        display: "grid",
        placeItems: "center",
        height: "11rem",
        width: "8.5rem",
        backgroundColor: "#FFFFFF",
        boxShadow: "2px 2px 6px grey",
        border: "solid 0.7px #C4C4C4",
        marginBottom: "1rem",
        "&:hover": {
            backgroundColor: "#C4C4C4",
            opacity: "0.8",
        },
    },
    previewButton: {
        borderRadius: "5px 5px",
        backgroundColor: "#FFFFFF",
        marginBottom: "1rem",
        border: "none",
    },
});

function DocumentsGrid({ document, previewURL }) {
    const classes = useStyles();

    let location = useLocation();
    let history = useHistory();
    const documentsContext = useContext(DocumentsContext);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [location, history])

    const handleDocumentPreview = (id) => {
        history.push("/DocumentPreview");
        documentsContext.setCurrentDocument(id);
    };

    return (
        <div className={classes.root}>
            {/* document preview button*/}
            <div
                className={classes.preview}
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered(!isHovered)}
            >
                {isHovered ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <button
                            onClick={(e) =>handleDocumentPreview(document.key)}
                            className={classes.previewButton}
                        >
                            <span>Preview</span>
                        </button>
                        <GetAppIcon />
                        <span style={{ margin: "0 auto" }}>{"3"}</span>
                    </div>
                ) : null}
            </div>
            {/* document title */}
            <div>
                <h5>{document.title}</h5>
                <h6>{document.course}</h6>
            </div>
        </div>
    );
}

export default DocumentsGrid;
