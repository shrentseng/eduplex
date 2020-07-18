import React, {Component} from 'react';
import Course from '../search_components/Course';
import Documents from '../search_components/Documents'
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      grid: true,
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(docs => this.setState({docs}));
  }

  render() {
    const searchField = this.state.searchField;
    return (
      <div>
        <Course docs={this.state.docs}/>
        <Documents docs={this.state.docs}/>
      </div>
    )
  } 
}

export default Search;