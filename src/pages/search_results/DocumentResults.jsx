import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Documents from './Documents.jsx';
import Filter from './Filter.jsx';

const styles = theme => ({
    root:{
        marginLeft:'4rem',
    },
    search:{
      margin:'0.5rem',
      fontSize:'1.8em',
      fontWeight:'500',
    },
    noDocument:{
        margin:'1.5rem',
        textAlign:"center",
        color:'#7C7C7C',
        fontSize:'1.5em',
    },
});

class DocumentResults extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            docs: [{
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 0,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 1,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 2,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 3,
            },
            {
                "username": "Brad Pitt",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicTerm": "Spring",
                "academicYear": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 4,
            },]
        };
    }

    renderDoc(docs)
    {
        const { classes } = this.props;
        if (docs.length === 0) {
            return (
                <div>
                    <Typography className={classes.noDocument}>No Documents Found</Typography>
                </div>
            )
        }
        else {
            return <Documents documents={docs}/>
        }
    }
    
      render() {
        const { classes } = this.props;

        const searchField = this.props.searchValue;
        const docs = this.state.docs.filter(doc => {
            return (
                (doc.title.toLowerCase().includes(searchField.toLowerCase())) || 
                (doc.username.toLowerCase().includes(searchField.toLowerCase())) ||
                (doc.description.toLowerCase().includes(searchField.toLowerCase()))
            );
        });
        
        return (
          <div className={classes.root}>
              <div>
                  <Typography className={classes.search}>Search Results</Typography>
              </div>
              <div>
                  <Filter />
              </div>
              <div>
                  {this.renderDoc(docs)}
              </div>
          </div>
        );
      } 
}

export default withStyles(styles)(DocumentResults);