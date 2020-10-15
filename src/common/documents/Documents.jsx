import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { makeStyles } from '@material-ui/core/styles';

import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';

import DocumentsList from './DocumentsList';
import DocumentsGrid from './DocumentsGrid';
// import ListIcon from '../../assets/ListIcon.svg';
// import GridIcon from '../../assets/GridIcon.svg';

const useStyles = makeStyles({
    root: {
        margin: '1rem',
    },
    upper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    icons: {
        alignSelf: 'center',
        marginRight: '1rem',
        color: '#C4C4C4',
        '& svg': {
            width: '2.5rem',
            height: '2.5rem',
            padding: '0.5rem',
            '&:hover': {
                backgroundColor: '#EBEBEB',
                borderRadius: '50%',
            },
        },
    },
    iconsActive: {
        color: '#555555',
    },
    select: {
        width: '13rem',
    }
})



const options = [
	{ value: '1', label: 'Most Recent' },
    { value: '2', label: 'Most Downloads' },
    { value: '3', label: 'Courses' },
]

function Documents() {

    const classes = useStyles();
    const [isGrid,  setIsGrid] = useState(true);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        let temp = [
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 0,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 1,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 2,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 3,
            },
            {
                "username": "Brad Pitt",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 4,
            },
        ]
        setDocuments(temp);
    }, [])

    const handleSelectChange = () => {

    }

    const handleGridClick = () => {
        setIsGrid(true)
    }

    const handleListClick = () => {
        setIsGrid(false)
    }
    

    return (
        <div className={classes.root} >
            {/* upper section */}
            <div className={classes.upper}>
                {/* display button */}
                <div className={classes.icons}>
                    <AppsIcon 
                        className={isGrid ? classes.iconsActive : null} 
                        onClick={(handleGridClick)} 
                    />
                    <ReorderIcon 
                        className={isGrid ? null : classes.iconsActive} 
                        onClick={handleListClick} 
                    />
                </div>
                {/* sort by */}
                <div>
                    <Select 
                        className={classes.select}
                        onChange={value => handleSelectChange(value)} 
                        options={options}
                        placeholder="Sort by"
                        isSearchable={false}
                    />
                </div>
            </div>
            {/* render documents */}
            <div>
                {isGrid ? <DocumentsGrid documents={documents} /> : <DocumentsList documents={documents} />}
            </div>

        </div>
    )
}

export default Documents;


