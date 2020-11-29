import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CourseResults from "./CourseResults";
import DocumentResults from "./DocumentResults";
import FeedResults from "./FeedResults";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme_homepage, theme_course } from "../../common/theme";

const useStyles = makeStyles(() => ({
    root: {
        margin: "2rem",
    },
    title: {
        margin: "0.5rem",
        fontSize: "1.8em",
        fontWeight: "700",
        fontFamily: "Raleway",
    },
}));

const SearchResults = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>Search Results</div>
            <Switch>
                <Route exact path={"/SearchResults/CourseResults"} >
                    <ThemeProvider theme={theme_course}>
                        <CourseResults />
                    </ThemeProvider>
                </Route>
                <Route exact path={"/SearchResults/DocumentResults"}>
                    <DocumentResults />
                </Route>
                <Route exact path={"/SearchResults/FeedResults"}>
                    <ThemeProvider theme={theme_homepage}>
                        <FeedResults />
                    </ThemeProvider>
                </Route>
            </Switch>
        </div>
    );
};

export default SearchResults;
