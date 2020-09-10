import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TriangleIcon from './assets/drop_down_triangle.svg'
import { Link } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import CourseResults from '../shren_oscar_components/search_results/CourseResults'

const options = [
    'Options',
    'Documents',
    'Courses',
    'Discussion'
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleClickButton}
        variant='outlined'
        size='small'
        endIcon= {
          <Icon>
              <img src={TriangleIcon} alt="" height="100%"/>
          </Icon>
        }
        style={{
          height: '36px',
          width: '100%',
          textAlign:'center',
          borderRadius: '5px 0px 0px 5px'
        }}
      >
        {options[selectedIndex]}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}