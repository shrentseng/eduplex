import { createMuiTheme } from '@material-ui/core/styles'

export const theme_homepage = createMuiTheme({
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
        },
        p: {
            wordBreak: 'break-all',
        }
	}
});

export const theme_profile = createMuiTheme({
	typography: {
		h1: {
			fontFamily: 'Raleway',
			color: '#000000',
			fontSize: '2.25em',
			fontWeight: '600',
		},
		h2: {
			fontFamily: 'Roboto',
			color: '#365E7D',
			fontSize: '1.12em',
			fontWeight: '400',
		},
		h3: {
			fontFamily: 'Raleway',
			color: '#111111',
			fontSize: '1em',
			fontWeight: '400',
		},
		h4: {
			fontFamily: 'Roboto',
			color: '#000000',
			fontSize: '1.37em',
			fontWeight: '400',
		},
	}
});

export default { theme_homepage, theme_profile };