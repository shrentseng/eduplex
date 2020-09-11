import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './assets/bootstrap.min.css'
import './App.css';
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
        return (
                <Router>
                    <div style={{background: '#F7F7F7'}}>
                        <Navbar onSearchBox={this.onSearch}/>
                        <div className="wrapper">
                            <div > 
                                <SideBar courses={this.state.courses} />
                            </div>
                            <Switch>
                                <Route exact path="/">
                                    <Homepage />
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
                            </Switch>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;