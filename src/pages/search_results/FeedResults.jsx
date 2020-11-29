import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "./Filter.jsx";
import Feeds from "../../pages/homepage/Feeds";

const useStyles = makeStyles(() => ({
    root: {},
}));

const FeedResults = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Filter />
            </div>
            <div>
                <Feeds />
            </div>
        </div>
    );
};

export default FeedResults;
