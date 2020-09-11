import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CourseCard from './CourseCard';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import PlusIcon from '../../assets/plus.png';

const useStyles = makeStyles(() => ({
    root: {
        height: '670px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: '#F7F7F7',
        '& button': {
            outline: 'none',
        },
    },
    card: {
        display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		width: '11.25rem',
		height: '11.25rem',
		border: '2px solid #C4C4C4',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    placeholder: {
        height: 73,
    }
}));

function CourseList() {

    const classes = useStyles();
    const [courses, setCourses] = useState([
        {
            'title': 'Math',
            'number': '170E',
            'key': 0,
        },
        {
            'title': 'Math',
            'number': '170S',
            'key': 1,
        },
        {
            'title': 'Computer Science',
            'number': '180',
            'key': 2,
        },
        {
            'title': 'Computer Science',
            'number': '35L',
            'key': 3,
        },
        {
            'title': 'History',
            'number': '101A',
            'key': 4,
        },
    ]);

    const onDeleteCourse = (index) => {
        let temp = [...courses];
        temp.splice(index, 1);
        setCourses(temp);
    }

    const cardComponent = courses.map((course, i) => {
        return (
            <Grid item key={i}>
                <CourseCard
                    courseTitle={course.title}
                    courseNumber={course.number}
                    deleteCourse={onDeleteCourse}
                    index={i}
                />
            </Grid>
        )
    });
    
    return (
        <div className={classes.root}>
            <Grid
                container
                width="100%"
                zeroMinWidth
                spacing={9}
                wrap='wrap'
                direction="row"
            >
                {cardComponent}
                <Grid item>
                    <CardActionArea>
                        <Card className={classes.card}>
                            <div className={classes.placeholder}></div>
                            <img src={PlusIcon} alt="" height="35px"/>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );
    
}

export default CourseList;