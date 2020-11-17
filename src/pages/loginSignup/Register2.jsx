import React, { useContext } from "react";
import "./Register.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import RegisterContext from "../../context/register/registerContext";

const MySelect = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#569859",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused Select": {
                borderColor: "#569859",
            },
        },
        backgroundColor: "#FFFFFF",
    },
})(Select);

const validate = (values) => {
    const errors = {};
    if (!values.university) {
        errors.university = "Required";
    }
    if (!values.major) {
        errors.major = "Required";
    }
    return errors;
};

const Register2 = ({ addStep, minusStep }) => {
    const registerContext = useContext(RegisterContext);
    const formik = useFormik({
        initialValues: {
            university: "",
            major: "",
            minor: "",
        },
        validate,
        onSubmit: (values) => {
            registerContext.dispatch({
                type: "SET_REGISTER2",
                payload: values,
            });
            addStep();
        },
    });
    // const [university, setUniversity] = React.useState("None");
    // const [major, setMajor] = React.useState("None");
    // const [minor, setMinor] = React.useState("None");

    const handleUniversity = (event) => {
        //setUniversity(event.target.value);
        formik.handleChange(event);
    };

    const handleMajor = (event) => {
        //setMajor(event.target.value);
        formik.handleChange(event);
    };

    const handleMinor = (event) => {
        //setMinor(event.target.value);
        formik.handleChange(event);
    };

    return (
        <form style={{ width: "625px" }} onSubmit={formik.handleSubmit}>
            <FormControl
                variant="outlined"
                style={{ width: "100%", marginBottom: "1em" }}
            >
                <InputLabel>Name of University</InputLabel>
                <MySelect
                    label="Name of University"
                    onChange={handleUniversity}
                    onBlur={formik.handleBlur}
                    //value={formik.university}
                    name="university"
                >
                    <MenuItem value={1} key={0}>
                        UCLA
                    </MenuItem>
                    <MenuItem value={2} key={1}>
                        Berkeley
                    </MenuItem>
                    <MenuItem value={3} key={2}>
                        USC
                    </MenuItem>
                </MySelect>
                {formik.touched.university && formik.errors.university ? (
                    <div className="error">{formik.errors.university}</div>
                ) : null}
            </FormControl>
            <FormControl className="col-5" variant="outlined">
                <InputLabel>Major</InputLabel>
                <MySelect
                    label="Major"
                    onChange={handleMajor}
                    onBlur={formik.handleBlur}
                    //value={major}
                    name="major"
                >
                    <MenuItem value={10} key={1}>
                        Math
                    </MenuItem>
                    <MenuItem value={20} key={2}>
                        Biology
                    </MenuItem>
                    <MenuItem value={30} key={3}>
                        Literature
                    </MenuItem>
                </MySelect>
                {formik.touched.major && formik.errors.major ? (
                    <div className="error">{formik.errors.major}</div>
                ) : null}
            </FormControl>
            <FormControl
                className="col-6"
                variant="outlined"
                style={{ marginLeft: "3.2em" }}
            >
                <InputLabel>Minor (Optional)</InputLabel>
                <MySelect
                    label="Minor (Optional)"
                    onChange={handleMinor}
                    //value={minor}
                    name="minor"
                >
                    <MenuItem value={0} key={0}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1} key={1}>
                        Stats
                    </MenuItem>
                    <MenuItem value={2} key={2}>
                        Math
                    </MenuItem>
                    <MenuItem value={3} key={3}>
                        Music
                    </MenuItem>
                </MySelect>
            </FormControl>
            <div className=" row button-group">
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
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Register2;
