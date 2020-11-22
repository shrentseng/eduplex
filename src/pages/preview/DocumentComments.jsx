import React, {useContext, useState} from 'react'
import SimpleComments from "./SimpleComment.jsx"
import DocumentContext from "../../context/document/documentsContext"
import UserContext from '../../context/user/userContext'
import { TextField } from '@material-ui/core'

const renderComments = (comments) =>{
    return (comments.map((details,i) => {
        if(i<2)
        {
            return <SimpleComments
                username={details.UserName}
                content={details.Content}
                key={i}
                />
        }
    }))
}

const DocumentComments = () => {
    const documentContext = useContext(DocumentContext);
    const userContext = useContext(UserContext);
    const [content, setContent] = useState("");

    const onKeyPress = (e) => {
        if(e.keyCode === 13 && e.target.value)
        {
            documentContext.addComment({
                User_id: userContext.userID,
                Document_id: documentContext.currentDocument.key,
                Message: content,
                })
            setContent("");
        }
    }

    return(
        <div>
            {renderComments(documentContext.currentDocument.Comment)}
            <div>
                <TextField
                    variant="outlined"
                    style={{marginLeft:"0.5rem", marginBottom:"0.5rem", width:"95%", height:"120%", borderStyle:"none", borderColor: "Transparent", overFlow: "auto",}}
                    type="text" 
                    placeholder="Comment... " 
                    value={content} 
                    onChange={event => setContent(event.target.value)}
                    onKeyDown={onKeyPress}
                />
            </div>
        </div>
    )
}

export default DocumentComments;