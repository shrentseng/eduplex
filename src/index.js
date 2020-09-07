import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	typography: {
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
		}
	}
})

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

