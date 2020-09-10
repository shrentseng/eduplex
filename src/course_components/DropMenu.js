import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TriangleIcon from '../assets/triangle-drop.svg'

const options = [
  'Show By',
  'Documents',
  'Notes',
  'Assignments',
  'Exams',
  'Others'
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
    <>
      <Button
        style={{marginTop:'10px', backgroundColor:'#D2F0D4', width:'98%'}}
        ref={null}
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleClickButton}
        variant='contained'
        size='small'
        disableElevation
        endIcon= {
          <Icon>
              <img src={TriangleIcon} alt="" height="100%"/>
          </Icon>
        }
      >
        <div style={{
          fontSize: '20px',
          textTransform: 'none',
          fontStyle: 'normal',
          lineHeight: '23px',
        }}>{options[selectedIndex]}</div>
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
    </>
  );
}