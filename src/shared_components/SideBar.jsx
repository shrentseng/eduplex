import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NewsfeedIcon from '../assets/newsfeed.svg';
import MyCoursesIcon from '../assets/myCourses.svg';
import { Link } from "react-router-dom";

const StyledLink = withStyles({
    root: {
		textDecoration: 'none',
		"&:focus, &:hover, &:visited, &:link, &:active": {
			textDecoration: 'none',
		},
	},
})(Link);

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: '15%',
		minWidth: '180px',
		marginTop: '70px',
		border: '0px'
	},

	nested: {
		paddingLeft: '90px',
	},

	button: {
		'&.active, &:hover, &.active:hover': {
		backgroundColor: '#e5e5e5',
		borderRadius: '0px 25px 25px 0px',
		},
	},
}));

function SideBar(props) {
	const classes = useStyles();
	const [courses, setCourses] = useState(['Course 1', 'Course 2']);
	//fecth courses data

	const courseList = courses.map((course, i) => {
        return (
			<div>
				<ListItem button className={`${classes.nested} ${classes.button}`} style={{textDecoration: 'none'}}>
					<StyledLink to="/Course" style={{textDecoration: 'none'}}><ListItemText primary={course} /></StyledLink>
				</ListItem>
			</div>
            
        )
    });

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
					<div>
						<div className={classes.toolbar} />
						<List>
							<ListItem button className={classes.button}>
								<ListItemIcon>
									<img src={NewsfeedIcon} alt="" height="100%"/>
								</ListItemIcon>
								<StyledLink to="/"><ListItemText primary="Newsfeed" /></StyledLink>
							</ListItem>

							<ListItem button className={classes.button}>
								<ListItemIcon>
									<img src={MyCoursesIcon} alt="" height="100%"/>
								</ListItemIcon>
								<StyledLink to="/MyCourse"><ListItemText primary="My Courses" /></StyledLink>
							</ListItem>

							<List disablePadding>
								{courseList}
							</List>
						</List>
					</div>
				</Drawer>
			</div>
		</div>
	);
}

export default SideBar;