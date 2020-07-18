import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import NewsfeedIcon from '../static/newsfeed.svg';
import MyCoursesIcon from '../static/myCourses.svg';

const useStyles = makeStyles((theme) => ({
  
  drawerPaper: {
    width: '15%',
    minWidth: '180px',
    marginTop: '70px',
    border: '0px'
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  button: {
    '&.active, &:hover, &.active:hover': {
      backgroundColor: '#e5e5e5',
      borderRadius: '0px 25px 25px 0px',
    },
  },

  icon: {
    paddingRight: theme.spacing(5),
  },

}));

function SideBar(props) {
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
      <ListItem button className={classes.button}>
        <Icon className={classes.icon}>
          <img src={NewsfeedIcon} alt="" height="100%"/>
        </Icon>
        <ListItemText primary="Newsfeed" />
      </ListItem>
      <ListItem button className={classes.button}>
        <Icon className={classes.icon}>
          <img src={MyCoursesIcon} alt="" height="100%"/>
        </Icon>
        <ListItemText primary="My Courses" />
      </ListItem>
      <List disablePadding>
        <ListItem button className={`${classes.nested} ${classes.button}`}>
          <ListItemText primary="Course 1" />
        </ListItem>
        <ListItem button className={`${classes.nested} ${classes.button}`}>
          <ListItemText primary="Course 2" />
        </ListItem>
      </List>
      
    </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        {drawer}
      </Drawer>
      </div>
    </div>
  );
}



export default SideBar;