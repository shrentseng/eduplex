import React , { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { buttonActiveFont } from '../../common/styles';

const useStyles = makeStyles({
    buttons: {
        height: '2.25rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '10px',
    },
    select: {
        height: '2.25rem',
        backgroundColor: '#FFFFFF',
        width:'98%',
        '& .css-yk16xz-control': {
            minHeight: '0px',
            height: '2.25rem',
            borderColor: '#E5E5E5',
        },
        '& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue': {
            fontFamily: 'Raleway',
            color: '#111111',
            fontSize: '1rem',
            fontWeight: '400',
        },
        '& .css-1pahdxg-control, & .css-1pahdxg-control:hover': {
            borderColor: '#E5E5E5',
            boxShadow: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    selectActive: {
        '& .css-yk16xz-control': {
            backgroundColor: '#71BA75',
        },
        '& .css-1pahdxg-control, & .css-1pahdxg-control:hover': {
            borderColor: '#E5E5E5',
            backgroundColor: '#71BA75',
            boxShadow: 'none',
        },
        '& .css-1uccc91-singleValue': buttonActiveFont,
    },
    link: {
        textDecoration: 'none',
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: 'none',
        },
    },
    buttonActive: {
        '& button': {
			backgroundColor: '#71BA75',
			'&:active, &:hover, &.active:hover': {
				backgroundColor: '#71BA75',
			},
        },
        '& h3': buttonActiveFont,
    },

})

const StyledButton = withStyles({
    root: {
        height: '2.25rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E5',
        width:'98%',
        '&:focus': {
            outline: 'none',
        },
        textTransform: 'none',
    },
})(Button)

const options = [
    { value: '1', label: 'Documents' },
    { value: '2', label: 'Lecture Notes' },
    { value: '3', label: 'Assignments' },
    { value: '4', label: 'Past Exams' },
    { value: '5', label: 'Essays' },
    { value: '6', label: 'Others' },
]

function ProfileButtons() {
    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();
    const [selectClassName, setSelectClassName] = useState(null);

    useEffect(() => {
        if (location.pathname === "/Profile/Uploaded") {
            setSelectClassName(classes.selectActive)
        } else {
            setSelectClassName(null)
        }
    }, [location])
    
    const handleSelectChange = () => {
        history.push("/Profile/Uploaded")
    }

    return (
        <div className={classes.buttons}>
            <NavLink exact to="/Profile" className={classes.link} activeClassName={classes.buttonActive}>
                <StyledButton
                    disableElevation
                    variant='contained'
                    size="small"
                >
                    <Typography variant="h3">My Posts</Typography>
                </StyledButton>
            </NavLink>
            
            <Select className={`${classes.select} ${selectClassName}`} onChange={value => handleSelectChange(value)} options={options} />
            
            <NavLink to="/Profile/Saved" className={classes.link} activeClassName={classes.buttonActive}>
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

export default ProfileButtons;