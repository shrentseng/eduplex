import React from 'react';
import { MenuItem, Select, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledSelect = withStyles({
    root: {
        width:'15rem',
        padding:'0.2rem',
        paddingLeft:'1rem',
    },
    select: {
        backgroundColor:'#ffffff',
        '&:focus':{
            backgroundColor:'#ffffff'
        }
    }
})(Select);

const useStyles = makeStyles(theme => ({
    university:{
        display: 'flex', 
        flexDirection: 'row',
    },
    currentUni:{
        margin:'0.5rem',
        marginBottom:'2rem',
        fontSize:'0.9em',
        color:'#504F4F',
    },
    select:{
        margin:'0.3rem',
        height:'1.7em',
    },
}));

const options = [
    {value: 'Unversity of California Berkeley', label: 'Unversity of California Berkeley' },
    {value: 'Unversity of California Los Angeles', label: 'Unversity of California Los Angeles' },
    {value: 'Unversity of California Irvine', label: 'Unversity of California Irvine' },
]

const CurrentUniversity = () => {
    const classes = useStyles();
    const [university, setUniversity] = React.useState("")

    const handleSelectChange = (event) =>{
        setUniversity(event.target.value);
    }

    return(
        <div>
            <div className={classes.university}>
                <Typography className={classes.currentUni}>Current University:</Typography>
                <StyledSelect 
                    className={classes.select}
                    variant="outlined"
                    value={university} 
                    onChange={handleSelectChange}
                >
                    {options.map((option,index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </div>
        </div>
    )
}

export default CurrentUniversity;