import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';


const MySelect = withStyles({
	root: {
        
    },
    marginTop: '1em',
})(Select);


const Register2 = ({addStep, minusStep}) => {
    return (
        <form style={{width:'625px'}}>
            <FormControl variant='outlined' style={{width:'100%', marginBottom:'1em'}}>
                <InputLabel  id="demo-simple-select-label">Name of University</InputLabel>
                <MySelect label="Name of University">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>UCLA</MenuItem>
                    <MenuItem value={20}>Berkeley</MenuItem>
                    <MenuItem value={30}>USC</MenuItem>
                </MySelect>
            </FormControl>
            <FormControl className="col-5" variant='outlined'>
                <InputLabel  id="demo-simple-select-label">Major</InputLabel>
                <MySelect label="Major">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Math</MenuItem>
                    <MenuItem value={20}>Biology</MenuItem>
                    <MenuItem value={30}>Literature</MenuItem>
                </MySelect>
            </FormControl>
            <FormControl className="col-6" variant='outlined' style={{marginLeft:'3.2em',}}>
                <InputLabel  id="demo-simple-select-label">Minor (Optional)</InputLabel>
                <MySelect label="Minor (Optional)">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Stats</MenuItem>
                    <MenuItem value={20}>Math</MenuItem>
                    <MenuItem value={30}>Music</MenuItem>
                </MySelect>
            </FormControl>
            <div className=" row button-group">
                <div className="col">
                        <button className="btn button-back" type="submit" onClick={minusStep}>Back</button>
                </div>
                <div className="col">
                        <button className="btn float-right button-continue" type="submit" onClick={addStep}>Continue</button>
                </div>
            </div>
        </form>
    )
}

export default Register2;