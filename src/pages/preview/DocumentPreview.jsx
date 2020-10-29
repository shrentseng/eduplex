import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import SideBar from './SideBar.jsx'
import Head from './Head.jsx'
import PDFViewer from './PDFViewer.jsx'
import PDFJSBackend from './PDFJs.jsx' 
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        display: "grid",
        gridTemplateColumns:"20%",
        gridTemplateRows:"8% 8% 8% 5% 14% 6%",
        width: "100vw",
        height: "100vh",
        background: "#FFFFFF",
    },
    head:{
        gridColumnStart:"1",
        gridColumnEnd:"3",
        gridRowStart:"1",
        gridRowEnd:"3",
    },
    sideBar:{
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"2",
        gridRowEnd:"8",
    },
    pdf:{
        gridColumnStart:"2",
        gridColumnEnd:"3",
        gridRowStart:"2",
        gridRowEnd:"8",
    },
    collapseExtend:{
        color:"#FFFFFF",
        marginTop:"2.1rem",
        marginLeft:"0.5rem",
        position:"absolute",
    },
}))



const DocumentPreview = () => {
    const classes = useStyles();
    const [sideColumn, setSideColumn] = React.useState("2");
    const [pdfColumn, setPDFColumn] = React.useState("2");
    const [arrow, setArrow] = React.useState("<<");
    const setColumn = (event) => {
        if(sideColumn === "2" && pdfColumn === "2")
        {
            setSideColumn("1")
            setPDFColumn("1")
            setArrow(">>")
        }
        else if(sideColumn === "1" && pdfColumn === "1")
        {
            setSideColumn("2")
            setPDFColumn("2")
            setArrow("<<")
        }
    };
    const renderSideBar = () => {
        if(sideColumn === "2" && pdfColumn === "2")
        {
            return(
                <SideBar />
            );

        }
        else if (sideColumn === "1" && pdfColumn === "1")
        {
            return(
                <div></div>
            )
        }
    }

    return(
        <div className={classes.root}>
            <div className={classes.head}>
                <Head/>
            </div>
            <div className={classes.sideBar} style={{gridColumnEnd:sideColumn,}}>
                {renderSideBar()}
            </div>
            <div className={classes.pdf} style={{gridColumnStart:pdfColumn}}>
                <PDFViewer 
                    backend={PDFJSBackend}
                    src='/myPDF.pdf'
                />
            </div>
            <div className={classes.pdf} style={{gridColumnStart:pdfColumn}}>
                <Typography className={classes.collapseExtend} onClick={event => setColumn(event)}>
                    {arrow}
                </Typography>
            </div>
        </div>
    )
}

export default DocumentPreview;