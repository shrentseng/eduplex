import React from 'react';
import ListIcon from '../assets/list-icon.svg'
import GridIcon from '../assets/grid-icon.svg'
import ListIconBlur from '../assets/list-icon-blur.svg'
import GridIconBlur from '../assets/grid-icon-blur.svg'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
}));

export default function GridOrList({onClickGrid, onClickList, grid}) {
    const classes = useStyles();
    var gridIcon, listIcon;
    if(grid) {
        gridIcon=GridIcon;
        listIcon=ListIconBlur;
    } else {
        gridIcon=GridIconBlur;
        listIcon=ListIcon;
    }
    return (
        <div className={classes.root}>
            <IconButton onClick={onClickGrid} disableFocusRipple>
                <Icon>
                    <img src={gridIcon} alt="" height="100%"/>
                </Icon>
            </IconButton>
            <IconButton onClick={onClickList} disableFocusRipple>
                <Icon>
                    <img src={listIcon} alt="" height="100%"/>
                </Icon>
            </IconButton>
        </div>
    )
}


