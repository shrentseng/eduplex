import React, { Component } from 'react';
import CardList from '../common/documents/CardList';
import ListView from '../common/documents/ListView';
import GridOrList from '../common/documents/GridOrList';

class DocumentResults extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          docs: [],
          grid: true,
        };
        this.onClickGrid = this.onClickGrid.bind(this);
        this.onClickList = this.onClickList.bind(this);
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
    
      render() {
        const searchField = this.props.keyWords;
        const docs = this.state.docs.filter(doc => {
          return doc.title.toLowerCase().includes(searchField.toLowerCase());
        });
        
        return (
          <div style={{height:"100%"}}>
            <GridOrList onClickGrid={this.onClickGrid} onClickList={this.onClickList} grid={this.state.grid}/>
            <CardList disable={!this.state.grid} docs={docs}/>
            <ListView disable={this.state.grid} docs={docs}/>
          </div>
        );
      } 
}

export default (DocumentResults);