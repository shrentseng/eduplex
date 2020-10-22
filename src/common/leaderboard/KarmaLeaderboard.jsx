import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/avatar.svg';
import trophy1 from '../../assets/trophy1.svg';
import trophy2 from '../../assets/trophy2.svg';
import trophy3 from '../../assets/trophy3.svg';
import trophy4 from '../../assets/trophy4.svg';
import trophy5 from '../../assets/trophy5.svg';

const useStyles = makeStyles(() => ({
	root: {
        margin: '2rem 2rem 1rem 2rem',
    },
    title: {
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px 5px 0px 0px',
        width: '15.875rem',
        height: '2.5rem',
        backgroundColor: '#0088D7',
        marginBottom: '0.4rem',
        boxShadow: '4px 6px 6px rgba(0, 0, 0, 0.25)',
    },
    list: {
        borderRadius: '0px 0px 5px 5px',
        width: '15.875rem',
        height: '19.75rem',
        backgroundColor: '#FFFFFF',
        boxShadow: '4px 6px 6px rgba(0, 0, 0, 0.25)',
    },
    listItem: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        padding: '1rem 1.5rem 0 1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    avatar: {
        height: '1.9rem',
        width: '1.9rem',
        marginRight: '1rem',
    },
    line: {
        width: '100%',
        color: '#E5E5E5',
        margin: '1rem 0 0 0',
        gridColumnStart: '1',
        gridColumnEnd: '5',
    }
}));

function KarmaLeaderboard ({ title, users }) {
    const classes = useStyles();
    const trophies = [trophy1, trophy2, trophy3, trophy4, trophy5]

    const listUsers = users.map((user, i) =>
        <div className={classes.listItem}>
            <Avatar className={classes.avatar} src={avatar} />
            <div style={{marginRight: '1rem'}}>
                <Typography variant="h3">{users[i]}</Typography>
                <Typography variant="h4">10,598 Points</Typography>
            </div>
            <img src={trophies[i]} />
            {i != users.length - 1 &&
                <hr className={classes.line} />
            }
        </div>
    );

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h2">{title}</Typography>
            </div>
            <div className={classes.list}>
                {listUsers}
            </div>
            
        </div>
    )
}

export default KarmaLeaderboard;
