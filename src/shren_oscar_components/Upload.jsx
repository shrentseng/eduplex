import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Input } from '@material-ui/core';

const styles = theme => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    info:{
        width: '50em',
        marginBottom: '1em',
    },
    input:{
        width: '50em',
        borderColor: '#cccccc',
        border: '1px solid',
        borderRadius: '4px',
        paddingLeft: '0.5em',
    },
    submit:{
        variant:"contained",
        backgroundColor:"#71BA75",
        "&:hover": {
            backgroundColor: "#71BA75"
        },
        color: 'white',
        width: '8em',
        marginTop: '1em',
    },
});

const Dropzone = withStyles({
    root:{
        width: '50em',
        border: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.12)',
    }
  })(DropzoneArea);

class Upload extends Component
{

constructor(props){
    super(props);
}

render()
{
    const { classes } = this.props;

    return(
        <div className={classes.root}>
            <div className={classes.info}>
                <text style={{fontWeight:'bold'}}>University:</text>
                <Select placeholder="Select a university"/>
            </div>
            <div className={classes.info}>
                <text style={{fontWeight:'bold'}}>Course:</text>
                <Select placeholder="Select a course"/>
            </div>
            <div style={{margin:'1em'}}>
                <Dropzone/>
            </div>
            <div className={classes.info}>
                <text style={{fontWeight:'bold'}}>Title:</text>
                <Input className={classes.input} placeholder="Choose a name for your document" disableUnderline/>
            </div>
            <div className={classes.info}>
                <text style={{fontWeight:'bold'}}>Description</text>
                <textarea multiline className={classes.input} placeholder="Add a description for your document"/>
            </div>
            <div>
                <Button className={classes.submit} startIcon={<ArrowUpwardIcon/>}>
                    Submit
                </Button>
            </div>
        </div>
    );
}
}

export default withStyles(styles)(Upload);

/*     
<div>
            <div className={classes.root}>
                <text className={classes.text}>University:</text>
                <Select className={classes.selectU} placeholder="Select a university"/>
            </div>
            <div className={classes.root}>
                <text className={classes.text}>Course:</text>
                <Select className={classes.selectC} placeholder="Select a university" />
            </div>
            <div className={classes.root}>
                <div className={classes.dropZone}>
                    <DropzoneArea />
                </div>
            </div>
            <div className={classes.root}>
                <text className={classes.text}>Title:</text>
                <input className={classes.title} placeholder=" Choose a name for your document" disableUnderline/>
            </div>
            <div className={classes.root}>
                <text className={classes.text}>Description</text>
                <textarea className={classes.description} placeholder=" Add a description to your document" disableUnderline/>
            </div>
            <div className={classes.root}>
                <Button className={classes.submit} startIcon={<ArrowUpwardIcon/>}>
                    Submit
                </Button>
            </div>
        </div>   
*/