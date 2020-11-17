import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TriangleIcon from "../../assets/drop_down_triangle.svg";

const options = ["Options", "Documents", "Courses", "Discussion"];

export default function SimpleListMenu({ setIndex }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClickButton = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
		setIndex(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-haspopup="true"
                aria-controls="customized-menu"
                variant="outlined"
                size="small"
                endIcon={
                    <Icon>
                        <img src={TriangleIcon} alt="" height="100%" />
                    </Icon>
                }
                style={{
                    height: "36px",
                    width: "100%",
                    textAlign: "center",
                    borderRadius: "5px 0px 0px 5px",
                }}
                onClick={handleClickButton}
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
                        onClick={(event) => handleMenuItemClick(index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
