import TextField from '@material-ui/core/TextField';
import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DropMenu from './DropMenu';
import './SearchBox.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: '100%'
        },
    },
    input: {
        height: '30px',
        marginLeft: '2px',
        borderRadius: '0px 5px 5px 0px'
    }
}));

export default function SearchBox({searchChange}) {
    const classes = useStyles();
    const textInput = useRef();
    return (
        <div className="container">
            <DropMenu/>
            <form 
                className={classes.root}
                noValidate
                autoComplete="off" 
            >
                <TextField 
                    id="outlined-basic" 
                    placeholder="Search for documents"
                    variant="outlined"
                    inputRef={textInput}
                    InputProps={{className: classes.input}}
                />
            </form>
        </div>
    );
}

