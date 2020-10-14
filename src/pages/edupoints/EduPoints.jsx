import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddPostIcon from '../../assets/add-post.svg';
import CreateCourseIcon from '../../assets/create-course.svg';
import ReceiveCommentIcon from '../../assets/receive-comment.svg';
import ReceiveDownloadIcon from '../../assets/receive-download.svg';
import ReceiveUpvoteIcon from '../../assets/receive-upvote.svg';
import ReferFriendIcon from '../../assets/refer-friend.svg';
import UploadDocIcon from '../../assets/upload-doc.svg';
import UploadIcon from '../../assets/upload.svg';



const useStyles = makeStyles((theme) => ({
root: {
  padding: 30,
  backgroundColor: '#F7F7F7',
},
title: {
  fontSize: 36,
  color: '#0088D7',
  fontWeight: 500,
  marginBottom: theme.spacing(1),
},
subtitle: {
  fontSize: 24,
  marginBottom: 50,
  color: '#000000'
},

buttons: {
  height: 40,  
  backgroundColor: '#5ACA7F',
  color: 'white',
},
uploadButton: {
  width: '27%',
  marginLeft: '35%',
},
upgradeButton: {
  width: '45%',
  marginLeft: '27%'
},
list1: {
  backgroundColor: '#ffffff',
  marginLeft: '13%',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  borderRadius: '0px 0px 5px 5px',
},
list2: {
  backgroundColor: '#ffffff',
  padding: 10,
  borderRadius: '0px 0px 5px 5px',
},
blueBar1: {
  height: 10,
  backgroundColor: '#0088D7',
  marginTop: -10,
  marginRight: theme.spacing(6),
  marginLeft: '13%',
  borderRadius: '5px 5px 0px 0px',
},
icons: {
  marginLeft: 30,
},
uploadIcon: {
  marginRight: 5,
  marginBottom: 3,
}
}));

function EduPoints() {
  const classes = useStyles();

  const methodList = [
  {
    "methodName": "Upload a document",
    "pointsNum": 50,
    "icon": UploadDocIcon
  },
  {
    "methodName": "Add a new post",
    "pointsNum": 15,
    "icon": AddPostIcon
  },
  {
    "methodName": "Receive a comment",
    "pointsNum": 10,
    "icon": ReceiveCommentIcon
  },
  {
    "methodName": "Receive an upvote",
    "pointsNum": 10,
    "icon": ReceiveUpvoteIcon
  },
  {
    "methodName": "Create a new course",
    "pointsNum": 15,
    "icon": CreateCourseIcon
  },
  {
    "methodName": "Receive a download",
    "pointsNum": 15,
    "icon": ReceiveDownloadIcon
  },
  {
    "methodName": "Refer a friend",
    "pointsNum": 100,
    "icon": ReferFriendIcon
  }
  ];
  const methodListComponent = methodList.map((name, i) => {
  return (
    <ListItem>
    <Grid container>
      <Grid item xs={2}>
      <ListItemIcon>
        <img src={methodList[i].icon} alt="" height="30" className={classes.icons}/>
      </ListItemIcon>
      </Grid>
      <Grid item xs={6}>
      <ListItemText primary={methodList[i].methodName} className={classes.methodName}/>
      </Grid>
      <Grid item xs={1}>
      <ListItemText primary={methodList[i].pointsNum} className={classes.pointsNum}/>
      </Grid>
      <Grid item xs={1}>
      <ListItemText primary="EduPoints" className={classes.eduPointsText}/>    
      </Grid>
    </Grid>
    
    
    </ListItem>
  )
  });

  
  return (
  <div className={classes.root}>
    <Grid 
    container
    direction="column"
    alignItems="center">
      <Grid item lg={12}>
        <Typography variant="h1" className={classes.title}> 
          How Do EduPoints Work?            
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h3" className={classes.subtitle}>
        Earn EduPoints and Start Downloading Study Materials
        </Typography>
      </Grid>
  
    <Grid container>
      <Grid item md={9} className={classes.blueBar1}></Grid>
      <Grid item md={9} className={classes.list1}>
        <List>
        {methodListComponent}
        </List>
          
        <Button 
        variant="contained"
        disableElevation
        className={`${classes.buttons} ${classes.uploadButton}`}
        startIcon={<img src={UploadIcon} alt="" height="20" className={classes.uploadIcon}/>}
        >
          Upload
        </Button>
        
      </Grid>
    </Grid>
    </Grid>
    
  </div>
  );
}

export default EduPoints;