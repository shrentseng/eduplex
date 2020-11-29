import React from "react";
import { withRouter } from "react-router";
import { Switch, Route, useLocation } from "react-router-dom";
import "./assets/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import {
    theme_document_upload,
    theme_sidebar,
    theme_homepage,
    theme_leaderboard,
} from "./common/theme";
import Register from "./pages/loginSignup/Register";
import Navbar from "./common/Nav&Side/Navbar";
import SignIn from "./pages/loginSignup/SignIn";
import Homepage from "./pages/homepage/Homepage";
import SideBar from "./common/Nav&Side/SideBar";
import Profile from "./pages/profile/Profile";
import MyCourse from "./pages/my_courses/MyCourses";
import EditProfile from "./pages/profile/EditProfile";
import DocumentUpload from "./pages/upload/DocumentUpload";
import DocumentPreview from "./pages/preview/DocumentPreview";
import EduPoints from "./pages/edupoints/EduPoints";
import RightPannel from "./common/leaderboard/RightPanel";
import AddCourse from "./pages/my_courses/AddCourse";
import Courses from "./pages/course/Courses";
import SearchResults from "./pages/search_results/SearchResults";
import UserProvider from "./context/user/UserProvider";
import FeedsProvider from "./context/feed/FeedsProvider";
import CourseProvider from "./context/course/CourseProvider";
import DocumentsProvider from "./context/document/DocumentsProvider";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#F7F7F7",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
    },
    main: {
        width: "100%",
        marginTop: "3.7rem", //height of navbar
    },
    mainWithSidebar: {
        width: "100%",
        marginTop: "3.7rem", //height of navbar
        display: "grid",
        gridTemplateColumns:
            "minmax(14rem, 1fr) minmax(27rem, 6fr) minmax(18rem, 2fr)",
    },
});

const App = () => {
    const classes = useStyles();
    let location = useLocation();
    let mainStyle = classes.main;
    const hasSidebarReg = new RegExp(
        "/(DocumentPreview|DocumentUpload|SignIn|Register)"
    );
    const hasSidebar = !hasSidebarReg.test(location.pathname);
    if (hasSidebar) {
        mainStyle = classes.mainWithSidebar;
    } else {
        mainStyle = classes.main;
    }

    return (
        <UserProvider>
            <FeedsProvider>
                <CourseProvider>
                    <DocumentsProvider>
                        <div className={classes.root}>
                            <Navbar />
                            <div className={mainStyle} id="main">
                                {hasSidebar ? (
                                    <div
                                        className={classes.sidebar}
                                        id="sidebar"
                                    >
                                        <ThemeProvider theme={theme_sidebar}>
                                            <SideBar />
                                        </ThemeProvider>
                                    </div>
                                ) : (
                                    <div />
                                )}
                                <div className={classes.page} id="page">
                                    <Switch>
                                        <Route exact path={"/"}>
                                            <ThemeProvider
                                                theme={theme_homepage}
                                            >
                                                <Homepage />
                                            </ThemeProvider>
                                        </Route>
                                        <Route path="/SignIn">
                                            <SignIn />
                                        </Route>
                                        <Route path="/Register">
                                            <Register />
                                        </Route>
                                        <Route path="/Courses">
                                            <Courses />
                                        </Route>
                                        <Route path="/Profile">
                                            <Profile />
                                        </Route>
                                        <Route path="/EditProfile">
                                            <EditProfile />
                                        </Route>
                                        <Route path="/MyCourses">
                                            <MyCourse />
                                        </Route>
                                        <Route path="/AddCourse">
                                            <AddCourse />
                                        </Route>
                                        <Route path="/SearchResults">
                                            <SearchResults />
                                        </Route>
                                        <Route path="/DocumentUpload">
                                            <ThemeProvider
                                                theme={theme_document_upload}
                                            >
                                                <DocumentUpload />
                                            </ThemeProvider>
                                        </Route>
                                        <Route path="/DocumentPreview">
                                            <DocumentPreview />
                                        </Route>
                                        <Route path="/EduPoints">
                                            <EduPoints />
                                        </Route>
                                    </Switch>
                                </div>
                                {location.pathname === "/" && (
                                    <div id="rightPannel">
                                        <Route>
                                            <ThemeProvider
                                                theme={theme_leaderboard}
                                            >
                                                <RightPannel />
                                            </ThemeProvider>
                                        </Route>
                                        <Route path="/DocumentPreview">
                                            <DocumentPreview />
                                        </Route>
                                        <Route path="/EduPoints">
                                            <EduPoints />
                                        </Route>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DocumentsProvider>
                </CourseProvider>
            </FeedsProvider>
        </UserProvider>
    );
};

export default withRouter(App);
