import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
	card: {
		display: 'flex',
		alignItems: 'center',
		width: '11.25rem',
		height: '11.25rem',
		border: '2px solid #C4C4C4',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		position: 'relative',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		padding: '24px 0px',
	},
	deleteButton: {
		position: 'absolute',
		top: '0.1rem',
		right: '0.1rem',
	},
}));

function CourseCard(props) {
	const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    
    return (
        <div>
            <Card className={classes.card}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
			>		

				{isShown && (
					<IconButton className={classes.deleteButton} onClick={(event) => { props.deleteCourse(props.index) }}>
						<DeleteIcon fontSize="small"/>
					</IconButton>
				)}
				<CardContent className={classes.content}>
					<Typography variant="h5">
						{props.courseTitle}
					</Typography>
					<Typography variant="h5">
						{props.courseNumber}
					</Typography>
				</CardContent>
            </Card>
        </div>
    );
}

export default CourseCard;

