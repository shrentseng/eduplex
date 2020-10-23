import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
//import './ProfileTag.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Dollar from '../../assets/dollar.svg';
import Trophy from '../../assets/trophy.svg';
import Help from '../../assets/help.svg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '2.5rem 0em',
        '& button': {
            outline: 'none',
        },
    },
    avatar: {
        borderRadius: '50%',
        maxWidth: '180px',
        width: '100%',
        height: 'auto',
    },
    leftSection: {
        marginRight: '3rem',
    },
    rightSection: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    editProfileButton: {
        backgroundColor:'#FFFFFF',
        border: '1px solid #E5E5E5',
        width: '8.5rem',
        height: '1.7rem',
        marginBottom: '1rem',
        '& #settingIcon': {
            color: '#5A5A5A',
        },
        '& #editProfile': {
            fontFamily: 'Roboto',
            color: '#5A5A5A',
            fontWeight: '500',
            fontSize: '0.8rem',
        },
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        float: 'right',
        width: '17rem',
        height: '5.25rem',
        padding: '0.75rem 1.25rem',
        border: '1px solid #E5E5E5',
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& img': {
                height: '0.75rem',
                width: '0.75rem',
            },
        },
        '& div > div': {
            '& span': {
                fontFamily: 'Raleway',
                fontWeight: '700',
                fontSize: '0.7rem',
                paddingLeft: '0.2rem',
                color: '#0088D7',
            },
            // '& span:nth-child(4n+2)': {
            // },
        },
        '& span': {
            fontWeight: '700',
            fontFamily: 'Raleway',
            fontSize: '1.5rem',
            color: '#000000',
        },
    },
    divider: {
        borderRight: '2px solid #E5E5E5',
    },
});


function ProfileTag(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.leftSection}>
                <Avatar className={classes.avatar} src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" />
            </div>
            <div>
                <Typography variant="h1">{props.firstName} {props.lastName}</Typography>
                <Typography variant="h2" style={{margin: '0.3rem 0'}}>{props.university}</Typography>
                <Typography variant="h4">Major and Minor<br></br>Since Fall 2019</Typography>
            </div >
            <div className={classes.rightSection}>
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
                    <div>
                        <div>
                            <img src={Dollar}></img>
                            <span>EduPoints</span>
                        </div>
                        <span>{'1234'}</span>
                    </div>
                    <div className={classes.divider} />
                    <div>
                        {/* <Divider orientation="vertical" style={{margin: '6px 0px'}} /> */}
                        <div>
                            <img src={Trophy}></img>
                            <span>Level</span>
                        </div>
                        <span>{'3'}</span>
                    </div>
                    <div className={classes.divider}/>
                    <div>
                        {/* <Divider orientation="vertical" style={{margin: '6px 0px'}} /> */}
                        <div>
                            <img src={Help}></img>
                            <span>Karma</span>
                        </div>
                        <span>{'5'}</span>
                    </div>
                </Paper>
            </div>

        </div>
    )
}

export default ProfileTag;