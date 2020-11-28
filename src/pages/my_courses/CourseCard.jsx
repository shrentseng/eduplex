import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import Fade from '@material-ui/core/Fade';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UserContext from "../../context/user/userContext";
import CourseContext from "../../context/course/courseContext";

const useStyles = makeStyles(() => ({
    card: {
        display: "grid",
        placeItems: "center",
        width: "11.25rem",
        height: "11.25rem",
        border: "2px solid #C4C4C4",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        position: "relative",
    },
    deleteButton: {
        position: "absolute",
        top: "0.1rem",
        right: "0.1rem",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        height: '150px',
        width: '350px',
        padding: '1rem',   
        backgroundColor: '#ffffff',
        border: '1px solid #E5E5E5',
        borderRadius: '5px 5px 5px 5px',
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        '& button': {
            margin: '3rem 0.5rem 0.5rem 0.5rem',
            border: '1px solid #E5E5E5',
            borderRadius: '5px 5px 5px 5px',
        }
    }
}));

function CourseCard(props) {
    const classes = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isShown, setIsShown] = useState(false);
    const userContext = useContext(UserContext);
    const courseContext = useContext(CourseContext);

    const handleDeleteCourse = () => {
        courseContext.deleteCourse({
            userID: userContext.userID,
            courseID: props.courseID,
        });
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const renderModal = (
        <div className={classes.paper}>
            <span>Are you sure you want to un-enroll?</span>
            <button onClick={handleModalClose}>Cancel</button>
            <button onClick={handleDeleteCourse}>Yes, delete</button>
        </div>
    );

    return (
        <div>
            <Card
                className={classes.card}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {isShown && (
                    <IconButton
                        className={classes.deleteButton}
                        onClick={handleModalOpen}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                )}
                <CardContent>
                    <Typography variant="h5">{props.courseNumber}</Typography>
                </CardContent>
            </Card>
            <Modal
                className={classes.modal}
                open={isModalOpen}
                onClose={handleModalClose}
            >
                <Fade in={isModalOpen}>
                    {renderModal}
                </Fade>
            </Modal>
        </div>
    );
}

export default CourseCard;
