import React, { useState, useEffect } from 'react';
import { makeStyles,  } from '@material-ui/core/styles';

import DocumentGrid from './DocumentGrid';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1rem',
    },
})

function DocumentsGrid({ documents }) {
    const classes = useStyles();



    const renderDocuments = (documents) => {
        //console.log(documents);
        if (documents.length === 0) {
            return <div>No Feed</div>
        } else {
            return documents.map((document) => {
                return <DocumentGrid
                    document={document}
                />
            })
        }
    }

    return (
        <div className={classes.root}>{renderDocuments(documents)}</div>
    )
}

export default DocumentsGrid;
