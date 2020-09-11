import React, {useState, useEffect} from 'react';
import GridOrList from './GridOrList';
import CardList from './CardList';
import ListView from './ListView';

function Documents() {

    const [documents, setDocuments] = useState([]);
    const [grid, setGrid ] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
		.then(response => response.json())
        .then(docs => setDocuments(docs));
    })
    
    const onClickGrid = () => {
        setGrid(true);
    }

    const onClickList = () => {
        setGrid(false);
    }

    return (
        <div>
            <GridOrList onClickGrid={onClickGrid} onClickList={onClickList} grid={grid}/>
            { grid ? <CardList docs={documents}/> : 
                    <ListView docs={documents}/>
            }
        </div>
    )
}

export default Documents
