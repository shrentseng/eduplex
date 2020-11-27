import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NewsfeedIcon from "../../assets/newsfeed.svg";
import MyCoursesIcon from "../../assets/myCourses.svg";
import NewsfeedIconActive from "../../assets/newsfeedActive.svg";
import MyCoursesIconActive from "../../assets/myCoursesActive.svg";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles({
    root: {
        width: "14rem",
        position: "fixed",
        top: "5rem",
    },
    list: {
        "& a": {
            textDecoration: "none",
            "&:focus, &:hover, &:visited, &:link, &:active": {
                textDecoration: "none",
            },
        },
    },
    active: {
        "& div": {
            backgroundColor: "#71BA75",
            borderRadius: "0px 25px 25px 0px",
            "&:active, &:hover, &.active:hover": {
                backgroundColor: "#71BA75",
            },
        },
        "& h2, & h3": {
            fontFamily: "Raleway",
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: " 1.1rem",
        },
    },
    nested: {
        paddingLeft: "4.5rem",
    },
    button: {
        transition: "none",
        "&:active, &:hover, &.active:hover": {
            backgroundColor: "#f7f7f7",
            borderRadius: "0px 25px 25px 0px",
        },
    },
    icon: {
        minWidth: 0,
        marginRight: "1rem",
    },
});

const SideBar  = () => {
    const classes = useStyles();
    const [newsfeedIcon, setNewsfeedIcon] = useState(NewsfeedIcon);
    const [courseIcon, setCourseIcon] = useState(MyCoursesIcon);
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    useEffect(() => {
        console.log("sidebar")
        courseContext.getMyCourses(userContext.userID);
    }, []);

    const courseList = (myCourses) => {
        console.log(myCourses)
        if (myCourses.length === 0) {
            return null;
        } else {
            return myCourses.map((university, i) => {
                return university.Courses.map((course, i) => {
                    const courseURL = course.CourseNumber.replace(/\s+/g, '')
                    return (
                        <div key={i}>
                            <NavLink
                                activeClassName={classes.active}
                                to={`/Courses/${courseURL}`}
                            >
                                <ListItem
                                    button
                                    className={`${classes.nested} ${classes.button}`}
                                >
                                    <Typography variant="h3">
                                        {course.CourseNumber}
                                    </Typography>
                                </ListItem>
                            </NavLink>
                        </div>
                    );
                });
            });
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <List className={classes.list}>
                <NavLink to="/" exact activeClassName={classes.active}
                    isActive={(match) => {
                        match ? 
                        setNewsfeedIcon(NewsfeedIconActive) :
                        setNewsfeedIcon(NewsfeedIcon)
                        return match
                    }}
                >
                    <ListItem button className={classes.button}>
                        <ListItemIcon className={classes.icon}>
                            <img src={newsfeedIcon} alt="" height="100%" />
                        </ListItemIcon>
                        <Typography variant="h2">Newsfeed</Typography>
                    </ListItem>
                </NavLink>
                <NavLink to="/MyCourses" exact activeClassName={classes.active}
                    isActive={(match) => {
                        match ? 
                        setCourseIcon(MyCoursesIconActive) :
                        setCourseIcon(MyCoursesIcon)
                        return match
                    }}
                >
                    <ListItem button className={classes.button}>
                        <ListItemIcon className={classes.icon}>
                            <img src={courseIcon} alt="" height="100%" />
                        </ListItemIcon>
                        <Typography variant="h2">My Courses</Typography>
                    </ListItem>
                </NavLink>
                <List disablePadding>
                    {courseList(courseContext.myCourses)}
                </List>
            </List>
        </div>
    );
}

export default SideBar;
