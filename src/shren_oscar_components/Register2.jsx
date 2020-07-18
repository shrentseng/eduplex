import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css';

const Register2 = ({setStep}) => {
    return (
        <form>
            <div className="form-group row" style={{width: '625px'}}>
                <div className="col">
                    <label>Name of University</label>
                    <select className="custom-select" >
                        <option defaultValue> Choose...</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-6">
                    <label style={{display: 'inline-block', marginBottom: '0.5rem'}}>Major</label>
                    <select className="custom-select" >
                        <option defaultValue> Choose...</option>
                    </select>
                </div>
                <div className="col-6">
                    <label style={{display: 'inline-block', marginBottom: '0.5rem'}}>Minor (Optional)</label>
                    <select className="custom-select">
                        <option defaultValue> Choose...</option>
                    </select>
                </div>
            </div>
            <div className="form-group row button-group">
                <div className="col">
                    <button className="btn button-continue" type="submit" onClick={setStep}>Continue</button>
                </div>
                <div className="col">
                    <Link to="/SignIn">
                        <button className="btn float-right button-logIn" type="submit">Have an account? Log In</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Register2;