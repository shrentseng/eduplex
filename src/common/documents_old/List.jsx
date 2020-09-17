import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import NoteIcon from '../../assets/note-icon.svg';

const useStyles = makeStyles((theme) => ({
    root: {
    //   border: '1px solid black',
    },
}));

export default function CustomizedList({name, description}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ListItem button divider>
                <ListItemIcon>
                    <Icon>
                        <img src={NoteIcon} height="100%" alt=""/>
                    </Icon>
                </ListItemIcon>
                <ListItemText primary={name} secondary={description}/> 
            </ListItem>
        </div>
    )
}