import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Enter from "../../assets/enter.svg";
import DocumentsContext from "../../context/document/documentsContext";
import UserContext from "../../context/user/userContext";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
    },
    upper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1.5rem",
        "& *": {
            margin: "0.5rem 0",
        },
    },
    lower: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        "& form": {
            marginTop: "1.5rem",
            width: "62rem",
            "& input": {
                margin: "0.25rem 0 0.5rem 0",
                width: "100%",
                height: "2.5rem",
                border: "1px solid #E5E5E5",
                borderRadius: "5px 5px 5px 5px",
                outline: "none",
            },
            "& input::placeholder": {
                fontFamily: "Roboto",
                color: "#9A9A9A",
                fontSize: "1.125rem",
                fontWeight: "400",
            },
        },
        "& h5": {
            marginTop: "0.5rem",
        },
    },
    dropzone: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "5rem",
        border: "1px solid #E5E5E5",
        borderRadius: "5px 5px 5px 5px",
    },
    description: {
        resize: "both",
        width: "60rem",
        height: "8rem",
        border: "1px solid #E5E5E5",
        borderRadius: "5px 5px 5px 5px",
        outline: "none",
    },
    checkbox: {
        height: "1.124rem",
    },
    submit: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "50px",
        margin: "auto",
        color: "#FFFFFF",
        width: "12rem",
        height: "3rem",
        border: "none",
        background: "#0088D7",
        borderRadius: "5px 5px 5px 5px",
    },
}));

const DocumentUpload = () => {
    const classes = useStyles();
    const userContext = useContext(UserContext);
    const documentsContext = useContext(DocumentsContext);
    const [userInput, setUserInput] = useState({
        username: "",
        university: "",
        course: "",
        title: "",
        documents: [],
        academicTerm: "",
        academicYear: "",
        category: "",
        description: "",
        isAnonymous: false,
    });

    const handleInputChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("originalFile", acceptedFiles[0]);
        formData.append("userID", userContext.userID);
        formData.append("title", userInput.title);
        formData.append("courseID", "0");
        formData.append("universityID", "0");
        formData.append("academicYear", userInput.academicYear);
        formData.append("semester", userInput.academicTerm);
        formData.append("type", userInput.category);
        formData.append("description", userInput.description);
        formData.append("anonymous", userInput.isAnonymous);
        documentsContext.uploadDocument(formData);
        //fetch POST
    };

    return (
        <div className={classes.root}>
            <div className={classes.upper}>
                <Typography variant="h2">Upload Document</Typography>
                <Typography variant="h3">
                    Share a document and earn 50 EduPoints
                </Typography>
                <Typography variant="h4">View Upgrade Options</Typography>
            </div>
            <div className={classes.lower}>
                <form>
                    <Typography variant="h5">University</Typography>
                    <input
                        placeholder="Enter the university name"
                        name="university"
                        value={userInput.university}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h5">Course</Typography>
                    <input
                        placeholder="Enter the course name"
                        name="course"
                        value={userInput.course}
                        onChange={handleInputChange}
                    />
                    {/* dropzone */}
                    <div>
                        <div className={classes.dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Typography variant="h6">
                                Drag 'n' drop, or click to select files
                            </Typography>
                        </div>
                        <aside>
                            <span>
                                <strong>Files</strong> note: Use ctrl or shift to upload multiple
                                files
                            </span>

                            <ul>{files}</ul>
                        </aside>
                    </div>

                    {/* end dropzone */}
                    <Typography variant="h5">Title</Typography>
                    <input
                        placeholder="Title"
                        name="title"
                        value={userInput.title}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h5">Academic Year</Typography>
                    <input
                        placeholder="Academic Year"
                        name="academicYear"
                        value={userInput.academicYear}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h5">Category</Typography>
                    <input
                        placeholder="Category"
                        name="category"
                        value={userInput.category}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h5">Description</Typography>
                    <textarea
                        className={classes.description}
                        name="description"
                        value={userInput.description}
                        onChange={handleInputChange}
                    />
                    <br />
                    <FormControlLabel
                        name="anonymous"
                        value={userInput.isAnonymous}
                        control={<Checkbox color="primary" />}
                        label="Make upload anonymous"
                        labelPlacement="end"
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        <img
                            src={Enter}
                            style={{ height: "20px", margin: "10px" }}
                        />
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DocumentUpload;
