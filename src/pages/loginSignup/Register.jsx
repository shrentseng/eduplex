import React, { useState, useEffect } from "react";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import SignIn from "./SignIn";
import "./Register.css";
import RegisterProvider from "../../context/register/RegisterProvider";

const Register = () => {
    const [regStep, setRegStep] = useState(1);

    // useEffect(() => {
    //     console.log("reg effect");
    // }, []);

    const onAddStep = () => {
        setRegStep(regStep + 1);
    };

    const onMinusStep = () => {
        setRegStep(regStep - 1);
    };

    let regForm;
    switch (regStep) {
        case 1:
            regForm = <Register1 addStep={onAddStep} />;
            break;

        case 2:
            regForm = <Register2 addStep={onAddStep} minusStep={onMinusStep} />;
            break;

        case 3:
            regForm = <Register3 minusStep={onMinusStep} />;
            break;

        default:
            regForm = <Register1 addStep={onAddStep} minusStep={onMinusStep} />;
    }
    return (
        <RegisterProvider>
            <div className="form-center">
                <div>
                    <h1 className="text-center">Create Account</h1>
                    {regForm}
                </div>
            </div>
        </RegisterProvider>
    );
};

export default Register;
