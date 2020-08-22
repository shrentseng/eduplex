import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RewardIcon from '../assets/reward-icon.svg';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

const StyledPaper = withStyles({
    root: {
        width: '100%',
        padding: '1em',
        marginBottom: '1em',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
        '& > div': {
            //display: 'flex',
        },
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

const useStyles = makeStyles(theme => ({
    root: {
        '& div': {
            display: 'flex',
        }
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
        border: '1px solid #C4C4C4',
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

    const [email, setemail] = useState('lspss94076@gmail.com');

    const [university, setUniversity] = useState('UCLA');
    const [tempUniversity, setTempUniversity] = useState(university);


    const [major, setMajor] = useState('Math');
    const [tempMajor, setTempMajor] = useState(major);



    const [minor, setMinor] = useState('Comp');
    const [tempMinor, setTempMinor] =useState(minor);


    const [yearAttended, setYearAttended] = useState(1998);
    const [tempYearAttended, setTempYearAttended] = useState(yearAttended);

    const [isEditing, setIsEditing] = useState(false);

    const submitChanges = () => {
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

    const handleCancel = () => {
        setTempUniversity(university)
        setTempMajor(major)
        setTempMinor(minor)
        setTempYearAttended(yearAttended)
        setIsEditing(!isEditing)
    }


    return (
        <div className='root'>
            <div style={{display: 'flex'}}>
                <img src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" alt="Avatar" className={classes.avatar}/>
                
                <Button className={classes.avatarEdit}>
                    Edit
                </Button>
                
                <Link to="/EditProfile" style={{textDecoration: 'none', marginLeft: 'auto', marginTop: '3em'}}>
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
                
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}  style={{padding: '0px'}}>
                        <b>Email Address</b><span style={{paddingLeft: '20px'}} />{email}
                    </AccordionSummary>
                    
                    
                    <AccordionDetails>
                        <div>
                        </div>
                    </AccordionDetails>

                    <AccordionActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small">
                            Save
                        </Button>
                    </AccordionActions>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}  style={{padding: '0px'}}>
                        <b>Change Password</b>
                    </AccordionSummary>
                    
                    
                    <AccordionDetails>
                        <div>
                        </div>
                    </AccordionDetails>

                    <AccordionActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small">
                            Save
                        </Button>
                    </AccordionActions>
                </StyledAccordion>
            </div>


            <div>
                
                <div className={classes.personalInformation}>
                    <h1>Personal Information</h1>
                    <StyledButton onClick={() => setIsEditing(!isEditing)}>
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
            {!isEditing ? (
                <>
                </>
            ) : (
                <div className={classes.saveCancelButtons}>
                    <Button 
                        variant="contained" 
                        size="large" 
                        className={classes.cancel}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.save}
                        startIcon={<SaveIcon />}
                        onClick={submitChanges}
                    >
                        Save
                    </Button>
                </div>
            )}
        </div>
    )
}

export default EditProfile;