import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import UserContext from "./../../context/user/userContext";
import RegisterContext from "./../../context/register/registerContext";

const MySelect = withStyles({
    root: {
        backgroundColor: "#FFFFFF",
    },
    marginTop: "1em",
})(Select);

const Register3 = ({ minusStep }) => {
    const userContext = useContext(UserContext);
    const registerContext = useContext(RegisterContext);
    let history = useHistory();
    const [course, setCourse] = useState(0);

    const handleCourse = (event) => {
        setCourse(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerContext.dispatch({ type: "SET_REGISTER3", payload: course });
        const ok = await registerContext.createAccount(course);
        if (ok) {
            history.push("/Homepage");
        } else {
            alert("Account creation failed");
        }
    };

    return (
        <form style={{ width: "625px" }}>
            <FormControl
                variant="outlined"
                style={{ width: "100%", marginBottom: "1em" }}
            >
                <InputLabel>Current Courses</InputLabel>
                <MySelect
                    label="Name of University"
                    onChange={handleCourse}
                    value={course}
                >
                    <MenuItem value={0}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>CS 121</MenuItem>
                    <MenuItem value={2}>CHEM 101</MenuItem>
                    <MenuItem value={2}>SCAND 50</MenuItem>
                </MySelect>
            </FormControl>
            <div className="form-group row button-group">
                <div className="col">
                    <button
                        className="btn button-back"
                        type="submit"
                        onClick={minusStep}
                    >
                        Back
                    </button>
                </div>
                <div className="col">
                    <button
                        className="btn float-right button-continue"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Complete
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Register3;
