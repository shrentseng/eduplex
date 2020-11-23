import React, {useContext} from 'react'
import SimpleDoc from './SimpleDocument.jsx'
import DocumentContext from '../../context/document/documentsContext'


const renderDoc = (documents) =>{
    return documents.map((details) => {
        return <SimpleDoc
            name={details.Title}
            />
    }
)}

const SimilarDocuments = () => {
    const documentContext = useContext(DocumentContext)
    return(
        <div>
            {renderDoc(documentContext.currentSimilarDocuments)}
        </div>
    )
}
export default SimilarDocuments;