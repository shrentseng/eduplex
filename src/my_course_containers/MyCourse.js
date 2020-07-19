import React, {Component} from 'react';
import CardList from '../my_course_components/CardList';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  title: {
    fontSize: '26px',
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    background: '#F7F7F7',
  },
});

class MyCourse extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      searchField: ""
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(docs => this.setState({docs}));
  }

  onChangeSearch(newValue) {
    this.setState(state => ({
      searchField: newValue
    }))
  }

  onDeleteDoc = (index) => {
    let temp = this.state.docs;
    temp.splice(index, 1);
    this.setState({docs: temp});
  }

  render() {
    const { classes } = this.props;
    const searchField = this.state.searchField;
    const docs = this.state.docs.filter(doc => {
      return doc.title.toLowerCase().includes(searchField.toLowerCase());
    });

    return (

        <div>
          <div className={classes.title}>
            My Courses
          </div>
          <CardList docs={docs} deleteDoc={this.onDeleteDoc}/>
        </div>
    );
  }
}

export default withStyles(styles)(MyCourse);
