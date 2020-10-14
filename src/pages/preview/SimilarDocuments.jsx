import React from 'react'
import SimpleDoc from './SimpleDocument.jsx'

const documents = [
    {"docName":"Theory of Relativity"},
    {"docName":"Pride and Prejudice"},
    {"docName":"Alexander the Great"},
    {"docName":"Calculus III"}
]

const renderDoc = () =>{
    return documents.map((details) => {
        return <SimpleDoc
            name={details.docName}
            />
    })
}
const SimilarDocuments = () => {

    return(
        <div>
            {renderDoc()}
        </div>
    )
}
export default SimilarDocuments;