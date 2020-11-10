import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { withStyles } from "@material-ui/core/styles";
import "./Register.css";
import TextField from "@material-ui/core/TextField";
import RegisterContext from "../../context/register/registerContext";

const MyTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#569859",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#569859",
            },
        },
        backgroundColor: "#FFFFFF",
        marginTop: "1em",
        marginBottom: "1em",
    },
})(TextField);

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const validate = (values) => {
    const errors = {};
    let emailRegex = new RegExp(
        "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
        "i"
    );
    let passwordRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (!passwordRegex.test(values.password)) {
        errors.password =
            "Password must contains at leats 8 characters, at least 1 lowercase, uppercase and numeric character";
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords did not match";
    }
    return errors;
};

const Register1 = ({ addStep }) => {
    const registerContext = useContext(RegisterContext);
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            registerContext.dispatch({
                type: "SET_REGISTER1",
                payload: values,
            });
            addStep();
        },
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="row" style={{ width: "625px" }}>
                <div className="col-6">
                    <MyTextField
                        variant="outlined"
                        label="First Name"
                        name="firstName"
                        style={{ width: "100%" }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <MyTextField
                        variant="outlined"
                        label="Last Name"
                        name="lastName"
                        style={{ width: "100%" }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MyTextField
                        variant="outlined"
                        label="Email Address"
                        name="email"
                        style={{ width: "100%" }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MyTextField
                        variant="outlined"
                        type="password"
                        label="Password"
                        name="password"
                        style={{ width: "100%" }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MyTextField
                        variant="outlined"
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        style={{ width: "100%" }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                        <div className="error">
                            {formik.errors.confirmPassword}
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/SignIn">
                        <button className="button-back btn">
                            Return to Log In
                        </button>
                    </Link>
                </div>
                <div className="col">
                    <button
                        className="btn float-right button-continue"
                        type="submit"
                        name="submit"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Register1;
