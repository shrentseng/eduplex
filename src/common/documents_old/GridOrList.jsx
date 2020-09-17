import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '../../assets/list-icon.svg'
import GridIcon from '../../assets/grid-icon.svg'
import ListIconBlur from '../../assets/list-icon-blur.svg'
import GridIconBlur from '../../assets/grid-icon-blur.svg'

const useStyles = makeStyles(() => ({
    root: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '1rem 0rem',
		'& button': {
			marginTop: '-0.5rem',
		},
		'& button:focus': {
			outline: 'none',
		},
	},
	formControl: {
		height: '2rem',
		width: '11rem',
		backgroundColor: '#FFFFFF',
		"& [data-shrink='false']": {
			top: '-0.75rem',
		},
		'& div:nth-child(2)': {
			height: '2rem',
		},
	},
}));

const StyledSelect = withStyles({
    root: {
		backgroundColor: '#ffffff',
    },
    select: {
		backgroundColor: '#F7F7F7',
        '&:focus': {
            backgroundColor: '#F7F7F7',
        }
    }
})(Select);

const options = [
	{ value: '1', label: 'Most Recent' },
    { value: '2', label: 'Most Downloads' },
    { value: '3', label: 'Courses' },
]



function GridOrList({ onClickGrid, onClickList, grid }) {
	const classes = useStyles();
	const [sortby, setSortby] = useState("");

	const handleSelectChange = (event) => {
		setSortby(event.target.value);
	}

    var gridIcon, listIcon;
    if (grid) {
        gridIcon=GridIcon;
        listIcon=ListIconBlur;
    } else {
        gridIcon=GridIconBlur;
        listIcon=ListIcon;
    }
    return (
        <div className={classes.root}>
            <IconButton onClick={onClickGrid} disableFocusRipple disableRipple>
				<AppsIcon />
            </IconButton>
            <IconButton onClick={onClickList}>
				<DehazeIcon />
            </IconButton>

			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel>Sort by</InputLabel>
				<StyledSelect
					value={sortby}
					onChange={handleSelectChange}
					label="Sort by"
				>
					{options.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
				</StyledSelect>
			</FormControl>
			{/* <div className={classes.select}>
                <StyledSelect
                    variant="outlined"
                    value={sortby}
                    onChange={handleSelectChange}
					id="StyledSelect"
					size="small"
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </div> */}
        </div>
    )
}

export default GridOrList;

