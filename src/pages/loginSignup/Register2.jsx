import React from 'react';
import './Register.css';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';


const MySelect = withStyles({
	root: {
        '& label.Mui-focused': {
			color: '#569859',
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused Select': {
				borderColor: '#569859',
			},
		},
        backgroundColor:"#FFFFFF",
    },
    marginTop: '1em',
})(Select);


const Register2 = ({addStep, minusStep}) => {
    const [university, setUniversity] = React.useState("None");
    const [major, setMajor] = React.useState("None");
    const [minor, setMinor] = React.useState("None");

    const handleUniversity = (event) => {
        setUniversity(event.target.value);
    }

    const handleMajor= (event) => {
        setMajor(event.target.value);
    }

    const handleMinor= (event) => {
        setMinor(event.target.value);
    }

    const handleSubmit= () => {
        if(university !== "None" && major !== "None")
            addStep();
    }

    return (
        <form style={{width:'625px'}}>
            <FormControl required variant='outlined' style={{width:'100%', marginBottom:'1em'}}>
                <InputLabel  id="demo-simple-select-label">Name of University</InputLabel>
                <MySelect label="Name of University" onChange={handleUniversity}>
                    <MenuItem value={"None"}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"UCLA"}>UCLA</MenuItem>
                    <MenuItem value={"Berkeley"}>Berkeley</MenuItem>
                    <MenuItem value={"USC"}>USC</MenuItem>
                </MySelect>
            </FormControl>
            <FormControl required className="col-5" variant='outlined'>
                <InputLabel  id="demo-simple-select-label">Major</InputLabel>
                <MySelect required label="Major" onChange={handleMajor}>
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
                <MySelect label="Minor (Optional)" onChange={handleMinor}>
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
                        <button className="btn float-right button-continue" type="submit" onClick={handleSubmit}>Continue</button>
                </div>
            </div>
        </form>
    )
}

export default Register2;