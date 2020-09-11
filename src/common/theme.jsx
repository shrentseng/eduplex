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
			color: '#000000',
			fontSize: '1em',
			fontWeight: '400',
			wordBreak: 'break-all',
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
			fontSize: '1.125em',
			fontWeight: '400',
		},
		h3: {
			fontFamily: 'Raleway',
			color: '#111111',
			fontSize: '1rem',
			fontWeight: '400',
		},
		h4: {
			fontFamily: 'Roboto',
			color: '#000000',
			fontSize: '1.125em',
			fontWeight: '400',
		},
	}
});

export const theme_my_courses = createMuiTheme({
	typography: {
		h2: {
			fontFamily: 'Raleway',
			color: '#000000',
			fontSize: '2em',
			fontWeight: '600',
		},
		h3: {
			fontFamily: 'Roboto',
			color: '#504F4F',
			fontSize: '1.25em',
			fontWeight: '700',
			margin: '2rem 0',
		},
		h4: {
			fontFamily: 'Raleway',
			color: '#504F4F',
			fontSize: '1.25em',
			fontWeight: '600',
		},
		h5: {
			fontFamily: 'Raleway',
			color: '#535353',
			fontSize: '1.25em',
			fontWeight: '600',
		},
	}
});

export const theme_course = createMuiTheme({
	typography: {
		h2: {
			fontFamily: 'Raleway',
			color: '#000000',
			fontSize: '2em',
			fontWeight: '600',
		},
	}
});

export default { theme_homepage, theme_profile };