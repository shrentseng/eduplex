import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Feeds from '../shren_oscar_components/Feeds'
import CardList from '../profile_components/CardList';
import SearchBox from '../profile_components/SearchBox';
import ListView from '../profile_components/ListView';
import GridOrList from '../profile_components/GridOrList';
import ProfileTag from './ProfileTag';
import PostButtons from './PostButtons';
import { theme_homepage, theme_profile } from '../shared_components/theme';

class Profile extends Component {
	constructor() {
		super();
			this.state = {
				docs: [],
				grid: true,
				searchField: "",
				feeds: [
					{
						"username": "Shren",
						"content": "fuck off",
						"likeCount": 1,
						"key": 0,
						"commentCount": 0,
						"course": 'Course 1',
					},
					{
						"username": "Shren",
						"content": "eat shit",
						"likeCount": 1,
						"key": 1,
						"commentCount": 0,
						"course": 'Course 2',
					},
					{
						"username": "Shren",
						"content": "suck my dick",
						"likeCount": 1,
						"commentCount": 0,
						"key": 2,
						"course": 'Course 3',
					}
				],
			};
		this.onClickGrid = this.onClickGrid.bind(this);
		this.onClickList = this.onClickList.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/albums')
	// 	.then(response => response.json())
	// 	.then(docs => this.setState({docs}));
	// }
	
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
				<ThemeProvider theme={theme_profile}>
					<ProfileTag/>
					<PostButtons />
				</ThemeProvider>
				
				
				<Switch>
					<Route path="/Profile/MyPosts">
						<ThemeProvider theme={theme_homepage}>
							<Feeds feeds={this.state.feeds} />
						</ThemeProvider>
						
					</Route>
					<Route path="/UploadDocuments">
						<SearchBox searchChange={this.onChangeSearch}/>
						<GridOrList onClickGrid={this.onClickGrid} onClickList={this.onClickList} grid={this.state.grid}/>
						<CardList disable={!this.state.grid} docs={docs}/>
						<ListView disable={this.state.grid} docs={docs}/>
					</Route>
				</Switch>
			</div>
		);
	} 
}

export default Profile;