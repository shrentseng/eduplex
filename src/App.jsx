import React, { Component } from 'react';
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './assets/bootstrap.min.css'
//import './App.css';
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
import CourseResults from './search_results/CourseResults'
import EditProfile from './pages/profile/EditProfile';
import DocumentResults from './search_results/DocumentResults'
import DocumentUpload from './pages/upload/DocumentUpload';

const styles = {
    root: {
        display: 'flex',
        backgroundColor: '#F7F7F7',
    },
    main: {
        display: 'flex',
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
            searchBox: "",
            courses: [ "Course 1", "Course 2" ],
        }
        
    }

    onSearch = (content,index) =>
    {
        this.setState({ searchBox: content })
    }

    render() {
	    const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Navbar />
                <div className={classes.main} id="main">
                    <div className={classes.sidebar} id="sidebar">
                        {(this.props.location.pathname !== "/DocumentUpload") &&
                            <ThemeProvider theme={theme_sidebar}>
                                <SideBar courses={this.state.courses} />
                            </ThemeProvider>
                        }
                    </div>
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
                            {this.state.courses.map((course) => (
                                <Route path={`/${course.split(" ").join("")}`}>
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
                                <CourseResults keyWords={this.state.searchBox}/>
                            </Route>
                            <Route path="/DocumentResults">
                                <DocumentResults keyWords={this.state.searchBox}/>
                            </Route>
                            <Route path="/DocumentUpload">
                                <ThemeProvider theme={theme_document_upload}>
                                    <DocumentUpload />
                                </ThemeProvider>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(App));
