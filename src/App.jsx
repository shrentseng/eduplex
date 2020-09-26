import React, { Component } from 'react';
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './assets/bootstrap.min.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme_document_upload, theme_sidebar, theme_homepage } from './common/theme';
import Register from './pages/loginSignup/Register';
import Navbar from './common/Nav&Side/Navbar';
import SignIn from './pages/loginSignup/SignIn';
import Homepage from './pages/homepage/Homepage';
import SideBar from './common/Nav&Side/SideBar';
import Course from './pages/course/Course';
import Profile from './pages/profile/Profile';
import Search from './search_containers/Search';
import MyCourse from './pages/my_courses/MyCourses';
import CourseResults from './pages/search_results/CourseResults'
import EditProfile from './pages/profile/EditProfile';
import DocumentResults from './pages/search_results/DocumentResults'
import DocumentUpload from './pages/upload/DocumentUpload';
import DocumentPreview from './pages/preview/DocumentPreview'


const styles = {
    root: {
        display: 'flex',
        backgroundColor: '#F7F7F7',
        width: '100%',
    },
    main: {
        display: 'grid',
        gridTemplateColumns: 'minmax(14rem, 20%) minmax(27rem, 5fr) 1fr',
        width: '100%',
        marginTop: '3.7rem', //height of navbar
    },
    sidebar: {
    },
    page: {
    },
};

class App extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: "",
            courses: [ "Course 1", "Course 2" ],
        }
        
    }

    onSearch = (content) =>
    {
        this.setState({ searchValue: content })
    }

    render() {
	    const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Navbar onSearch={this.onSearch}/>
                <div className={classes.main} id="main">
                    {(this.props.location.pathname !== "/DocumentUpload") && (this.props.location.pathname !== "/DocumentPreview") && 
                        <div className={classes.sidebar} id="sidebar">
                            <ThemeProvider theme={theme_sidebar}>
                                <SideBar courses={this.state.courses} />
                            </ThemeProvider>
                        </div>}
                    <div className={classes.page} id="page"> 
                        <Switch>
                            <Route exact path="/">
                                <ThemeProvider theme={theme_homepage}>
                                    <Homepage />
                                </ThemeProvider>
                            </Route>
                            <Route path="/SignIn">
                                <SignIn />
                            </Route>
                            <Route path="/Register">
                                <Register />
                            </Route>
                            {this.state.courses.map((course, i) => (
                                <Route key={i} path={`/${course.split(" ").join("")}`}>
                                    <Course course={course} />
                                </Route>
                            ))}
                            <Route path="/Profile">
                                <Profile />
                            </Route>
                            <Route path="/EditProfile">
                                <EditProfile />
                            </Route>
                            <Route path="/Search">
                                <Search />
                            </Route>
                            <Route path="/MyCourses">
                                <MyCourse />
                            </Route>
                            <Route path="/CourseResults">
                                <CourseResults searchValue={this.state.searchValue}/>
                            </Route>
                            <Route path="/DocumentResults">
                                <DocumentResults searchValue={this.state.searchValue}/>
                            </Route>
                            <Route path="/DocumentUpload">
                                <ThemeProvider theme={theme_document_upload}>
                                    <DocumentUpload />
                                </ThemeProvider>
                            </Route>

                            <Route path="/DocumentPreview">
                                <DocumentPreview />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(App));