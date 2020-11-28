import React, { useContext, useState } from "react";
import SimpleComment from "./SimpleComment.jsx";
import DocumentsContext from "../../context/document/documentsContext";
import UserContext from "../../context/user/userContext";
import { TextField } from "@material-ui/core";

const DocumentComments = () => {
    const documentsContext = useContext(DocumentsContext);
    const userContext = useContext(UserContext);
    const [content, setContent] = useState("");

    const renderComments = (comments) => {
        console.log(documentsContext.currentDocument)
        /*return comments.map((details, i) => {
            if (i < 2) {
                return (
                    <SimpleComment
                        username={details.UserName}
                        content={details.Content}
                        key={i}
                    />
                );
            }
        });*/
    };
    const onKeyPress = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            documentsContext.addComment({
                userID: userContext.userID,
                documentID: documentsContext.currentDocument.documentID,
                message: content,
            });
            setContent("");
        }
    };

    return (
        <div>
            {renderComments(documentsContext.currentDocument.Comment)}
            <div>
                <TextField
                    variant="outlined"
                    style={{
                        marginLeft: "0.5rem",
                        marginBottom: "0.5rem",
                        width: "95%",
                        height: "120%",
                        borderStyle: "none",
                        borderColor: "Transparent",
                        overFlow: "auto",
                    }}
                    type="text"
                    placeholder="Comment... "
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    onKeyDown={onKeyPress}
                />
            </div>
        </div>
    );
};

export default DocumentComments;
