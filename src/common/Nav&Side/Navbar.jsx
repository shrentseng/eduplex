import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/epimg.svg';
import LogoWord from '../../assets/EduPlex.svg';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications';

import AvatarNavbar from './AvatarNavbar';

const useStyles = makeStyles(() => ({
    root: {
		height: '3.7rem',
		backgroundColor: '#FFFFFF',
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
	grid: {
		height: '100%',
		display: 'grid',
		gridTemplateColumns: '150px 6fr minmax(18rem, 1fr)',
		placeItems: 'center',
	},
    logo: {
		'& a': {
			display: 'flex',
		},
	},
	search: {
		display: 'flex',
		width: '90%',
		placeItems: 'center',
	},
	select: {
		'& .react-select__control, & .react-select__control:hover': {
			backgroundColor: '#FFFFFF',
			minHeight: '0px',
			height: '2.25rem',
			width: '8.8rem',
			border: '2px solid #E5E5E5',
			boxSizing: 'border-box',
			borderRadius: '5px 0px 0px 5px',
			boxShadow: 'none',
		},
		'& .react-select__placeholder, & .react-select__single-value, & .react-select__option': {
			fontFamily: 'Roboto',
			color: '#000000',
			fontSize: '1rem',
			fontWeight: '400',
		},
		'& .react-select__indicator-separator': {
			display: 'none',
		},
		'& .react-select__indicator': {
			padding: '0 0.5rem',
		},
		'& .css-6q0nyr-Svg': {
			height: '1.25rem',
		},
	},
	input: {
		height: '2.25rem',
		width: 'inherit',
		minWidth: '10rem',
		paddingRight: '2.8rem',
		backgroundColor: '#F7F7F7',
		border: '#F7F7F7',
		marginLeft: '2px',
		borderRadius: '0px 5px 5px 0px',
		outline: 'none',
	},
	SearchIcon: {
		color: '#8B8B8B',
		height: '1.5rem',
		position: 'relative',
		right: '2.2rem',
	},
	rightStuffs: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	uploadButton: {
		width: '6.875rem',
		height: '2.5rem',
		color: '#FFFFFF',
		backgroundColor: '#71BA75',
		margin: '0 0.5rem',
		outline: 'none !important',
		'&:hover': {
			backgroundColor: '#71BA75',
		},
	},
	notificationsIcon: {
		height: '2.125rem',
		width: '2.125rem',
		color: '#909090',
		margin: '0 0.5rem',
	},
}));

const options = [
	{ value: 0, label: 'Course' },
    { value: 1, label: 'Document' },
    { value: 2, label: 'Discussion' },
]

function Navbar({ onSearch }) {
	const classes = useStyles();
	let history = useHistory();

	const [selected, setSelected] = useState();
	const [searchValue, setSearchValue] = useState("");


	const handleSearch = () => {
		if (selected === 0) {
			history.push("/CourseResults")
		} else if (selected === 1) {
			history.push("/DocumentResults")
		} else if (selected === 2) {
			history.push("/")
		}
		
		onSearch(searchValue)
	}
	const handleSelectChange = (event) => {
		setSelected(event.value)
	}

	const handleSearchChange = (event) => {
		setSearchValue(event.target.value)
	}

	const searchFunc = (event) => {

	}

	
    return (
        <AppBar className={classes.root}>
            <div className={classes.grid}>
                <div className={classes.logo}>
                    {/* //logo */}
                    <Link to="/">
                        <img style={{height: '24px'}} src={Logo} alt=''/>
                        <img style={{height: '24px'}} src={LogoWord} alt=''/>
                    </Link>
                </div>
                <div className={classes.search}>
                    {/* //select */}
					<Select 
						className={classes.select} 
						options={options} 
						classNamePrefix="react-select"
						isSearchable={false}
						onChange={handleSelectChange}
					/>
					{/* //search */}
					<input 
						className={classes.input} 
						placeholder="Search" 
						value={searchValue} 
						onChange={handleSearchChange} 
					/>
					<SearchIcon className={classes.SearchIcon} onClick={handleSearch}/>
                </div>
                <div className={classes.rightStuffs}>
                    {/* //upload & noti & profile */}
					<Link to="/DocumentUpload">
						<Button
							variant="contained"
							className={classes.uploadButton}
							startIcon={<CloudUploadIcon />}
						>
							Upload
						</Button>
					</Link>
					<NotificationsIcon className={classes.notificationsIcon} />
					<AvatarNavbar />
                </div>
            </div>
        </AppBar>
    )
}

export default Navbar;
