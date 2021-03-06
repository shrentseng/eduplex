import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DocPic from "../../assets/document.svg";
import Download from "../../assets/download.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        margin: "0.5rem",
        marginBottom: "1rem",
    },
    grid: {
        display: "flex",
        margin: "1rem",
    },
    title: {
        display: "flex",
        flexDirection: "row",
        fontWeight: 600,
    },
    text: {
        display: "flex",
        flexDirection: "column",
    },
}));

const DocumentList = (props) => {
    const classes = useStyles();
    const [download, setDownload] = React.useState(0);

    const handleDownload = () => {
        setDownload(download + 1);
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3} style={{ width: "100%" }}>
                <div className={classes.grid}>
                    <Grid sm={2}>
                        <img src={DocPic} />
                    </Grid>
                    <Grid sm={10} className={classes.text}>
                        <div className={classes.title}>
                            <Typography style={{ fontWeight: 600 }}>
                                {props.title}
                            </Typography>
                            <img
                                src={Download}
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "1rem",
                                }}
                                onClick={handleDownload}
                            />
                            <Typography>{download}</Typography>
                        </div>
                        <div>
                            <Typography>
                                {props.username} | {props.university}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                Description... {props.description}
                            </Typography>
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <Typography>
                                {props.academicTerm} {props.academicYear}
                            </Typography>
                        </div>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
};

export default DocumentList;
