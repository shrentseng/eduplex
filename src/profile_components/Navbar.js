import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Navbar.css';
import Logo from './assets/epimg.svg';
import LogoWord from './assets/EduPlex.svg';
import SimpleListMenu from './DropMenu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { InputAdornment } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logoImg: {
        paddingLeft: '16px',
    },
    logoWord: {
        paddingLeft: '20px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    Toolbar: {
        display: 'grid',
        gridTemplateColumns: '20% 60% 20%',
        padding: '0px',
    },
    DropMenu: {
        width: '100%',
    },
    search: {
        borderRadius: '0px 5px 5px 0px',
        backgroundColor: '#E5E5E5',
        height: '36px',
        marginLeft: '1px',
        width: '73%',
    },
    searchIcon: {
        height: '36px',
    },
    iconButton: {
        padding: '8px',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '475px',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        marginLeft: 'auto',
        },
        paddingRight: '90px',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        category: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    const adornmentIcon = (
    <IconButton className={classes.iconButton}>
        <SearchIcon fontSize="small"
            classes={{
                searchIcon: classes.searchIcon,
            }}
        />
    </IconButton>
    );
    const adornment = (
        <InputAdornment position='end'>{adornmentIcon}</InputAdornment>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" color='#FFFFFF'>
                <Toolbar className={classes.Toolbar}>
                    <div>
                        <img className={classes.logoImg} src={Logo} alt=''/>
                        <Hidden mdDown>
                            <img className={classes.logoWord} src={LogoWord} alt=''/>
                        </Hidden>
                    </div>
                    <div style={{display: 'flex', justifyContent:'flex-start'}}>
                        <SimpleListMenu className={classes.DropMenu}/>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Search..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                style={{width: '100%'}}
                                inputProps={{ 'aria-label': 'search' }}
                                endAdornment={adornment}
                            />
                        </div>
                    </div>
                    <div className={classes.menuButton} style={{display:'flex', justifyContent:'flex-end', margin:'0px 0px 0px 30px'}}>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            >
                            <MoreIcon />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default Navbar;