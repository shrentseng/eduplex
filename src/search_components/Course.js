import React from 'react';
import CardList from './CardList'
import Icon from '@material-ui/core/Icon';
import Polygon from '../assets/polygon.svg'

export default function Course({docs}) {
    const courses = docs.slice(0, 4);
    return (
        <div>
            <p style={{fontSize: '32px'}}>Course</p>
            <CardList docs={courses}/>
            <a href="/#" style={{fontSize:'16px', color:'black', display:'flex', justifyContent:'flex-end'}}>
                More in Courses
                <Icon>
                    <img src={Polygon} alt="" height="50%" style={{margin:'6px 0px 0px 4px'}}/>
                </Icon>
            </a>
        </div>
    )
}