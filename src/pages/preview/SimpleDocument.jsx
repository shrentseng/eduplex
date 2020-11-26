import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core'
import SmallDoc from '../../assets/smallDoc.svg'

const useStyles = makeStyles(() => ({
    root: {
        margin: "0.5rem",
    },
    paper: {
        display: "grid",
        gridTemplateColumns: "20%",
    },
    image: {
        margin: "0.5rem",
        gridColumnStart: "1",
        gridColumnEnd: "2",
    },
    title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gridColumnStart: "2",
        gridColumnEnd: "3",
    },
}));
const SimpleDocument = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
                <img className={classes.image} src={SmallDoc} />
                <Typography className={classes.title}>{props.name}</Typography>
            </Paper>
        </div>
    );
};

export default SimpleDocument;
