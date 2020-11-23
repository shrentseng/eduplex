import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import { theme_homepage, theme_course } from "../../common/theme";
import PostFeeds from "../homepage/PostFeeds";
import CourseButtons from "./CourseButtons";
import Documents from "../../common/documents/Documents";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";
import FeedsContext from "../../context/feed/feedsContext";
import DocumentsContext from "../../context/document/documentsContext";

const useStyles = makeStyles(() => ({
    root: {
        margin: "2rem",
        maxWidth: "1200px",
    },
    join: {
        display: "flex",
        alignItems: "center",
        margin: "1rem 0",
    },
    select: {
        height: "2.25rem",
        backgroundColor: "#FFFFFF",
        width: "100%",
        "& .css-yk16xz-control": {
            minHeight: "0px",
            height: "2.25rem",
            borderColor: "#E5E5E5",
        },
        "& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue": {
            fontFamily: "Raleway",
            color: "#111111",
            fontSize: "1rem",
            fontWeight: "400",
        },
        "&:focus": {
            outline: "none",
        },
    },
    search: {
        width: "calc(100% - 4rem)",
        height: "2.25rem",
        margin: "0 2rem",
        border: "1px solid #E5E5E5",
        borderRadius: "5px 5px 5px 5px",
        outline: "none",
    },
}));

const Course = ({ CourseNumber, CourseID }) => {
    const classes = useStyles();
    const userContext = useContext(UserContext);
    const documentsContext = useContext(DocumentsContext);
    const feedsContext = useContext(FeedsContext);
    const courseURL = CourseNumber.replace(/\s+/g, "");
    useEffect(() => {
        console.log("course");
        documentsContext.getDocumentsByCourse(userContext.userID, CourseID);
        feedsContext.getFeedsByCourse(userContext.userID, CourseID);
    }, [courseURL]);
    return (
        <ThemeProvider theme={theme_course}>
            <div className={classes.root}>
                <div style={{ margin: "2rem" }}>
                    <Typography variant="h2">{CourseNumber}</Typography>
                    <div className={classes.join}>
                        <AddCircleOutlineIcon style={{ color: "#0088D7" }} />
                        <Typography variant="h4">Join Course</Typography>
                    </div>
                    <CourseButtons CourseNumber={CourseNumber} />
                </div>
                <Switch>
                    <Route exact path={`/Courses/${courseURL}`}>
                        <input
                            className={classes.search}
                            placeholder="Search in Discussion"
                        />
                        <ThemeProvider theme={theme_homepage}>
                            <PostFeeds />
                        </ThemeProvider>
                    </Route>
                    <Route path={`/Courses/${courseURL}/Documents`}>
                        <input
                            className={classes.search}
                            placeholder="Search in Documents"
                        />
                        <Documents documents={documentsContext.documents} />
                    </Route>
                </Switch>
            </div>
        </ThemeProvider>
    );
};

export default Course;
