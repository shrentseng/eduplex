import React from 'react';
import './Register.css';

const Register3 = ({setStep}) => {
    return (
        <form>
            <div className="form-group row" style={{width: '625px'}}>
                <div className="col">
                    <label>Current Courses</label>
                    <input className="form-control"/>
                </div>
            </div>
            <div className="form-group row button-group">
                <div className="col">
                    <button className="btn button-continue" type="submit" onClick={setStep}>Continue</button>
                </div>
                <div className="col">
                    <button className="btn float-right button-logIn" type="submit">Have an account? Log In</button>                    
                </div>
            </div>
        </form>
    )
}

export default Register3;