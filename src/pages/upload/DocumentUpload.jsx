import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem',
        '& *': {
            margin: '0.5rem 0',
        }
    },
    lower: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        '& form': {
            marginTop: '1.5rem',
            width: '62rem',
            '& input': {
                margin: '0.25rem 0 0.5rem 0',
                width: '100%',
                height: '2.5rem',
                border: '1px solid #E5E5E5',
                borderRadius: '5px 5px 5px 5px',
                outline: 'none',
		    },
            '& input::placeholder': {
		    	fontFamily: 'Roboto',
		    	color: '#9A9A9A',
		    	fontSize: '1.125rem',
		    	fontWeight: '400',
            },
        },
        '& h5': {
            marginTop: '0.5rem',
        }
    },
    description: {
        resize: 'both',
        width: '60rem',
        height: '8rem',
        border: '1px solid #E5E5E5',
        borderRadius: '5px 5px 5px 5px',
        outline: 'none',
    },
    checkbox: {
        height: '1.124rem',
    }
}));

function DocumentUpload() {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        username: '',
        university: '',
        course: '',
        title: '',
        academicTerm: '',
        academicYear: '',
        category: '',
        description: '',
    });

    const handleDescriptionChange = (event) => {
        let value = event.target.value;
        setFormData(({...formData, description: value}));
    }

    return (
        <div className={classes.root}>
            <div className={classes.upper}>
                <Typography variant="h2">Upload Document</Typography>
                <Typography variant="h3">Share a document and earn 50 EduPoints</Typography>
                <Typography variant="h4">View Upgrade Options</Typography>
            </div>
            <div className={classes.lower}>
                <form>
                    <Typography variant="h5">University</Typography>
                    <input placeholder="Enter the university name" value={formData.university}/>
                    <Typography variant="h5">Last name</Typography>
                    <input placeholder="Enter the course name" value={formData.course}/>
                    <Typography variant="h5">Title</Typography>
                    <input placeholder="Title" value={formData.title}/>
                    <Typography variant="h5">Academic Year</Typography>
                    <input placeholder="Academic Year" value={formData.academicYear}/>
                    <Typography variant="h5">Category</Typography>
                    <input placeholder="Category" value={formData.category}/>
                    <Typography variant="h5">Description</Typography>
                    <textarea 
                        className={classes.description}
                        value={formData.description}
                        onChange={handleDescriptionChange}
                    />
                    <br />
                    <FormControlLabel
                        value="anonymous"
                        control={<Checkbox color="primary" />}
                        label="Make upload anonymous"
                        labelPlacement="end"
                    />
                </form>
            </div>
        </div>
    )
}

export default DocumentUpload;
