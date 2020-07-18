import React from 'react';
import Button from '@material-ui/core/Button';
import './PostButtons.css';

export default function PostButtons() {
    return (
        <div className='buttons'>
            <Button
                disableElevation
                variant='contained'
                size="small"
                style={{marginTop:'10px', backgroundColor:'#E5E5E5', width:'98%'}}
            >
                <div className='text-font'>My Posts</div>
            </Button>
            <Button
                disableElevation
                variant='contained'
                size="small"
                style={{marginTop:'10px', backgroundColor:'#D2F0D4', width:'98%'}}
            >
                <div className='text-font' style={{color:'#569859', fontWeight: 550}}>Uploaded Documents</div>
            </Button>
            <Button
                disableElevation
                variant='contained'
                size="small"
                style={{marginTop:'10px', backgroundColor:'#E5E5E5', width:'98%'}}
            >
                <div className='text-font'>Saved Documents</div>
            </Button>
        </div>
    )
}