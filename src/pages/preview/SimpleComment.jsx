import React from 'react'
import { Paper, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/avatar.svg';

const useStyles = makeStyles(() => ({
    root:{
        margin:"0.5rem",
    },
    paper:{
        padding:'0.5rem',
    },
    userInfo:{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
    },
    avatar: {
        height: '1.9rem',
        width: '1.9rem',
        marginRight: '1rem',
    },
}))

const SimpleComment = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
                <div className={classes.userInfo}>
                    <Avatar className={classes.avatar} src={avatar} />
                    <Typography style={{color:"#365E7D"}}>{props.username}</Typography>
                    <Typography variant='h6' style={{margin:'0 0.4em',color:"#8B8B8B"}}>•</Typography>
                    <Typography variant='h6' style={{color:"#8B8B8B"}}>{'5 mins ago'}</Typography>
                </div>
                <div style={{margin:'0.2rem'}}>
                    <Typography variant='h6' style={{color:"#8B8B8B"}}>{props.content}</Typography>
                </div>
            </Paper>
        </div>
    )
}
export default SimpleComment;