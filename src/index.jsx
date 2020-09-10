import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		h3: {
			fontFamily: 'Raleway',
			color: 'red',
			fontSize: '1em',
			fontWeight: '400',
		},
		h4: {
			color: 'red',
		},
		h5: {
			fontFamily: 'Roboto',
			color: 'red',
			fontWeight: 500,
			fontSize: '1.25em',
        },
        h6: {
            fontFamily: 'Roboto',
            color: 'red',
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
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();

