import React , { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    buttons: {
        height: '2.25rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
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
        '&:focus': {
            outline: 'none',
        },
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
        height: '2.25rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E5',
        width:'98%',
        '&:focus': {
            outline: 'none',
        },
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

function CourseButtons({ course }) {
    const classes = useStyles();
    const [selected, setSelected] = useState(null);
    const history = useHistory();
    const courseURL = course.split(" ").join("");
    const handleSelectChange = (option) => {
        console.log(option);
        setSelected(option);
        history.push(`/${courseURL}/Documents`)
    }
    
    return (
        <div className={classes.buttons}>
            <NavLink exact to={`/${courseURL}/Discussion`} className={classes.link} activeClassName={classes.active}>
                <StyledButton
                    disableElevation
                    variant='contained'
                    size="small"
                >
                    <Typography variant="h3">Discussion</Typography>
                </StyledButton>
            </NavLink>
            
            <Select className={classes.select} onChange={value => handleSelectChange(value)} options={options} />
        </div>
    )
}

export default CourseButtons;