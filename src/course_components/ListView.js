import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CustomizedList from './List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: "650px",
    overflowY: 'scroll',
    // border: '2px solid black'
  },
}));

export default function ListView({ disable, docs }) {
    const listComponent = docs.map((name, i) => {
        return (
            <CustomizedList name={docs[i].title}
                description={docs[i].title}
            />
        )
    });
    const classes = useStyles();
    if(disable) {
        return (
            <div></div>
        );
    } else {
        return (
            <div className={classes.root}> 
                <List>
                    {listComponent}
                </List>
            </div>
            
        );
    }
}
