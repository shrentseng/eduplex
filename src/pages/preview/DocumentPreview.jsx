import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Button, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        display: "grid",
        gridTemplateColumns:"25%",
        gridTemplateRows:"8% 8% 8% 5%",
        width: "125%",
        height: "100vh",
        background: "#FFFFFF",
    },
    title:{
        gridColumnStart:"1",
        gridColumnEnd:"3",
        gridRowStart:"1",
        gridRowEnd:"2",
    },
    titlePaper:{
        height:"100%",
        padding:"0.5rem",
        paddingLeft:"1rem",
        paddingBottom:"0",
        display:"grid",
        gridTemplateColumns:"75% 10%",
        gridTemplateRows:"50%",
    },
    docName:{
        fontSize:"1.2em",
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"1",
        gridRowEnd:"2",
    },
    subTitle:{
        fontSize:"1em",
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"2",
        gridRowEnd:"3",
    },
    save:{
        width:"6em",
        height:"2.4em",
        alignSelf:"center",
        marginLeft:"auto",
        marginRight:"1rem",
        gridColumnStart:"2",
        gridColumnEnd:"3",
        gridRowStart:"1",
        gridRowEnd:"3",
        outline: "solid 1px",
        outlineColor:"#C4C4C4",
    },
    download:{
        width:"10em",
        alignSelf:"center",
        gridColumnStart:"3",
        gridColumnEnd:"4",
        gridRowStart:"1",
        gridRowEnd:"3",
        background: "#0088D7",
        "&:hover":{
            background:"#0088D7",
        },
        color:"#FFFFFF"
    },
    university:{
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"2",
        gridRowEnd:"3",
    },
    course:{
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"3",
        gridRowEnd:"4",
    },
    upload:{
        gridColumnStart:"1",
        gridColumnEnd:"2",
        gridRowStart:"4",
        gridRowEnd:"5",
    }
    
}))

const DocumentPreview = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <Paper variant="outlined" square={true} className={classes.titlePaper}>
                    <Typography className={classes.docName}>
                        Document Title Lorem Ipsum Dolor Sit Amet
                    </Typography>
                    <Typography className={classes.subTitle}>
                        Past Exam: Midterm
                    </Typography>
                    <Button className={classes.save}>
                        Save
                    </Button>
                    <Button className={classes.download}>
                        Download
                    </Button>
                </Paper>
            </div>
            <div className={classes.university}>
                <Paper variant="outlined" square={true} style={{padding:"0.5rem", paddingLeft:"1em",height:"100%"}}>
                        <Typography style={{fontSize:"0.7em", fontWeight:600, color:"#747474"}}>
                            University
                        </Typography>
                        <Typography style={{color:"#0088D7"}}>
                            University of California Los Angeles
                        </Typography>
                </Paper>
            </div>
            <div className={classes.course}>
                <Paper variant="outlined" square={true} style={{padding:"0.5rem", paddingLeft:"1em", height:"100%"}}>
                    <Typography style={{fontSize:"0.7em", fontWeight:600, color:"#747474"}}>
                        Course Name
                    </Typography>
                    <Typography style={{color:"#0088D7"}}>
                        Introduction to Computer Science
                    </Typography>
                </Paper>
            </div>
            <div className={classes.upload}>
                <Paper variant="outlined" square={true} style={{display:"flex", flexDirection:"row",padding:"0.5rem", paddingLeft:"1em", height:"100%"}}>
                    <Typography style={{marginRight:"1.5rem", fontSize:"0.7em", fontWeight:600, color:"#747474",}}>
                        Uploaded By
                    </Typography>
                    <Typography style={{fontSize:"0.7em", color:"#0088D7"}}>
                        Oscar Cheng
                    </Typography>
                </Paper>
            </div>
        </div>
    )
}

export default DocumentPreview;