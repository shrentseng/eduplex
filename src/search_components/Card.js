import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 180,
    height: 180,
    border: '1px solid #D3D3D3'
  },
});

export default function CustomizedCard({name, number}) {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root}>
          <CardActionArea className={classes.root}>
            <CardContent>
                  <Typography align={'center'} noWrap style={{fontSize:'18px'}}>
                      {number}
                  </Typography>
                  <Typography align={'center'} noWrap variant="h5" style={{marginBottom: '50px', fontSize:'18px'}}>
                      {name}
                  </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
  );
}
