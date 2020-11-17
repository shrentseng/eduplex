import React, { useState, useEffect, useContext } from "react";
import { MenuItem, Select, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CourseContext from "../../context/course/courseContext";


const StyledSelect = withStyles({
    root: {
        width: "15rem",
        padding: "0.2rem",
        paddingLeft: "1rem",
    },
    select: {
        backgroundColor: "#ffffff",
        "&:focus": {
            backgroundColor: "#ffffff",
        },
    },
})(Select);

const useStyles = makeStyles((theme) => ({
    university: {
        display: "flex",
        flexDirection: "row",
    },
    currentUni: {
        margin: "0.5rem",
        marginBottom: "1rem",
        fontSize: "0.9em",
        color: "#504F4F",
    },
    select: {
        margin: "0.3rem",
        height: "1.7em",
    },
}));

const options = [
    { id: 1, label: "Unversity of California Berkeley" },
    { id: 0, label: "Unversity of California Los Angeles" },
    { id: 4, label: "Unversity of California Irvine" },
];

const CurrentUniversity = (props) => {
    const classes = useStyles();
    const courseContext = useContext(CourseContext)
    const [currentUniversity, setCurrentUniversity] = useState(courseContext.currentUniversity);

    const handleSelectChange = (event) => {
        setCurrentUniversity(event.target.value)
        props.handleUniversity(event.target.value);
    };

    return (
        <div>
            <div className={classes.university}>
                <Typography className={classes.currentUni}>
                    Current University:
                </Typography>
                <StyledSelect
                    className={classes.select}
                    variant="outlined"
                    value = {currentUniversity}
                    onChange={handleSelectChange}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </div>
        </div>
    );
};

export default CurrentUniversity;
