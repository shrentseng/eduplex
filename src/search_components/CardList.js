import React from 'react';
import CustomizedCard from './Card';
import Grid from '@material-ui/core/Grid';

const CardList = ({ disable, docs }) => {
    const cardComponent = docs.map((name, i) => {
        return (
            <Grid item key={i}>
                <CustomizedCard
                name={docs[i].title}
                number={docs[i].id}
                />
            </Grid> 
        )
    });
    const style = {
        overflowY: 'scroll',
        // border: '2px solid black',
        overflowX: 'hidden'
    };
    if(disable) {
        return (<div></div>)
    } else {
        return (
            <div style={style}>
                <Grid
                    container
                    width="100%"
                    spacing={9}
                    wrap='wrap'
                    direction="row"
                >
                    {cardComponent}
                </Grid>
            </div>
            
        );
    }
}

export default CardList;