import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles(() => ({
    titlePaper: {
        display: "grid",
        gridTemplateColumns: "75% 10%",
        gridTemplateRows: "50%",
        padding: "1rem",
        height: "100%",
    },
    docName: {
        fontSize: "1.2em",
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "1",
        gridRowEnd: "2",
    },
    subTitle: {
        fontSize: "1em",
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "2",
        gridRowEnd: "3",
    },
    save: {
        width: "6em",
        height: "2.4em",
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "1rem",
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: "1",
        gridRowEnd: "3",
        outline: "solid 1px",
        outlineColor: "#C4C4C4",
    },
    download: {
        width: "10em",
        alignSelf: "center",
        gridColumnStart: "3",
        gridColumnEnd: "4",
        gridRowStart: "1",
        gridRowEnd: "3",
        background: "#0088D7",
        "&:hover": {
            background: "#0088D7",
        },
        color: "#FFFFFF",
    },
}));

const Head = () => {
    const classes = useStyles();
    const documentsContext = useContext(DocumentsContext);
    const handleDownload = () => {
        documentsContext.downloadDocument();
    };
    return (
        <div>
            <Paper
                variant="outlined"
                square={true}
                className={classes.titlePaper}
            >
                <Typography className={classes.docName}>
                    Document Title Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Typography className={classes.subTitle}>
                    Past Exam: Midterm
                </Typography>
                <button className={classes.save}>Save</button>
                <button className={classes.download} onClick={handleDownload}>
                    Download
                </button>
            </Paper>
        </div>
    );
};

export default Head;
