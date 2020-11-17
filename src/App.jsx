import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/bootstrap.min.css";
import { withStyles } from "@material-ui/core/styles";
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
import Course from "./pages/course/Course";
import Profile from "./pages/profile/Profile";
import MyCourse from "./pages/my_courses/MyCourses";
import CourseResults from "./pages/search_results/CourseResults";
import EditProfile from "./pages/profile/EditProfile";
import DocumentResults from "./pages/search_results/DocumentResults";
import DocumentUpload from "./pages/upload/DocumentUpload";
import DocumentPreview from "./pages/preview/DocumentPreview";
import EduPoints from "./pages/edupoints/EduPoints";
import RightPannel from "./common/leaderboard/RightPanel";
import AddCourse from "./pages/my_courses/AddCourse";
import Courses from "./pages/course/Courses";
import UserProvider from "./context/user/UserProvider";
import FeedsProvider from "./context/feed/FeedsProvider";
import CourseProvider from "./context/course/CourseProvider";
import DocumentsProvider from "./context/document/DocumentsProvider";

const styles = {
    root: {
        display: "flex",
        backgroundColor: "#F7F7F7",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
    },
    main: {
        display: "grid",
        gridTemplateColumns:
            "minmax(14rem, 1fr) minmax(27rem, 6fr) minmax(18rem, 2fr)",
        width: "100%",
        marginTop: "3.7rem", //height of navbar
    },
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            courses: ["Course 1", "Course 2"],
        };
    }
    onSearch = (content) => {
        this.setState({ searchValue: content });
    };

    render() {
        const { classes } = this.props;
        const hasSidebarReg = new RegExp("/(DocumentPreview|DocumentUpload|SignIn|Register)");
        const hasSidebar = !hasSidebarReg.test(this.props.location.pathname);

        return (
            <UserProvider>
                <CourseProvider>
                    <DocumentsProvider>
                        <div className={classes.root}>
                            <Navbar onSearch={this.onSearch} />
                            <div className={classes.main} id="main">
                                {hasSidebar ? (
                                    <div
                                        className={classes.sidebar}
                                        id="sidebar"
                                    >
                                        <ThemeProvider theme={theme_sidebar}>
                                            <SideBar
                                                courses={this.state.courses}
                                            />
                                        </ThemeProvider>
                                    </div>
                                ): <div /> }
                                <div className={classes.page} id="page">
                                    <Switch>
                                        <Route exact path={["/", "/Homepage"]}>
                                            <ThemeProvider
                                                theme={theme_homepage}
                                            >
                                                <FeedsProvider>
                                                    <Homepage />
                                                </FeedsProvider>
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
                                            <FeedsProvider>
                                                <Profile />
                                            </FeedsProvider>
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
                                        <Route path="/CourseResults">
                                            <CourseResults
                                                searchValue={
                                                    this.state.searchValue
                                                }
                                            />
                                        </Route>
                                        <Route path="/DocumentResults">
                                            <DocumentResults
                                                searchValue={
                                                    this.state.searchValue
                                                }
                                            />
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
                                {this.props.location.pathname == "/" && (
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
            </UserProvider>
        );
    }
}

export default withRouter(withStyles(styles)(App));
