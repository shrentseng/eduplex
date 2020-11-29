import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar.jsx";
import Head from "./Head.jsx";
import PDFViewer from "./PDFViewer.jsx";
import PDFJSBackend from "./PDFJs.jsx";
import { Typography } from "@material-ui/core";
import DocumentsContext from "../../context/document/documentsContext"

const useStyles = makeStyles(() => ({
    root: {
        display: "grid",
        gridTemplateColumns: "1% 16% 1%",
        gridTemplateRows: "8% 8% 8% 5% 14% 6%",
        width: "100vw",
        height: "100vh",
        background: "#FFFFFF",
    },
    head: {
        gridColumnStart: "1",
        gridColumnEnd: "5",
        gridRowStart: "1",
        gridRowEnd: "3",
    },
    sideBar: {
        gridColumnStart: "1",
        gridColumnEnd: "3",
        gridRowStart: "2",
        gridRowEnd: "8",
    },
    pdf: {
        gridColumnStart: "4",
        gridColumnEnd: "5",
        gridRowStart: "2",
        gridRowEnd: "8",
    },
    arrow: {
        marginLeft:"0.2rem",
        gridColumnState: "3",
        gridColumnEnd: "4",
        gridRowStart: "2",
        gridRowEnd: "8",
    }
}));

const DocumentPreview = () => {
    const classes = useStyles();
    const documentsContext = useContext(DocumentsContext);
    const [sideBarEnd, setSideBarEnd] = useState("3");
    const [pdfStart, setPDFStart] = useState("4");
    const [arrowStart, setArrowStart] = useState("3");
    const [arrowEnd, setArrowEnd] = useState("4");
    const [arrow, setArrow] = useState("<");

    useEffect(() => {
        console.log("watttup")
    }, [documentsContext.currentInfo]);

    const handleSideBar = () => {
        if(sideBarEnd === "3" && arrowStart === "3" && pdfStart === "4")
        {
            setSideBarEnd("1");
            setArrowStart("1");
            setArrowEnd("2");
            setPDFStart("2");
            setArrow(">");
        }
        else if(sideBarEnd === "1" && arrowStart === "1" && pdfStart === "2")
        {
            setSideBarEnd("3");
            setArrowStart("3");
            setArrowEnd("4");
            setPDFStart("4");
            setArrow("<");
        }
    };

    const renderSideBar = () => {
        if(sideBarEnd === "3" && arrowStart === "3" && pdfStart === "4")
            return(<SideBar />)
    };

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Head />
            </div>
            <div className={classes.sideBar} style={{gridColumnEnd:sideBarEnd}}>
                {renderSideBar()}
            </div>
            <div className={classes.arrow} style={{gridColumnStart:arrowStart, gridColumnEnd:arrowEnd}} onClick={e => handleSideBar()}>
                {arrow}
            </div>
            <div className={classes.pdf} style={{gridColumnStart:pdfStart}}>
                <PDFViewer backend={PDFJSBackend} src={"http://www.africau.edu/images/default/sample.pdf"} />
            </div>
        </div>
    );
};

export default DocumentPreview;

/*<div className={classes.pdf} style={{ gridColumnStart: pdfColumn }}>
                <Typography
                    className={classes.collapseExtend}
                    onClick={(event) => setColumn(event)}
                >
                    {arrow}
                </Typography>
</div>*/
