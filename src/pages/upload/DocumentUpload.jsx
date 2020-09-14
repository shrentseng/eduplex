import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Input from '../../common/Input';


const useStyles = makeStyles(() => ({
    root: {
        
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    lower: {
        backgroundColor: '#FFFFFF',
    },
    description: {
        resize: 'both',
    },
    
}));

function DocumentUpload() {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        university: '',
        course: '',
        title: '',
        academicYear: '',
        category: '',
        description: '',
    });

    return (
        <div className={classes.root}>
            <div className={classes.upper}>
                <Typography variant="h2">Upload Document</Typography>
                <Typography variant="h3">Share a document and earn 50 EduPoints</Typography>
                <Typography variant="h4">View Upgrade Options</Typography>
            </div>
            <div className={classes.lower}>
                <form>
                    <label>University</label><br />
                    <Input placeholder="Enter the university name" value={formData.university}/><br />
                    <label for="lname">Last name:</label><br />
                    <Input placeholder="Enter the course name" value={formData.course}/><br />
                    <Input placeholder="Title" value={formData.course}/><br />
                    <Input placeholder="Academic Year" value={formData.course}/><br />
                    <Input placeholder="Category" value={formData.course}/><br />
                    <textarea className={classes.description} value={formData.course}/><br />
                </form>
            </div>
        </div>
    )
}

export default DocumentUpload;
