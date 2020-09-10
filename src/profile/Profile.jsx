import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Feed from '../shren_oscar_components/Feed'
import CardList from '../profile_components/CardList';
import SearchBox from '../profile_components/SearchBox';
import ListView from '../profile_components/ListView';
import GridOrList from '../profile_components/GridOrList';
import ProfileTag from './ProfileTag';
import PostButtons from './PostButtons';

const theme = createMuiTheme({
	typography: {
		h3: {
			fontFamily: 'Raleway',
			color: '#111111',
			fontSize: '1em',
			fontWeight: '400',
		},
		h4: {
			fontFamily: 'Roboto',
			color: '#9A9A9A',
		},
		h5: {
			fontFamily: 'Roboto',
			color: '#365E7D',
			fontWeight: 500,
			fontSize: '1.25em',
        },
        h6: {
            fontFamily: 'Roboto',
            color: '#5A5A5A',
            fontSize: '0.75em',
        },
		body1: {
			fontFamily: 'Roboto',
			fontSize: '1em',
        },
        p: {
            wordBreak: 'break-all',
        }
	}
})

class Profile extends Component {
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
			<Router>
				<div>
					<ThemeProvider theme={theme}>
						<ProfileTag/>
						<PostButtons/>
					</ThemeProvider>
					

					<Switch>
						<Route path="/Profile/MyPosts">
							
						</Route>
						<Route path="/UploadDocuments">
							<SearchBox searchChange={this.onChangeSearch}/>
							<GridOrList onClickGrid={this.onClickGrid} onClickList={this.onClickList} grid={this.state.grid}/>
							<CardList disable={!this.state.grid} docs={docs}/>
							<ListView disable={this.state.grid} docs={docs}/>
						</Route>
						
					</Switch>
				</div>
			</Router>
				
		);
	} 
}

export default Profile;