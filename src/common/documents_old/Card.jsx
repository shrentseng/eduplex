import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 154,
    height: 200
  },
  media: {
    height: 200
  },
  content: {
      width: 154,
      height: 100
  }
});

export default function CustomizedCard({name, description}) {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://www.pinclipart.com/picdir/middle/105-1051950_key-gpl-documents-guelph-library-project-transparent-documents.png"
            title="Contemplative Reptile"
            />
        </CardActionArea>
        </Card>
        <CardContent className={classes.content}>
            <Typography noWrap gutterBottom variant="h6" component="h2">
                {name}
            </Typography>
            <Typography noWrap variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
        </CardContent>
    </div>
  );
}
