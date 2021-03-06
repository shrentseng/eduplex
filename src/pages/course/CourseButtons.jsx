import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { buttonActiveFont } from "../../common/styles";

const useStyles = makeStyles({
    buttons: {
        height: "2.25rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "1rem",
    },
    select: {
        height: "2.25rem",
        backgroundColor: "#FFFFFF",
        "& .css-yk16xz-control": {
            minHeight: "0px",
            height: "2.25rem",
            borderColor: "#E5E5E5",
        },
        "& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue": {
            fontFamily: "Raleway",
            color: "#111111",
            fontSize: "1rem",
            fontWeight: "400",
        },
        "& .css-1pahdxg-control, & .css-1pahdxg-control:hover": {
            borderColor: "#E5E5E5",
            boxShadow: "none",
        },
        "&:focus": {
            outline: "none",
        },
    },
    selectActive: {
        "& .css-yk16xz-control": {
            backgroundColor: "#71BA75",
        },
        "& .css-1pahdxg-control, & .css-1pahdxg-control:hover": {
            borderColor: "#E5E5E5",
            backgroundColor: "#71BA75",
            boxShadow: "none",
        },
        "& .css-1uccc91-singleValue": buttonActiveFont,
    },
    link: {
        textDecoration: "none",
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none",
        },
    },
    active: {
        "& button": {
            backgroundColor: "#71BA75",
            "&:active, &:hover, &.active:hover": {
                backgroundColor: "#71BA75",
            },
        },
        "& h3": buttonActiveFont,
    },
});

const StyledButton = withStyles({
    root: {
        height: "2.25rem",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E5",
        width: "98%",
        "&:focus": {
            outline: "none",
        },
        textTransform: "none",
    },
})(Button);

const options = [
    { value: "0", label: "Lecture Notes" },
    { value: "1", label: "Assignments" },
    { value: "2", label: "Past Exams" },
    { value: "3", label: "Essays" },
    { value: "4", label: "Others" },
];

function CourseButtons({ courseNumber }) {
    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();
    const [selectClassName, setSelectClassName] = useState(null);
    const courseURL = courseNumber.replace(/\s+/g, "");

    useEffect(() => {
        if (location.pathname === `/Courses/${courseURL}/Documents`) {
            setSelectClassName(classes.selectActive);
        } else {
            setSelectClassName(null);
        }
    }, [history, location, classes.selectActive]);

    const handleSelectChange = (option) => {
        history.push(`/Courses/${courseURL}/Documents`);
    };

    return (
        <div className={classes.buttons}>
            <NavLink
                exact
                to={`/Courses/${courseURL}`}
                className={classes.link}
                activeClassName={classes.active}
            >
                <StyledButton disableElevation variant="contained" size="small">
                    <Typography variant="h3">Discussion</Typography>
                </StyledButton>
            </NavLink>

            <Select
                className={`${classes.select} ${selectClassName}`}
                onChange={(value) => handleSelectChange(value)}
                options={options}
                placeholder="Documents"
            />
        </div>
    );
}

export default CourseButtons;
