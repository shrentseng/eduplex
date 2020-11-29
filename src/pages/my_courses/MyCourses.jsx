import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CourseList from "./CourseList";
import Typography from "@material-ui/core/Typography";
import { theme_my_courses } from "../../common/theme";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles(() => ({
    root: {
        margin: "2rem 2rem 0rem 4rem",
    },
    title: {
        fontSize: "26px",
        background: "#F7F7F7",
        marginTop: "24px",
        marginBottom: "24px",
    },
    college: {
        marginBottom: "2rem",
    },
}));

function MyCourses() {
    const classes = useStyles();
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    const [universitiesName, setUniversitiesName] = useState({});
    //const universities = {};
    useEffect(() => {
        
        let newUniversitiesName = {};
        console.log("mycourses");
        for (let course of courseContext.myCourses) {
            let university = course.universityName;
            if (university in newUniversitiesName) {
                newUniversitiesName[university].courses.push(course);
            } else {
                newUniversitiesName[university] = {
                    courses: [course],
                };
            }
        }
        setUniversitiesName(newUniversitiesName);
    }, [courseContext.myCourses]);

    const renderColleges = () => {
        if (universitiesName === undefined || universitiesName === null) {
            return;
        }
        console.log('unsorted', Object.keys(universitiesName))
        console.log('sort', Object.keys(universitiesName).sort())
        return Object.keys(universitiesName).sort().map((universityName) => {
            return (
                <div className={classes.college}>
                    <Typography variant="h3">{universityName}</Typography>
                    <CourseList courses={universitiesName[universityName].courses} />
                </div>
            );
        });
    };

    return (
        <ThemeProvider theme={theme_my_courses}>
            <div className={classes.root}>
                <Typography variant="h2">My Courses</Typography>
                {renderColleges()}
            </div>
        </ThemeProvider>
    );
}

export default MyCourses;
