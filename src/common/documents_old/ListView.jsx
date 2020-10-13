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

function ListView({ docs }) {
    
    const classes = useStyles();
    const listComponent = docs.map((name, i) => {
        return (
            <CustomizedList name={docs[i].title}
                description={docs[i].title}
            />
        )
    });
    return (
        <div className={classes.root}> 
            <List>
                {listComponent}
            </List>
        </div>
        
    );
}

export default ListView;