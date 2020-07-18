import React, {Component} from 'react';
import CardList from '../course_components/CardList';
import SearchBox from '../course_components/SearchBox';
import ListView from '../course_components/ListView';
import GridOrList from '../course_components/GridOrList';
import ProfileTag from '../course_components/ProfileTag';
import PostButtons from '../course_components/PostButtons';
import './Course.css';

class Course extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      grid: true,
      searchField: ""
    };
    this.onClickGrid = this.onClickGrid.bind(this);
    this.onClickList = this.onClickList.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(docs => this.setState({docs}));
  }
  
  onClickGrid() {
    this.setState(state => ({
      grid: true
    }));
  }

  onClickList() {
    this.setState(state => ({
      grid: false
    }));
  }

  onChangeSearch(newValue) {
    this.setState(state => ({
      searchField: newValue
    }))
  }

  render() {
    const searchField = this.state.searchField;
    const docs = this.state.docs.filter(doc => {
      return doc.title.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return (
      <div>
        <ProfileTag/>
        <PostButtons/>
        <SearchBox searchChange={this.onChangeSearch}/>
        <GridOrList onClickGrid={this.onClickGrid} onClickList={this.onClickList} grid={this.state.grid}/>
        <CardList disable={!this.state.grid} docs={docs}/>
        <ListView disable={this.state.grid} docs={docs}/>
      </div>
    );
  } 
}

export default Course;