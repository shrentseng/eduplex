import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import exclude from '../../assets/exclude.svg';
import anonymous from '../../assets/anonymous.svg';

const StyledSelect = withStyles({
    root: {
        width: '7.5em',
        paddingLeft: '0.5em',
    },
    select: {
        '&:focus': {
            backgroundColor: '#ffffff',
        }
    }
})(Select);

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em 0',
    },
    paper: {
        padding: "1em",
    },
    selectDiv: {
        display: 'flex', 
        flexDirection: 'row-reverse',
        alignItems: 'center',
        '& div': {
            marginLeft: '0.5em',
            height: '2em',
        },
        "& div[role='button']": {
            height: '0em',
            marginLeft: '0.5em',
        },
    },
    
    post: {
        marginTop: '1em',
        height: '6em',
        width: '100%',
        backgroundColor: '#f7f7f7',
        outlineWidth: '0em',
        border: 'none',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '98%',
        marginTop: '-1.6em',
    },
    anonymous: {
        margin: '0.2em',
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
    },
    exclude: {
        margin: '0.2em',
        width: '32px',
        height: '32px',
    }
}));

const options = [
    { value: 'Course 1', label: 'Course 1' },
    { value: 'Course 2', label: 'Course 2' },
    { value: 'Course 3', label: 'Course 3' },
]

const Post = ( {createPost} ) => {
    const classes = useStyles();
    const [content, setContent] = useState("");
    const [course, setCourse] = useState("");

    const onCreatePost = (content, course) => {
        if (content && course) {
            createPost(content, course);
            setContent("");
            setCourse("");
        } else {
            alert("Post cannot be empty!!\nPlease choose a course you want to post!!");
        }
        
    }

    const handleSelectChange = (event) => {
        setCourse(event.target.value);
    }

    return(
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <div className={classes.selectDiv}>
                        <StyledSelect
                            variant="outlined"
                            value={course}
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
                        <Typography>Post in  </Typography>
                    </div>
                    
                    <div>
                        <textarea className={classes.post} type="text" placeholder="Start a discussion... " value={content} onChange={event => setContent(event.target.value)}/>
                    </div>
                    <div className={classes.buttons}>
                        <Avatar className={classes.anonymous} src={anonymous}/>
                        <Avatar className={classes.exclude} src={exclude} onClick={event => onCreatePost(content, course)}/>
                    </div>
                </Paper>
            </div>
    )
}

export default Post;

