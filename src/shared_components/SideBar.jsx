import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NewsfeedIcon from '../assets/newsfeed.svg';
import MyCoursesIcon from '../assets/myCourses.svg';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		
	},
	drawerPaper: {
		background: '#E5E5E5',
		width: '15%',
		minWidth: '180px',
		marginTop: '75px',
		border: '0px'
	},

	nested: {
		paddingLeft: '90px',
	},

	button: {
		'&.active, &:hover, &.active:hover': {
		backgroundColor: '#f7f7f7',
		borderRadius: '0px 25px 25px 0px',
		},
		'&.MuiListItem-button': {
			transition: 'none',
		},
		'& a':{
			textDecoration: 'none',
			"&:focus, &:hover, &:visited, &:link, &:active": {
				textDecoration: 'none',
			},
		}
	},
	text: {
		'& span.MuiTypography-body1': {
			fontFamily: 'Raleway',
			color: '#5A5A5A',
			fontWeight: '500',
			fontSize: '1.4em',
		},
	}
}));

function SideBar(props) {
	const classes = useStyles();
	const [courses, setCourses] = useState(['Course 1', 'Course 2']);
	//fecth courses data

	const courseList = courses.map((course, i) => {
        return (
			<div>
				<ListItem button className={`${classes.nested} ${classes.button}`}>
					<Link to="/Course" ><ListItemText primary={course} className={classes.text}/></Link>
				</ListItem>
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
					<List>
						<ListItem button className={classes.button}>
							<ListItemIcon>
								<img src={NewsfeedIcon} alt="" height="100%"/>
							</ListItemIcon>
							<Link  to="/"><ListItemText primary="Newsfeed" className={classes.text}/></Link>
						</ListItem>
						<ListItem button className={classes.button}>
							<ListItemIcon>
								<img src={MyCoursesIcon} alt="" height="100%"/>
							</ListItemIcon>
							<Link  to="/MyCourse"><ListItemText primary="My Courses" className={classes.text}/></Link>
						</ListItem>
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