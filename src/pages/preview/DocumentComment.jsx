import React from 'react'
import { Paper, TextField} from '@material-ui/core'

const DocumentPreview = () => {
    return(
        <div>
            <Paper>
                username
            </Paper>
            <Paper>
                username
            </Paper>
            <TextField multiline InputProps={{ disableUnderline: true}} placeholder="Type your comment... ">

            </TextField>
        </div>
    )
}
export default DocumentPreview;