import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CourseCard from "./CourseCard";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import PlusIcon from "../../assets/plus.png";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles(() => ({
    root: {
        background: "#F7F7F7",
        "& button": {
            outline: "none",
        },
    },
    card: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: "11.25rem",
        height: "11.25rem",
        border: "2px solid #C4C4C4",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    placeholder: {
        height: 73,
    },
}));

const CourseList = ({ courses }) => {
    const classes = useStyles();
    const courseContext = useContext(CourseContext);

    const onDeleteCourse = (index) => {
        /*let temp = [...courses];
        temp.splice(index, 1);
        setCourses(temp);*/
    };

    const cardComponent = courses.map((course, i) => {
        return (
            <Grid item key={course.CourseID}>
                <CourseCard
                    CourseName={course.CourseName}
                    CourseNumber={course.CourseNumber}
                    deleteCourse={onDeleteCourse}
                    id={course.CourseID}
                />
            </Grid>
        );
    });

    return (
        <div className={classes.root}>
            <Grid
                container
                width="100%"
                zeroMinWidth
                spacing={9}
                wrap="wrap"
                direction="row"
            >
                {cardComponent}
                <Grid item>
                    <Link to="/AddCourse">
                        <CardActionArea>
                            <Card className={classes.card}>
                                <div className={classes.placeholder}></div>
                                <img src={PlusIcon} alt="" height="35px" />
                            </Card>
                        </CardActionArea>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default CourseList;
