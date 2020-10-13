import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CustomizedCard from './Card';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import PlusIcon from '../../assets/plus.png';

const useStyles = makeStyles((theme) => ({
  
    addButton: {
        width: 180,
        height: 180,
        border: '2px solid #C4C4C4',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
    },

    placeholder: {
        height: 73,
    }

}));



const CardList = ({ disable, docs, deleteDoc }) => {
    const cardComponent = docs.map((name, i) => {
        return (
            <Grid item key={i}>
                <CustomizedCard
                    courseName={docs[i].title}
                    courseNumber={docs[i].title}
                    deleteDoc={deleteDoc}
                    index={i}
                />
            </Grid>
        )
    });

    const style = {
        height: '670px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: '#F7F7F7',
    };
    const classes = useStyles();
    if(disable) {
        return (<div></div>)
    } else {
        return (
            <div style={style}>
                <Grid
                    container
                    width="100%"
                    zeroMinWidth
                    spacing={9}
                    wrap='wrap'
                    direction="row"
                >
                    {cardComponent}
                    <Grid item>
                        <CardActionArea>
                            <Card className={classes.addButton}>
                                <div className={classes.placeholder}></div>
                                <img src={PlusIcon} alt="" height="35px"/>
                            </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CardList;