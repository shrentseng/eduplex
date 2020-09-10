import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './assets/bootstrap.min.css'
import './App.css';
import Register from './shren_oscar_components/Register';
import Navbar from './shared_components/Navbar';
import SignIn from './shren_oscar_components/SignIn';
import Homepage from './shren_oscar_components/Homepage';
import SideBar from './shared_components/SideBar';
import Course from './course_containers/Course';
import Profile from './profile_containers/Profile';
import Search from './search_containers/Search';
import MyCourse from './my_course_containers/MyCourse';
import CourseResults from './search_results/CourseResults'
import EditProfile from './shren_oscar_components/EditProfile';
import DocumentResults from './search_results/DocumentResults'


class App extends Component {
    constructor() {
        super()
        this.state = {
            searchBox: "",
        }
    }

    onSearch = (content) =>
    {
        this.setState(
            {
                searchBox: content,
            }
        )
    }

    render() {
        return (
            <Router>
                <div style={{background: '#E5E5E5'}}>
                    <Navbar onSearchBox={this.onSearch}/>
                    <div className="wrapper">
                        <div > 
                            <SideBar />
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
                            <Route path="/Course">
                                <Course />
                            </Route>
                            <Route path="/Profile">
                                <Profile />
                            </Route>
                            <Route path="/EditProfile">
                                <EditProfile />
                            </Route>
                            <Route path="/Search">
                                <Search />
                            </Route>
                            <Route path="/MyCourse">
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