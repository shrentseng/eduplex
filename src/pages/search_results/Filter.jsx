import React, { useContext } from "react";
import { MenuItem, Select, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CourseContext from "../../context/course/courseContext";

const StyledSelect = withStyles({
    root: {
        width: "18rem",
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
    { university: "Unversity of California Berkeley", universityID: 1 },
    { university: "Unversity of California Los Angeles", universityID: 0 },
    { university: "Unversity of California Irvine", universityID: 4 },
];

const Filter = () => {
    const classes = useStyles();
    const courseContext = useContext(CourseContext);

    // const [currentUniversity, setCurrentUniversity] = useState(
    //     courseContext.currentUniversity
    // );


    const handleSelectChange = (event) => {
        courseContext.dispatch({
            type: "SET_CURRENT_UNIVERSITY",
            payload: event.target.value,
        });
        //setCurrentUniversity(event.target.value);
    };

    return (
        <div>
            <div className={classes.university}>
                <Typography className={classes.currentUni}>
                    Current University:
                </Typography>
                <FormControl>
                    <StyledSelect
                        className={classes.select}
                        variant="outlined"
                        //defaultValue={courseContext.currentUniversity}
                        //value={courseContext.currentUniversity}
                        onChange={handleSelectChange}
                    >
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option.university}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>
            </div>
        </div>
    );
};

export default Filter;
