import React from 'react';
import './ProfileTag.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RewardIcon from '../assets/reward-icon.svg';
import Icon from '@material-ui/core/Icon';
import SettingsIcon from '@material-ui/icons/Settings';

export default function ProfileTag(user) {
    const imgStyle = {
        marginTop: '25px',
        borderRadius: '50%',
        maxWidth: '180px',
        width: '100%',
        height: 'auto'
    };

    return (
        <div className="wrapper">
            <img src="https://i.pinimg.com/736x/d8/9b/25/d89b25dc0b942bb0ca51c4a8800dde95.jpg" alt="Avatar" style={imgStyle}/>
            <div className="info">
                <h1 style={{borderTop:'3px', marginBottom: '4px'}}>Username</h1>
                <p className="sub-info">Major and Minor<br></br>Since Fall 2019</p>
            </div>
            <div className="left">
                <Button
                    disableElevation
                    variant='contained'
                    size="small"
                    style={{marginTop:'10px', backgroundColor:'#E5E5E5', width:'150px'}}
                    startIcon= {
                        <Icon>
                            <img src={RewardIcon} alt="" height="100%"/>
                        </Icon>
                    }
                >
                    My Rewards
                </Button>
                <Link to="/EditProfile">
                    <Button
                        component="button"
                        disableElevation
                        variant='contained'
                        size="small"
                        style={{marginTop:'10px', backgroundColor:'#5ACA7F', width:'150px'}}
                        startIcon = {
                            // <Icon>
                            //     <img src={GearIcon} alt="" height="20px"/>
                            // </Icon>
                            <SettingsIcon style={{ color: 'white' }}/>
                        }
                    >
                        <div style={{color:'white'}}>Edit Profile</div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}