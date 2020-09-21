import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';


const useStyles = makeStyles({
    root: {
        margin: '1rem',
    },
    preview: {
        height: '11rem',
        width: '8.5rem',
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: '#EBEBEB',
            display: 'grid',
            placeItems: 'center',
        },
    }
})

function DocumentsGrid({ document }) {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={classes.root}>
            {/* document preview */}
            <div
                className={classes.preview}
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered(!isHovered)}
            >
                {isHovered ? 
                    <GetAppIcon /> : null
                }
            </div>
            {/* document title */}
            <div>
                <h5>{document.title}</h5>
                <h6>{document.course}</h6>
            </div>
        </div>
    )
}

export default DocumentsGrid;
