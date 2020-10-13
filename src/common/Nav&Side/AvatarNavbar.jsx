import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import avatar from '../../assets/avatar.svg';

const useStyles = makeStyles(() => ({
    root: {
        margin: '0 0.5rem 0 0.5rem',
        cursor: 'pointer',
    },
	avatar: {
		padding: 0,
		margin: '2px',
		minHeight: 0,
		minWidth: 0,
        backgroundColor: '#FFFFFF',
        height: 'calc(2.125rem + 2px)',
		width: 'calc(2.125rem + 2px)',
        borderRadius: '50%',
        boxSizing: 'content-box',
        '&:hover': {
            boxShadow: '0 0 5px 3px #909090',
        },
    },
    accountMenu: {
        marginTop: '1rem',
        '& a':{
            fontFamily: 'Roboto',
            color: '#5A5A5A',
            fontSize: '1rem',
            fontWeight: '400',
			textDecoration: 'none',
			"&:focus, &:hover, &:visited, &:link, &:active": {
				textDecoration: 'none',
			},
		}
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigAvatar: {
        height: '5.125rem',
		width: '5.125rem',
    },
    username: {
        marginTop: '0.5rem',
        fontFamily: 'Roboto',
        color: '#5A5A5A',
        fontSize: '1rem',
        fontWeight: '400',
    },
}));

const menuList = [
    {
        title: 'Upgrade',
    },
    {
        title: 'Profile',
    },
    {
        title: 'Settings',
    },
    {
        title: 'Refer a friend',
    },
    {
        title: 'Log out',
    },
]

function AvatarNavbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleAvatarClick = () => {


    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderAccountMenu = (
        <Menu
            id="menu"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            getContentAnchorEl={null}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
            className={classes.accountMenu}
        >
            <div className={classes.upper}>
                <Avatar className={classes.bigAvatar} src={avatar} />
                <span className={classes.username}>{'Shren Tseng'}</span>
            </div>
            <hr />
            {menuList.map((item, i) => (
                <Link to={`/${item.title}`}>
                    <MenuItem onClick={handleMenuClose} key={i}>{item.title}</MenuItem>
                </Link>
            ))}
        </Menu>
    );

    return (
        <div className={classes.root}>
            <Avatar 
                src={avatar} 
                className={classes.avatar}
                onClick={handleProfileMenuOpen}
            />
            {renderAccountMenu}
        </div>
    )
}

export default AvatarNavbar;
