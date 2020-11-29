import React from "react";
import Document from "./Document.jsx"

const Documents = (props) => {
    return props.documents.map((details) => {
        return(
            <Document
                username={details.username}
                university={details.univserity}
                course={details.course}
                title={details.title}
                academicTerm={details.academicTerm}
                academicYear={details.academicYear}
                category={details.category}
                description={details.description}
                key={details.key}
            />
        )
    })
};

export default Documents