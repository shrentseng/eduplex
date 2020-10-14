import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import RewardIcon from '../../assets/reward-icon.svg';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledPaper = withStyles({
    root: {
        width: '100%',
        padding: '1em',
        marginBottom: '1em',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
        '& div > b': {
            marginBottom: '1em',
        },
    },
})(Paper);

const StyledAccordion = withStyles({
    root: {
        width: '100%',
        paddingLeft: '1em',
        paddingRight: '1em',
        marginBottom: '1em',
        display: 'flex',
        borderRadius: '4px',
        flexDirection: 'column',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
        '&:before': {
            display: 'none',
        },
    },
    
})(Accordion)

const StyledButton = withStyles({
    root: {
        background: '#E5E7E5',
        width: '4.5em',
        height: '2em',
        marginLeft: 'auto',
    }
})(Button);

const StyledTextField = withStyles({
    root: {
        marginTop: '0.8em',
        marginBottom: '0.5em',
        '& div:first-child': {
            height: '2.2em',
        }
    }
})(TextField);

const useStyles = makeStyles(() => ({
    root: {
        '& button': {
            outline: 'none',
        },
    },
    avatar: {
        margin: '0em',
        marginTop: '2em',
        marginBottom: '2em',
        borderRadius: '50%',
        maxWidth: '10em',
        width: '100%',
        height: 'auto'
    },
    avatarEdit: {
        background: '#E5E7E5',
        width: '4.5em',
        height: '2em',
        alignSelf: 'flex-end',
    },
    backToProfile: {
        width: '15em',
        height: '2em',
        background: '#FFFFFF',
        border: '1px solid #E5E5E5',
    },
    formikInput: {
        width: '25em',
        marginTop: '1.5em',
    },
    formikError: {
        color: '#ff0000',
    },
    personalInformation: {
        display: 'flex',
        alignItems: 'center', 
        marginTop: '3em',
    },
    saveCancelButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& button': {
            margin: '1em',
            height: '2.4em',
            width: '10em',
        },
    },
    cancel: {
        color: '#5A5A5A',
        backgroundColor: '#E5E5E5',
    },
    save: {
        color: '#FFFFFF',
        backgroundColor: '#0088D7',
    }
}));

const EditProfile = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('lspss94076@gmail.com');

    const [university, setUniversity] = useState('UCLA');
    const [tempUniversity, setTempUniversity] = useState(university);
    const [major, setMajor] = useState('Math');
    const [tempMajor, setTempMajor] = useState(major);
    const [minor, setMinor] = useState('Comp');
    const [tempMinor, setTempMinor] =useState(minor);
    const [yearAttended, setYearAttended] = useState(1998);
    const [tempYearAttended, setTempYearAttended] = useState(yearAttended);
    const [isEditing, setIsEditing] = useState(false);
    const [isEmailAccExpanded, setIsEmailAccExpanded] = useState(false);
    const [isPasswordAccExpanded, setIsPasswordAccExpanded] = useState(false);

    const submitPersonalInformation = () => {
        if (tempUniversity) 
            setUniversity(tempUniversity)
        if (tempMajor)
            setMajor(tempMajor)
        if (tempMinor)
            setMinor(tempMinor)
        if (tempYearAttended)
            setYearAttended(tempYearAttended)
        setIsEditing(!isEditing)
    }

    const cancelPersonalInformation = () => {
        setTempUniversity(university)
        setTempMajor(major)
        setTempMinor(minor)
        setTempYearAttended(yearAttended)
        setIsEditing(!isEditing)
    }

    const cancelEmail = () => {
        setIsEmailAccExpanded(false)
        formikEmail.values.email = ''
        formikEmail.errors.email = false
    }

    const submitEmail = () => {
        fetch('/profile/edit', {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    userID: 1,
                    Email: formikEmail.values.email,
                })
            }
        ).then(() => {
            //handle error
        })

        setEmail(formikEmail.values.email)
        cancelEmail()
    }

    const cancelPassword = () => {
        setIsPasswordAccExpanded(false)
        formikPassword.values.old = ''
        formikPassword.values.new = ''
        formikPassword.values.confirm = ''
        formikPassword.touched.old = false
        formikPassword.errors.old = false
        formikPassword.touched.new = false
        formikPassword.errors.new = false
        formikPassword.touched.confirm = false
        formikPassword.errors.confirm = false
    }

    const submitPassword = () => {
        cancelPassword()
        //update password
    }

    const formikEmail = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            //console.log('Form data', values)
        },
        validate: values => {
            let errors = {}
            var emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$", "i");
            if (!values.email) {
                errors.email = 'Required'
            } else if (!emailRegex.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors
        }
    })

    const formikPassword = useFormik({
        initialValues: {
            old: '',
            new: '',
            confirm: '',
        },
        onSubmit: values => {
            //console.log('Form data', values)
        },
        validate: values => {
            let errors = {}
            let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")

            if (!values.old) {
                errors.old = 'Required'
            }

            if (!values.new) {
                errors.new = 'Required'
            } else if (!passwordRegex.test(values.new)) {
                errors.new = 'Password must contain at least 1 lowercase, uppercase and numeric character'
            }

            if (!values.confirm) {
                errors.confirm = 'Required'
            } else if (values.new !== values.confirm) {
                errors.confirm = 'Passwords did not match'
            }
            return errors
        }
    })

    return (
        <div className={classes.root}>
            <div style={{display: 'flex', marginBottom: '20px',}}>
                <img src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" alt="Avatar" className={classes.avatar}/>
                
                <Button className={classes.avatarEdit}>
                    Edit
                </Button>
                
                <Link to="/Profile" style={{textDecoration: 'none', marginLeft: 'auto', marginTop: '3em'}}>
                    <Button

                        className={classes.backToProfile}
                        disableElevation
                        variant='contained'
                        startIcon = {
                            <SettingsIcon style={{ color: '#5A5A5A'}}/>
                        }
                    >
                        <span style={{color: '#5A5A5A'}}>Back to Profile</span>
                    </Button>
                </Link>
            </div>

            <div>
                <h1>Account</h1>
                <StyledAccordion expanded={isEmailAccExpanded}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}  style={{padding: '0px'}} onClick={() => setIsEmailAccExpanded(!isEmailAccExpanded)}>
                        <b>Email Address</b><span style={{paddingLeft: '20px'}} />{email}
                        <StyledButton>Edit</StyledButton>
                    </AccordionSummary>
                    
                    <AccordionDetails style={{paddingTop: '0px', paddingBottom: '0px'}}>
                        <form>
                            <TextField
                                name="email"
                                label="New Email"
                                type="email"
                                placeholder="New Email"
                                variant="outlined"
                                onChange={formikEmail.handleChange}
                                value={formikEmail.values.email}
                                className={classes.formikInput}
                                size="small"
                                error={formikEmail.errors.email}
                            />
                            {formikEmail.errors.email ? <div className={classes.formikError}>{formikEmail.errors.email}</div> : null}
                        </form>
                    </AccordionDetails>
                        
                    <AccordionActions style={{paddingBottom: '2em'}}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            className={classes.cancel}
                            onClick={cancelEmail}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.save}
                            startIcon={<SaveIcon />}
                            onClick={submitEmail}
                            disabled={!(formikEmail.isValid && formikEmail.dirty)}
                        >
                            Save
                        </Button>
                    </AccordionActions>
                </StyledAccordion>

                <StyledAccordion expanded={isPasswordAccExpanded}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}  style={{padding: '0px'}} onClick={() => setIsPasswordAccExpanded(!isPasswordAccExpanded)}>
                        <b>Change Password</b>
                    </AccordionSummary>
                    
                    <AccordionDetails style={{paddingTop: '0px', paddingBottom: '0px'}}>
                        <form onSubmit={formikPassword.handleSubmit}>
                            <div>
                                <TextField
                                    name="old"
                                    label="Old Password"
                                    type="password"
                                    placeholder="Old Password"
                                    variant="outlined"
                                    onChange={formikPassword.handleChange}
                                    onBlur={formikPassword.handleBlur}
                                    value={formikPassword.values.old}
                                    className={classes.formikInput}
                                    size="small"
                                    error={formikPassword.touched.old && formikPassword.errors.old}
                                />
                                {formikPassword.touched.old && formikPassword.errors.old ? (
                                    <div className={classes.formikError}>{formikPassword.errors.old}</div>  
                                ) : <div></div>}
                            </div>
                            <div>
                                <TextField
                                    name="new"
                                    label="New Password"
                                    type="password"
                                    placeholder="New Password"
                                    variant="outlined"
                                    onChange={formikPassword.handleChange}
                                    onBlur={formikPassword.handleBlur}
                                    value={formikPassword.values.new}
                                    className={classes.formikInput}
                                    size="small"
                                    error={formikPassword.touched.new && formikPassword.errors.new}
                                />
                                {formikPassword.touched.new && formikPassword.errors.new ? (
                                    <div className={classes.formikError}>{formikPassword.errors.new}</div> 
                                ) : <div></div>}
                            </div>
                            <div>
                                <TextField
                                    name="confirm"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm Password"
                                    variant="outlined"
                                    onChange={formikPassword.handleChange}
                                    onBlur={formikPassword.handleBlur}
                                    value={formikPassword.values.confirm}
                                    className={classes.formikInput}
                                    size="small"
                                    error={formikPassword.touched.confirm && formikPassword.errors.confirm}
                                />
                                {formikPassword.touched.confirm && formikPassword.errors.confirm ? (
                                    <div className={classes.formikError}>{formikPassword.errors.confirm}</div>
                                ) : <div></div>}
                            </div>
                            
                        </form>
                    </AccordionDetails>

                    <AccordionActions style={{paddingBottom: '2em'}}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            className={classes.cancel}
                            onClick={cancelPassword}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.save}
                            startIcon={<SaveIcon />}
                            onClick={submitPassword}
                            disabled={!(formikPassword.isValid && formikPassword.dirty)}
                        >
                            Save
                        </Button>
                    </AccordionActions>
                </StyledAccordion>
            </div>

            <div>
                <div className={classes.personalInformation}>
                    <h1>Personal Information</h1>
                    <StyledButton onClick={() => setIsEditing(true)}>
                        Edit
                    </StyledButton>
                </div>

                <StyledPaper>
                    <div>
                        <b>University</b>
                    </div>
                    {!isEditing ? (
                        <div>{university}</div>
                    ) : (
                        <StyledTextField variant="outlined" value={tempUniversity} onChange={event => setTempUniversity(event.target.value)}/>
                    )}
                </StyledPaper>

                <StyledPaper>
                    <div>
                        <b>Major</b>
                    </div>
                    {!isEditing ? (
                        <div>{major}</div>
                    ) : (
                        <StyledTextField variant="outlined" type="text" value={tempMajor} onChange={event => setTempMajor(event.target.value)}/>
                    )}
                </StyledPaper>

                <StyledPaper>
                    <div>
                        <b>Minor</b>
                    </div>
                    {!isEditing ? (
                        <div>{minor}</div>
                    ) : (
                        <StyledTextField variant="outlined" type="text" value={tempMinor} onChange={event => setTempMinor(event.target.value)}/>
                    )}
                </StyledPaper>

                <StyledPaper>
                    <div>
                        <b>Year Attended</b>
                    </div>
                    {!isEditing ? (
                        <div>{yearAttended}</div>
                    ) : (
                        <StyledTextField variant="outlined" type="number" value={tempYearAttended} onChange={event => setTempYearAttended(event.target.value)}/>
                    )}
                </StyledPaper>
            </div>
            {!isEditing ? (null) : 
            (
                <div className={classes.saveCancelButtons}>
                    <Button 
                        variant="contained" 
                        size="large" 
                        className={classes.cancel}
                        onClick={cancelPersonalInformation}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.save}
                        startIcon={<SaveIcon />}
                        onClick={submitPersonalInformation}
                    >
                        Save
                    </Button>
                </div>
            )}
        </div>
    )
}

export default EditProfile;