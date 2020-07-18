import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CustomizedList from './List';
import Icon from '@material-ui/core/Icon';
import Polygon from '../assets/polygon.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: '650px',
    overflowY: 'scroll',
    // border: '2px solid black'
  },
}));

export default function Documents({ disable, docs }) {
    const listComponent = docs.slice(4,8).map((name, i) => {
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
            <div >
                <p style={{fontSize: '32px'}}>Documents</p>
                <List className={classes.root}>
                    {listComponent}
                </List>
                <a href="/#" style={{fontSize:'16px', color:'black', display:'flex', justifyContent:'flex-end'}}>
                More in Documents
                <Icon>
                    <img src={Polygon} alt="" height="50%" style={{margin:'6px 0px 0px 4px'}}/>
                </Icon>
            </a>
            </div>
        );
    }
}
