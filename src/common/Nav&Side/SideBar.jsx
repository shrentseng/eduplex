import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NewsfeedIcon from '../../assets/newsfeed.svg';
import MyCoursesIcon from '../../assets/myCourses.svg';


const useStyles = makeStyles({
	root: {
		
	},
	drawerPaper: {
		background: '#F7F7F7',
		width: '15%',
		minWidth: '180px',
		marginTop: '75px',
		border: '0px'
	},
	list: {
		'& a':{
			textDecoration: 'none',
			"&:focus, &:hover, &:visited, &:link, &:active": {
				textDecoration: 'none',
			},
		}
	},
	active: {
		'& div': {
			backgroundColor: '#71BA75',
			borderRadius: '0px 25px 25px 0px',
			'&:active, &:hover, &.active:hover': {
				backgroundColor: '#71BA75',
			},
		},
		'& div > div > span': {
			color: 'white',  //not working
		}
	},
	nested: {
		paddingLeft: '90px',
	},
	button: {
		'&:active, &:hover, &.active:hover': {
			backgroundColor: '#f7f7f7',
			borderRadius: '0px 25px 25px 0px',
		},
		'&.MuiListItem-button': {
			transition: 'none',
		},
	},
	text: {
		'& span.MuiTypography-body1': {
			fontFamily: 'Raleway',
			color: '#5A5A5A',
			fontWeight: '500',
			fontSize: '1.4em',
		},
	}
});

function SideBar({ courses }) {
	const classes = useStyles();

	//fecth courses data

	const courseList = courses.map((course, i) => {
        return (
			<div>
				<NavLink  activeClassName={classes.active} to={course.split(" ").join("")}>
					<ListItem button className={`${classes.nested} ${classes.button}`}>
						<ListItemText primary={course} className={classes.text}/>
					</ListItem>
				</NavLink>
			</div>
            
        )
    });

	return (
		<div>
			<Drawer
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
				open
			>
				<div>
					<div className={classes.toolbar} />
					<List className={classes.list}>
						<NavLink to="/" exact activeClassName={classes.active}>
							<ListItem button className={classes.button}>
								<ListItemIcon>
									<img src={NewsfeedIcon} alt="" height="100%"/>
								</ListItemIcon>
								<ListItemText primary="Newsfeed" className={classes.text}/>
							</ListItem>
						</NavLink>
						<NavLink  to="/MyCourses" exact activeClassName={classes.active}>
							<ListItem button className={classes.button}>
								<ListItemIcon>
									<img src={MyCoursesIcon} alt="" height="100%"/>
								</ListItemIcon>
								<ListItemText primary="My Courses" className={classes.text}/>
							</ListItem>
						</NavLink>
						<List disablePadding>
							{courseList}
						</List>
					</List>
				</div>
			</Drawer>
		</div>
	);
}

export default SideBar;