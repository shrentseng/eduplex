import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";
import CourseContext from "../../context/course/courseContext";
import UserContext from "../../context/user/userContext";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    course: {
        display: "flex",
        height: "3em",
        width: "44em",
        margin: "0.5em",
        alignItems: "center",
    },
    join: {
        height: "3.5em",
        width: "10em",
        margin: "0.5em",
    },
}));

const Course = (props) => {
    const [join, setJoin] = React.useState("Join");
    const [color, setColor] = React.useState("#0088D7");
    const classes = useStyles();
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    const handleJoin = () => {
        //let add = true;
        setJoin("Joined");
        setColor("#C4C4C4");
        const courseForDb = {
            userID: userContext.userID,
            courseID: props.courseID,
        };

        const courseForContext = {
            ...props,
            ...courseContext.currentUniversity,
        };

        courseContext.addCourse(courseForDb, courseForContext);
        //add = false;
        // } else {
        //     courseContext.myCourses.map((currentCourse) => {
        //         if (currentCourse.number === course.number) {
        //             add = false;
        //         }
        //     });
        // }
        // if (add) {
        //     setJoin("Joined");
        //     setColor("#C4C4C4");
        //     courseContext.addCourse(course);
        // }
    };

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.course}>
                <Typography className="col-3" style={{ margin: "1em" }}>
                    {props.courseNumber}
                </Typography>
                <Typography style={{ margin: "1em" }}>
                    {props.courseName}
                </Typography>
            </Paper>
            <Button
                className={classes.join}
                style={{
                    backgroundColor: color,
                    "&:hover": { backgroundColor: color },
                }}
                onClick={handleJoin}
            >
                {join}
            </Button>
        </div>
    );
};

export default Course;
