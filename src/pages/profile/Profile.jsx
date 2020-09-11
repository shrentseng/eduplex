import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Feeds from '../../common/feeds/Feeds';
import Document from '../../common/documents/Documents';

import CardList from '../../common/documents/CardList';
import ListView from '../../common/documents/ListView';
import GridOrList from '../../common/documents/GridOrList';

import ProfileTag from './ProfileTag';
import ProfileButtons from './ProfileButtons';
import { theme_homepage, theme_profile } from '../../common/theme';

class Profile extends Component {
	constructor() {
		super();
			this.state = {
				docs: [],
				grid: true,
				searchField: "",
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
					<ProfileButtons />
				</ThemeProvider>
				
				
				<Switch>
					<Route exact path="/Profile">
						<ThemeProvider theme={theme_homepage}>
							<Feeds />
						</ThemeProvider>
						
					</Route>
					<Route path="/Profile/Uploaded">
						<Document />
					</Route>
					<Route path="/Profile/Saved">
						<Document />
					</Route>
				</Switch>
			</div>
		);
	} 
}

export default Profile;