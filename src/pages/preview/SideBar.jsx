import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import SimilarComments from "./SimilarComments.jsx";
import SimilarDocuments from "./SimilarDocuments.jsx";

const useStyles = makeStyles(() => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0.5rem",
        paddingLeft: "1em",
        height: "100%",
    },
    university: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "2",
        gridRowEnd: "3",
    },
    course: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "3",
        gridRowEnd: "4",
    },
    upload: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "4",
        gridRowEnd: "5",
    },
    description: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "5",
        gridRowEnd: "6",
    },
    helpful: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "6",
        gridRowEnd: "7",
    },
    commentDocument: {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "7",
        gridRowEnd: "8",
    },
}));

const SideBar = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.university}>
                <Paper square={true} className={classes.paper}>
                    <Typography
                        style={{
                            fontSize: "0.7em",
                            fontWeight: 600,
                            color: "#747474",
                        }}
                    >
                        University
                    </Typography>
                    <Typography style={{ color: "#0088D7" }}>
                        University of California Los Angeles
                    </Typography>
                </Paper>
            </div>
            <div className={classes.course}>
                <Paper square={true} className={classes.paper}>
                    <Typography
                        style={{
                            fontSize: "0.7em",
                            fontWeight: 600,
                            color: "#747474",
                        }}
                    >
                        Course Name
                    </Typography>
                    <Typography style={{ color: "#0088D7" }}>
                        Introduction to Computer Science
                    </Typography>
                </Paper>
            </div>
            <div className={classes.upload}>
                <Paper square={true} className={classes.paper}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Typography
                            style={{
                                marginRight: "1.5rem",
                                fontSize: "0.7em",
                                fontWeight: 600,
                                color: "#747474",
                            }}
                        >
                            Uploaded By
                        </Typography>
                        <Typography
                            style={{ fontSize: "0.7em", color: "#0088D7" }}
                        >
                            Oscar Cheng
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={classes.description}>
                <Paper square={true} className={classes.paper}>
                    <Typography
                        style={{
                            marginRight: "1.5rem",
                            fontSize: "0.7em",
                            fontWeight: 600,
                            color: "#747474",
                        }}
                    >
                        Description
                    </Typography>
                    <Typography style={{ fontSize: "0.7em", color: "#504F4F" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed, illum sunt perspiciatis dolore cumque, itaque
                        ex, in non officiis a amet? Recusandae earum quibusdam
                        commodi dolorem quos tempore ducimus necessitatibus?
                    </Typography>
                </Paper>
            </div>
            <div className={classes.helpful}>
                <Paper square={true} className={classes.paper}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Typography
                            style={{
                                marginTop: "0.5rem",
                                fontSize: "0.7em",
                                fontWeight: 600,
                                color: "#747474",
                            }}
                        >
                            Helpful?
                        </Typography>
                        <Button
                            style={{
                                width: "6em",
                                height: "2em",
                                marginLeft: "2em",
                                border: "solid 1px",
                                borderColor: "#C4C4C4",
                                borderRadius: 3,
                            }}
                        >
                            Yes
                        </Button>
                        <Button
                            style={{
                                width: "6em",
                                height: "2em",
                                marginLeft: "1em",
                                border: "solid 1px",
                                borderColor: "#C4C4C4",
                                borderRadius: 3,
                            }}
                        >
                            No
                        </Button>
                    </div>
                </Paper>
            </div>
            <div className={classes.commentDocument}>
                <Paper
                    square={true}
                    className={classes.paper}
                    style={{ justifyContent: "left" }}
                >
                    <Typography
                        style={{
                            marginRight: "1.5rem",
                            fontSize: "0.7em",
                            fontWeight: 600,
                            color: "#747474",
                        }}
                    >
                        Comments
                    </Typography>
                    <SimilarComments />
                    <Typography
                        style={{
                            marginRight: "1.5rem",
                            fontSize: "0.7em",
                            fontWeight: 600,
                            color: "#747474",
                        }}
                    >
                        Similar Documents
                    </Typography>
                    <SimilarDocuments />
                </Paper>
            </div>
        </div>
    );
};
export default SideBar;

/*

*/
