import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import './PostButtons.css';

const useStyles = makeStyles({
    buttons: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '10px',
    }

})

const StyledButton = withStyles({
    root: {
        height: '36px',
        backgroundColor: '#E5E5E5',
        width:'98%',
    }
})(Button)



export default function PostButtons() {
    const classes = useStyles();
    const buttons = ['My Posts', 'Uploaded Documents', 'Saved Documents'];
    return (
        <div className={classes.buttons}>
            {buttons.map((button, index) => (
                <NavLink to="/Profile/MyPosts" exact activeClassName={classes.active}>
                    <StyledButton
                        disableElevation
                        variant='contained'
                        size="small"
                    >
                        <Typography variant="h3">{button}</Typography>
                    </StyledButton>
                </NavLink>
            ))}

            <StyledButton
                disableElevation
                variant='contained'
                size="small"
            >
                <div className='text-font'>My Posts</div>
            </StyledButton>
            <StyledButton
                disableElevation
                variant='contained'
                size="small"
            >
                <div className='text-font' style={{color:'#569859', fontWeight: 550}}>Uploaded Documents</div>
            </StyledButton>
            <StyledButton
                disableElevation
                variant='contained'
                size="small"
            >
                <div className='text-font'>Saved Documents</div>
            </StyledButton>
        </div>
    )
}