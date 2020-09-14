import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Feeds from '../homepage/Feeds';
import Document from '../../common/documents/Documents';
import ProfileTag from './ProfileTag';
import ProfileButtons from './ProfileButtons';
import { theme_homepage, theme_profile } from '../../common/theme';

class Profile extends Component {
	constructor() {
		super();
			this.state = {
				grid: true,
				searchField: "",
			};
	}

	render() {
		// const searchField = this.state.searchField;
		// const docs = this.state.docs.filter(doc => {
		// 	return doc.title.toLowerCase().includes(searchField.toLowerCase());
		// });

		return (
			<div style={{margin: '2rem'}}>
				<ThemeProvider theme={theme_profile}>
					<ProfileTag />
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