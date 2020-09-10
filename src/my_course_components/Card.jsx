import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  
root: {
    width: 180,
    height: 180,
    border: '2px solid #C4C4C4',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
},
content: {
    width: 136,
    color: '#535353',
    marginTop: '-10px',
},

text: {
    textAlign: 'center',
    fontSize: '18px',
},

courseName: {
    fontWeight: 600,
},

actionArea: {
    height: '180px',
},

delete: {
    marginLeft: theme.spacing(15),
    marginTop: '-180px',
},

}));

export default function CustomizedCard({courseName, courseNumber, deleteDoc, index}) {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <CardActionArea className={classes.actionArea}>
                    <CardContent className={classes.content}>
                        <Typography noWrap className={classes.text}>
                        {courseName}
                        </Typography>
                        <Typography noWrap className={`${classes.courseName} ${classes.text}`}>
                        {courseNumber}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.delete}>
                    {isShown && (
                        <IconButton onClick={(event) => { deleteDoc(index) }}>
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                    )}
                </CardActions>
            </Card>
        </div>
    );
}