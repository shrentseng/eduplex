import React from 'react';
import './ProfileTag.css';
import Button from '@material-ui/core/Button';

export default function ProfileTag(user) {
    return (
        <div className="course">
            <div className="info">
                <h1 style={{borderTop:'3px', marginBottom: '4px', fontWeight: 'normal'}}>Course 1</h1>
            </div>
            <div className="left">
                <Button
                    disableElevation
                    variant='contained'
                    size="small"
                    style={{marginTop:'10px', backgroundColor:'#D2F0D4', width:'155px', height: '32px'}}
                >
                    <div style={{color:'#569859', fontSize:'12px'}}>Add to My Course</div>
                </Button>
            </div>
        </div>
    )
}