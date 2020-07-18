import React from 'react';
import Button from '@material-ui/core/Button';
import DropMenu from './DropMenu';
import './PostButtons.css';

export default function PostButtons() {
    return (
        <div className='buttons-course'>
            <Button
                disableElevation
                variant='contained'
                size="small"
                style={{marginTop:'10px', backgroundColor:'#E5E5E5', width:'98%'}}
            >
                <div className='text-font'>Discussion</div>
            </Button>
            <DropMenu/>
        </div>
    )
}