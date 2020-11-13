import React, { useState, useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import exclude from '../../assets/Exclude.svg';
import anonymous from '../../assets/anonymous.svg';
import FeedsContext from '../../context/feed/feedsContext';
import UserContext from '../../context/user/userContext'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1em 0',
    },
    paper: {
        padding: "1em",
    },
    courseDiv: {
        display: 'flex', 
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    select: {
        height: '2.25rem',
        width: '12rem',
        marginLeft: '0.5rem',
        backgroundColor: '#FFFFFF',
        '& .css-yk16xz-control': {
            minHeight: '0px',
            height: '2.25rem',
            borderColor: '#E5E5E5',
        },
        '& .css-1wa3eu0-placeholder, & .css-1uccc91-singleValue': {
            fontFamily: 'Roboto',
            color: '#111111',
            fontSize: '1rem',
            fontWeight: '400',
        },
        '& .css-1pahdxg-control, & .css-1pahdxg-control:hover': {
            borderColor: '#E5E5E5',
            boxShadow: 'none',
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
    { value: 1, label: 'Course 1' },
    { value: 2, label: 'Course 2' },
    { value: 3, label: 'Course 3' },
]

const Post = ( {createPost} ) => {
    const userContext = useContext(UserContext) 
    const feedsContext = useContext(FeedsContext);
    
    const classes = useStyles();
    const [content, setContent] = useState("");
    const [course, setCourse] = useState("");



    const onCreatePost = (content, course) => {
        if (content && course) {
            //console.log(course)
            feedsContext.addFeed({
                PostID: -1,
                Message: content,
                CourseID: course,
                UserID: userContext.userID,
                FirstName: 'Shren',
                LastName: 'Tseng',
                CourseName: course,
                ChildComments: [],
                Likes: 0,
                Unlikes: 0,
            });
            setContent("");
            setCourse("");
            alert("Submit Successful");
        } else {
            alert("Post cannot be empty!!\nPlease choose a course you want to post!!");
        }
    }

    const handleSelectChange = (event) => {
        setCourse(event.value);
    }

    return(
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <div className={classes.courseDiv}>
                        <Select
                            className={classes.select}
                            classNamePrefix="react-select"
                            options={options}
                            onChange={handleSelectChange}
                        >
                        </Select>
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

