import React, {useContext} from 'react'
import SimpleDoc from './SimpleDocument.jsx'
import DocumentContext from '../../context/document/documentsContext'


const renderDoc = (documents) =>{
    return documents.map((details,i) => {
        return <SimpleDoc
            name={details.title}
            key={i}
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