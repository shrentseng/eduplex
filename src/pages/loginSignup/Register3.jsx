import React from 'react';
import './Register.css';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const MySelect = withStyles({
	root: {
        backgroundColor:"#FFFFFF"
    },
    marginTop: '1em',
})(Select);

const Register3 = ({addStep, minusStep}) => {
    const [course, setCourse] = React.useState("None");

    const handleCourse = (event) => {
        setCourse(event.target.value);
    }

    return (
        <form style={{width:'625px'}}>
            <FormControl variant='outlined' style={{width:'100%', marginBottom:'1em'}}>
                <InputLabel  id="demo-simple-select-label">Current Courses</InputLabel>
                <MySelect label="Name of University" onChange={handleCourse}>
                    <MenuItem value={"None"}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"CS 121"}>CS 121</MenuItem>
                    <MenuItem value={"CHEM 101"}>CHEM 101</MenuItem>
                    <MenuItem value={"SCAND 50"}>SCAND 50</MenuItem>
                </MySelect>
            </FormControl>
            <div className="form-group row button-group">
                <div className="col">
                    <button className="btn button-back" type="submit" onClick={minusStep}>Back</button>
                </div>
                <div className="col">
                    <Link to="/SignIn">
                        <button className="btn float-right button-continue" type="submit">Complete</button>
                    </Link>                    
                </div>
            </div>
        </form>
    )
}

export default Register3;