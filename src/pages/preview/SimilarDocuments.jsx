import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        display: "grid",
        gridTemplateColumns:"25%",
    },
}))

const SimilarDocuments = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper>
                Document
            </Paper>
            <Paper>
                Document
            </Paper>
            <Paper>
                Document
            </Paper>
            <Paper>
                Document
            </Paper>
        </div>
    )
}
export default SimilarDocuments;