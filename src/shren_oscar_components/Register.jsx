import React, { Component } from 'react';
import Register1 from './Register1';
import Register2 from './Register2';
import Register3 from './Register3';
import './Register.css';

class Register extends Component {

    constructor() {
        super();
        this.state = {regStep: 1}; // 1: register step 1 page, 2: register step 2 page, total 4 steps 
        
    }

    onSetStep = () => {
        this.setState((state) => ({
            regStep: state.regStep + 1
        }));
    }

    render() {
        let regForm;
        switch (this.state.regStep) {
            case 1: regForm = <Register1 setStep={this.onSetStep}/>
            break;
            
            case 2: regForm = <Register2 setStep={this.onSetStep}/>
            break;

            case 3: regForm = <Register3 setStep={this.onSetStep}/>
            break;

            default: regForm = <Register1 setStep={this.onSetStep}/>
        }
        return (
            <div className="form-center">
                <div>
                    <h1 className="text-center">Create Account</h1>
                    {regForm}
                </div>
            </div>
        );
    }
}

export default Register;