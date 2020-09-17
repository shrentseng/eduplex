import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft:'0.5rem',
    },
    title:{
        marginTop:'3rem',
        fontSize:'1.5em',
    },
    courseInfoAdd:{
        display:'flex',
        flexDirection:'row',
    },
    courseName: {
        paddingLeft:'0.5rem',
        width:"30em", 
        height:"3em", 
        border:'none',
    },
    courseID: {
        paddingLeft:'0.5rem', 
        marginLeft:"0.5em", 
        marginBottom:'2em',
        width:"13.5em", 
        height:"3em", 
        border:"none"
    },
    addButton:
    {
        height:'3.5em',
        width:'10em',
        marginLeft:'1rem',
        backgroundColor:"#0088D7",
        "&:hover": {
            backgroundColor: "#0088D7"
        },
    }
}));

const FindCourse = (props) => {
    const [open,setOpen] = React.useState(false);
    const classes = useStyles();
    
    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography>Didn't Find Your Course?</Typography>
            </div>
            <div className={classes.courseInfoAdd}>
                <input className={classes.courseName} placeholder="Course Name (Enter full course name)"></input>
                <input className={classes.courseID} placeholder="Course ID"></input>
                <Button className={classes.addButton} onclick={handleOpen}>Add</Button>
            </div>
        </div>
    );
}

export default FindCourse;