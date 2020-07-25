import React from 'react';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import './Register.css';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = (values) => {
    console.log('Form data', values)
}

const validate = (values) => {
    const errors = {};
    var emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$", "i");
    var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!passwordRegex.test(values.password)) {
        errors.password = 'Password must contain at least 1 lowercase, uppercase and numeric character';
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password does not match!'
    }
    
    return errors;
}

const Register1 = ({setStep}) => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const submitForm = () => {
        setStep();
        formik.handleSubmit();
    }

    return (
        <form onSubmit={ submitForm }>
            <div className="form-group row" style={{width: '625px'}}>
                <div className="col-6">
                    <label htmlFor='' style={{display: 'inline-block', marginBottom: '0.5rem'}}>First Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='error'>{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <label style={{display: 'inline-block', marginBottom: '0.5rem'}}>Last Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='error'>{formik.errors.lastName}</div>
                    ) : null}
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        name="email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Password" 
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className='error'>{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>
            </div>
            <div className="form-group row button-group">
                <div className="col">
                    <button className="btn button-continue" type="submit" name="submit">Continue</button>
                </div>
                <div className="col">
                    <Link to="/SignIn">
                        <button className="btn float-right button-logIn" >Have an account? Log In</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Register1;