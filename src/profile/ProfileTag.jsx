import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './ProfileTag.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RewardIcon from '../assets/reward-icon.svg';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Dollar from '../assets/dollar.svg';
import Trophy from '../assets/trophy.svg';

const useStyles = makeStyles({
    root: {
        margin: '2.5rem 0em',
    },
    avatar: {
        borderRadius: '50%',
        maxWidth: '180px',
        width: '100%',
        height: 'auto',
    },
    editProfileButton: {
        backgroundColor:'#FFFFFF',
        width: '136px',
        height: '27px',
        marginBottom: '1rem',
        '& #settingIcon': {
            color: '#5A5A5A',
        },
        '& #editProfile': {
            fontFamily: 'Roboto',
            color: '#5A5A5A',
            fontWeight: '500',
            fontSize: '13px',
        },
    },
    paper: {
        float: 'right',
        width: '230px',
        height: '100px',
        padding: '0.75rem 1.25rem',
        '& span': {
            fontFamily: 'Roboto',
            fontWeight: '700',
            fontSize: '1.25em',
        },
        '& span:nth-child(4n+2)': {
            paddingLeft: '0.75rem',
            color: '#0088D7',
        },
        '& span:nth-child(4n+3)': {
            float: 'right',
            color: '#5A5A5A',
        },
    },
});


function ProfileTag(user) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <Avatar className={classes.avatar} src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h1">Username</Typography>
                <Typography variant="h2">University of California, Los Angeles</Typography>
                <Typography variant="h4">Major and Minor<br></br>Since Fall 2019</Typography>
            </Grid >
            <Grid item xs={4}>
                <Link to="/EditProfile" style={{textDecoration: 'none', float: 'right'}}>
                    <Button
                        component="button"
                        disableElevation
                        variant='contained'
                        size="small"
                        className={classes.editProfileButton}
                        startIcon = {
                            <SettingsIcon id='settingIcon'/>
                        }
                    >
                        <span id='editProfile'>Edit Profile</span>
                    </Button>
                </Link>
                <Paper className={classes.paper}>
                    <img src={Dollar}></img>
                    <span>EduPoints</span>
                    <span>{'1234'}</span>
                    <Divider style={{margin: '6px 0px'}}/>
                    <img src={Trophy}></img>
                    <span>Level</span>
                    <span>{'3'}</span>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default ProfileTag;

{/* <div className="wrapper">
            <img src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" alt="Avatar" style={imgStyle}/>
            <div className="info">
                <Typography variant="h4">Username</Typography>
                <Typography className="sub-info">Major and Minor</Typography>
                <Typography>Since Fall 2019</Typography>
            </div>
            <div className="left">
                <Link to="/EditProfile" style={{textDecoration: 'none'}}>
                    <Button
                        component="button"
                        disableElevation
                        variant='contained'
                        size="small"
                        style={{marginTop:'10px', backgroundColor:'#5ACA7F', width:'150px'}}
                        startIcon = {
                            <SettingsIcon style={{ color: 'white' }}/>
                        }
                    >
                        <div style={{color:'white'}}>Edit Profile</div>
                    </Button>
                </Link>
            </div>
        </div> */}