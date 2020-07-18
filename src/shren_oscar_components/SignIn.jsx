import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="./Register">
			EduPlex
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
		</Typography>
	);
}

const MyTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#569859',
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#569859',
			},
		},
	},
})(TextField);



const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#569859'
		}
	},
});

export default function SignIn() {
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>
				<form className={classes.form} noValidate>
					<MyTextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
					/>
					<MyTextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<ThemeProvider theme={theme}>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
					</ThemeProvider>
					
					<ThemeProvider theme={theme}>
						<Link href="/">
							<Button
							fullWidth
							variant="contained"
							className={classes.submit}
							color="primary"
							>
								Sign In
							</Button>
						</Link>
					</ThemeProvider>
					<Grid container>
						<Grid item xs>
						<Link href={'./Register'} variant="body2">
							Forgot password?
						</Link>
						</Grid>
						<Grid item>
						<Link href={'./Register'} variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}