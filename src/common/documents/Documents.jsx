import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Select from "react-select";

import { makeStyles } from "@material-ui/core/styles";

import ReorderIcon from "@material-ui/icons/Reorder";
import AppsIcon from "@material-ui/icons/Apps";

import DocumentsView from "./DocumentsView";

import DocumentsContext from "../../context/document/documentsContext";
import DocumentsProvider from "../../context/document/DocumentsProvider";
// import ListIcon from '../../assets/ListIcon.svg';
// import GridIcon from '../../assets/GridIcon.svg';

const useStyles = makeStyles({
    root: {
        margin: "1rem",
    },
    upper: {
        display: "flex",
        justifyContent: "flex-end",
    },
    icons: {
        alignSelf: "center",
        marginRight: "1rem",
        color: "#C4C4C4",
        "& svg": {
            width: "2.5rem",
            height: "2.5rem",
            padding: "0.5rem",
            "&:hover": {
                backgroundColor: "#EBEBEB",
                borderRadius: "50%",
            },
        },
    },
    iconsActive: {
        color: "#555555",
    },
    select: {
        width: "13rem",
    },
});

const options = [
    { value: "1", label: "Most Recent" },
    { value: "2", label: "Most Downloads" },
    { value: "3", label: "Courses" },
];

const Documents = () => {
    const classes = useStyles();
    const documentsContext = useContext(DocumentsContext);

    const [isGrid, setIsGrid] = useState(true);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        //console.log(documentsContext);
        //setDocuments(temp);
    }, []);

    const handleSelectChange = () => {};

    const handleGridClick = () => {
        setIsGrid(true);
    };

    const handleListClick = () => {
        setIsGrid(false);
    };

    return (
            <div className={classes.root}>
                {/* upper section */}
                <div className={classes.upper}>
                    {/* display button */}
                    <div className={classes.icons}>
                        <AppsIcon
                            className={isGrid ? classes.iconsActive : null}
                            onClick={handleGridClick}
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
                            onChange={(value) => handleSelectChange(value)}
                            options={options}
                            placeholder="Sort by"
                            isSearchable={false}
                        />
                    </div>
                </div>
                {/* render documents */}
                <div>
                    <DocumentsView isGrid={isGrid} />
                </div>
            </div>
    );
};

export default Documents;
