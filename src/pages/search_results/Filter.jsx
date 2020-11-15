import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { MenuItem, Select, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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

const CurrentUniversity = forwardRef((props, universitySelectedRef) => {
    const classes = useStyles();
    const [university, setUniversity] = useState();
    // useEffect(() => {
    //     universitySelectedRef.current = university;
    // }, [university]);


    useImperativeHandle(universitySelectedRef, () => ({
        university
    }));

    const handleSelectChange = (event) => {
        event.preventDefault();
        setUniversity(event.target.value);
        console.log(university)
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
                    value={university}
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
});

export default CurrentUniversity;
