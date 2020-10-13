import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  title: {
    // width: '100%',
    // backgroundColor: theme.palette.background.paper,
    // height: "650px",
    // overflowY: 'scroll',
    // border: '2px solid black'
  },
}));

function EduPoints() {
    const classes = useStyles();
    return (
        <div className={classes.title}> 
            How Do EduPoints Work?            
        </div>
        
    );
}

export default EduPoints;