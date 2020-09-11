import TextField from '@material-ui/core/TextField';
import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: '100%'
        },
    },
    input: {
        height: 30
    }
}));

export default function SearchBox({searchChange}) {
    const classes = useStyles();
    const textInput = useRef();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                placeholder="Search for documents"
                variant="outlined"
                inputRef={textInput}
                onChange={() => searchChange(textInput.current.value)}
                InputProps={{className: classes.input}}
            />
        </form>
    );
}

