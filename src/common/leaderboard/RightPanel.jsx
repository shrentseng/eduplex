import React, { useState } from 'react';


import KarmaLeaderboard from './KarmaLeaderboard';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
	},
}));

function RightPanel() {

    const classes = useStyles();
    const [weeklyUsers, setWeeklyUsers] = useState([
        'Phuoc',
        'Morris',
        'Vanessa',
        'Alice',
        'Cindy',
    ]);
    const [monthlyUsers, setMonthlyUsers] = useState([
        'Phuoc',
        'Morris',
        'Vanessa',
        'Alice',
        'Cindy',
    ]);

    return (
        <div className={classes.root}>
            <KarmaLeaderboard title={"Weekly Karma Leaders"} users={weeklyUsers} />
            <KarmaLeaderboard title={"Monthly Karma Leaders"} users={monthlyUsers} />
        </div>
    )
}

export default RightPanel;
