import React , { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link, NavLink, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import './PostButtons.css';

const useStyles = makeStyles({
    buttons: {
        height: '2.25rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '10px',
    },
    select: {
        width: '100%',
        height: '2.25rem',
    },
    link: {
        textDecoration: 'none',
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: 'none',
        },
    },
    active: {
        '& button': {
			backgroundColor: '#71BA75',
			'&:active, &:hover, &.active:hover': {
				backgroundColor: '#71BA75',
			},
        },
    },

})

const StyledButton = withStyles({
    root: {
        height: '36px',
        backgroundColor: '#E5E5E5',
        width:'98%',
        '&:focus': {
            outline: 'none',
        },
    },
})(Button)

const StyledSelect = withStyles({
    root: {
        height: '2.25rem',
        width: '100%',
        padding: '0rem',
        margin: '0rem',
    },
    select: {
        '&:focus': {
            backgroundColor: '#ffffff',
        }
    }
})(Select);

const options = [
    { value: '1', label: 'Documents' },
    { value: '2', label: 'Lecture Notes' },
    { value: '3', label: 'Assignments' },
    { value: '4', label: 'Past Exams' },
    { value: '5', label: 'Essays' },
    { value: '6', label: 'Others' },
]


function PostButtons() {
    const classes = useStyles();
    const [selected, setSelected] = useState('');
    const history = useHistory();
    
    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    }

    const handleMyPostButton = () => {
        history.push("/Profile/MyPosts")
    }
    
    return (
        <div className={classes.buttons}>
            <NavLink to="/Profile/MyPosts" className={classes.link} activeClassName={classes.active}>
                <StyledButton
                    disableElevation
                    variant='contained'
                    size="small"
                    onClick={handleMyPostButton}
                >
                    <Typography variant="h3">My Posts</Typography>
                </StyledButton>
            </NavLink>
            <div className={classes.select}>
                <StyledSelect
                    variant="outlined"
                    value={selected}
                    onChange={handleSelectChange}
                    id="StyledSelect"
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </div>
            <NavLink to="/Profile/SaveDocuments" className={classes.link} activeClassName={classes.active}>
                <StyledButton
                    disableElevation
                    variant='contained'
                    size="small"
                >
                    <Typography variant="h3">Saved Documents</Typography>
                </StyledButton>
            </NavLink>
            
        </div>
    )
}

export default PostButtons;