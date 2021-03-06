import React, { useState, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Select from "react-select";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import exclude from "../../assets/exclude.svg";
import anonymous from "../../assets/anonymous.svg";
import FeedsContext from "../../context/feed/feedsContext";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "1em 0",
    },
    paper: {
        padding: "1em",
    },
    courseDiv: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    select: {
        height: "2.25rem",
        width: "12rem",
        marginLeft: "0.5rem",
        backgroundColor: "#FFFFFF",
        "& .css-yk16xz-control": {
            minHeight: "0px",
            height: "2.25rem",
            borderColor: "#E5E5E5",
        },
        "& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue": {
            fontFamily: "Roboto",
            color: "#111111",
            fontSize: "1rem",
            fontWeight: "400",
        },
        "& .css-1pahdxg-control, & .css-1pahdxg-control:hover": {
            borderColor: "#E5E5E5",
            boxShadow: "none",
        },
    },
    post: {
        marginTop: "1em",
        height: "6em",
        width: "100%",
        backgroundColor: "#f7f7f7",
        outlineWidth: "0em",
        border: "none",
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        width: "98%",
        marginTop: "-1.6em",
    },
    anonymous: {
        margin: "0.2em",
        width: "32px",
        height: "32px",
        backgroundColor: "white",
    },
    exclude: {
        margin: "0.2em",
        width: "32px",
        height: "32px",
    },
}));

const options = [
    { value: 1, label: "Course 1" },
    { value: 2, label: "Course 2" },
    { value: 3, label: "Course 3" },
];

const Post = () => {
    const userContext = useContext(UserContext);
    const feedsContext = useContext(FeedsContext);
    const courseContext = useContext(CourseContext);

    const classes = useStyles();
    const [content, setContent] = useState("");
    const [courseID, setCourseID] = useState(-1);
    const [courseName, setCourseName] = useState("");

    const onCreatePost = () => {
        console.log(courseID)
        console.log(courseName)
        if (content && courseName) {
            feedsContext.addFeed({
                postID: -1,
                message: content,
                courseID: courseID,
                userID: userContext.userID,
                firstName: "Shren",
                lastName: "Tseng",
                courseName: courseName,
                childComments: [],
                likes: 0,
                unlikes: 0,
            });
            setContent("");
            setCourseID(-1);
            setCourseName("")
            alert("Submit Successful");
        } else {
            alert(
                "Post cannot be empty!!\nPlease choose a course you want to post!!"
            );
        }
    };

    const handleSelectChange = (event) => {
        setCourseName(event.courseName)
        setCourseID(event.courseID);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <div className={classes.courseDiv}>
                    <Select
                        className={classes.select}
                        classNamePrefix="react-select"
                        options={courseContext.myCourses}
                        getOptionLabel={option => option.courseNumber}
                        getOptionValue={option => option.courseID}
                        onChange={handleSelectChange}
                    ></Select>
                </div>
                <div>
                    <textarea
                        className={classes.post}
                        type="text"
                        placeholder="Start a discussion... "
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <div className={classes.buttons}>
                    <Avatar className={classes.anonymous} src={anonymous} />
                    <Avatar
                        className={classes.exclude}
                        src={exclude}
                        onClick={() => onCreatePost()}
                    />
                </div>
            </Paper>
        </div>
    );
};

export default Post;
