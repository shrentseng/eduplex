import React from 'react';
import CustomizedCard from './Card';
import Grid from '@material-ui/core/Grid';

const CardList = ({ docs }) => {
    const style = {
        height: "650px",
        overflowY: 'scroll',
        // border: '2px solid black',
        overflowX: 'hidden'
    };
    const cardComponent = docs.map((name, i) => {
        return (
            <Grid item key={i}>
                <CustomizedCard
                name={docs[i].title}
                description={docs[i].title}
                />
            </Grid> 
        )
    });
    
    
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
            </Grid>
        </div>
        
    );
    
}

export default CardList;