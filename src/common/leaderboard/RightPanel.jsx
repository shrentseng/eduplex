import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme_leaderboard } from '../../common/theme';
import KarmaLeaderboard from './KarmaLeaderboard';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
        marginLeft: '2rem',
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
        <ThemeProvider theme={theme_leaderboard}>
            <div className={classes.root}>
                <KarmaLeaderboard title={"Weekly Karma Leaders"} users={weeklyUsers} />
                <KarmaLeaderboard title={"Monthly Karma Leaders"} users={monthlyUsers} />
            </div>
        </ThemeProvider>
    )
}

export default RightPanel;
