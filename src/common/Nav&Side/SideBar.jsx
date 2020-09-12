import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NewsfeedIcon from '../../assets/newsfeed.svg';
import MyCoursesIcon from '../../assets/myCourses.svg';

const useStyles = makeStyles({
	root: {
		
	},
	drawerPaper: {
		background: '#F7F7F7',
		width: '15%',
		minWidth: '180px',
		marginTop: '4.7rem',
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
		'& h2, & h3': {
			fontFamily: 'Raleway',
			color: '#FFFFFF',
			fontWeight: '700',
			fontSize: '1.375rem',
		},
	},
	nested: {
		paddingLeft: '90px',
	},
	button: {
		transition: 'none',
		'&:active, &:hover, &.active:hover': {
			backgroundColor: '#f7f7f7',
			borderRadius: '0px 25px 25px 0px',
		},
	},
});

function SideBar({ courses }) {
	const classes = useStyles();
	//fecth courses data

	const courseList = courses.map((course) => {
        return (
			<div>
				<NavLink activeClassName={classes.active} to={`/${course.split(" ").join("")}`}>
					<ListItem button className={`${classes.nested} ${classes.button}`}>
						<Typography variant="h3">
							{course}
						</Typography>
					</ListItem>
				</NavLink>
			</div>
            
        )
    });

	return (
		<div className={classes.root}>
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
								<Typography variant="h2">
									Newsfeed
								</Typography>
							</ListItem>
						</NavLink>
						<NavLink  to="/MyCourses" exact activeClassName={classes.active}>
							<ListItem button className={classes.button}>
								<ListItemIcon>
									<img src={MyCoursesIcon} alt="" height="100%"/>
								</ListItemIcon>
								<Typography variant="h2">
									My Courses
								</Typography>
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