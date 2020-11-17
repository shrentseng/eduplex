import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NewsfeedIcon from "../../assets/newsfeed.svg";
import MyCoursesIcon from "../../assets/myCourses.svg";
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

function SideBar({ courses }) {
    const classes = useStyles();
    //fecth courses data
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    useEffect(() => {
        courseContext.getMyCourses(userContext.userID);
    }, []);

    const courseList = (myCourses) => {
        if (myCourses.length === 0) {
            return null;
        } else {
            return myCourses.map((university, i) => {
                let length = university.Courses.length;
                let course = university.Courses
                for (let i = 0; i < length; ++i) {
                    return (
                        <div key={i}>
                            <NavLink
                                activeClassName={classes.active}
                                to={`/Courses/${course[i].CourseNumber}`}
                            >
                                <ListItem
                                    button
                                    className={`${classes.nested} ${classes.button}`}
                                >
                                    <Typography variant="h3">
                                        {course[i].CourseNumber}
                                    </Typography>
                                </ListItem>
                            </NavLink>
                        </div>
                    );
                }
            });
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <List className={classes.list}>
                <NavLink to="/" exact activeClassName={classes.active}>
                    <ListItem button className={classes.button}>
                        <ListItemIcon className={classes.icon}>
                            <img src={NewsfeedIcon} alt="" height="100%" />
                        </ListItemIcon>
                        <Typography variant="h2">Newsfeed</Typography>
                    </ListItem>
                </NavLink>
                <NavLink to="/MyCourses" exact activeClassName={classes.active}>
                    <ListItem button className={classes.button}>
                        <ListItemIcon className={classes.icon}>
                            <img src={MyCoursesIcon} alt="" height="100%" />
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
