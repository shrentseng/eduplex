import React from 'react'
import { Paper, TextField, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import SimpleComments from "./SimpleComment.jsx"

const comments = [
    {
        "username":"Morris",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "key": 0,
    },
    {
        "username":"Phuoc",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "key": 1,
    },
]

const renderComments = () =>{
    return comments.map((details) => {
        return <SimpleComments
            username={details.username}
            content={details.content}
            key={details.key}
            />
    })
}

const SimilarComments = () => {
    return(
        <div>
            {renderComments()}
        </div>
    )
}

export default SimilarComments;