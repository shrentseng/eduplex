import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Document from './Document.jsx';
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
                "academicQ": "Spring",
                "academicY": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 0,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicQ": "Spring",
                "academicY": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 1,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicQ": "Spring",
                "academicY": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 2,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicQ": "Spring",
                "academicY": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 3,
            },
            {
                "username": "Jim Corey",
                "univserity": "UCLA",
                "course": "PHYSICS 101",
                "title": "Theory of Relativity",
                "academicQ": "Spring",
                "academicY": 2020,
                "category": "Essay",
                "description": "A theory developed by Albert Einstein–the greatest scienctist.",
                "key": 4,
            },

            ]
        };
    }

    renderCourse(docs)
    {
        const { classes } = this.props;
        console.log(docs);
        if (docs.length === 0) {
            return (
                <div>
                    <Typography className={classes.noCourse}>No Courses Found</Typography>
                </div>
            )
        }
        else {
            return docs.map((details) => {
                return <Document
                    username={details.username}
                    university={details.univserity}
                    course={details.course}
                    title={details.title}
                    academicQ={details.academicQ}
                    academicY={details.academicY}
                    category={details.category}
                    description={details.description}
                    key={details.key}
                />
        })}
    }
    
      render() {
        const { classes } = this.props;

        const docs = this.state.docs.filter(doc => {
            return doc.title.toLowerCase().includes(this.props.searchValue.toLowerCase());
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
                  {this.renderCourse(docs)}
              </div>
          </div>
        );
      } 
}

export default withStyles(styles)(DocumentResults);