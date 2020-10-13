import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Register from './shren_oscar_components/Register';
import Navbar from './shared_components/Navbar';
import SignIn from './shren_oscar_components/SignIn';
import Homepage from './shren_oscar_components/Homepage';
import SideBar from './shared_components/SideBar';
import Course from './course_containers/Course';
import Profile from './profile_containers/Profile';
import Search from './search_containers/Search';
import MyCourse from './my_course_containers/MyCourse';
import EduPoints from '/vanessa_components/EduPoints';
import './assets/bootstrap.min.css'
import './App.css';
import EditProfile from './shren_oscar_components/EditProfile';


class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <div style={{background: '#F7F7F7'}}>
                    <Navbar/>
                    <div className="wrapper">
                        <div> 
                            <SideBar/>
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
                            <Route path="/EduPoints">
                                <EduPoints />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;