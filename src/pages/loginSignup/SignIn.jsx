import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import UserContext from "../../context/user/userContext";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="./Register">
                EduPlex
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const MyTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#569859",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#569859",
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#71BA75",
        color: "#FFFFFF",
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#569859",
        },
    },
});

export default function SignIn() {
    const classes = useStyles();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userContext = useContext(UserContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const ok = await userContext.signIn(email, password);
        if (ok) {
            history.push("/");
        } else {
            alert("incorrect email and password");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography
                    component="h1"
                    variant="h5"
                    style={{ color: "#000000" }}
                >
                    Sign In
                </Typography>
                <form className={classes.form} noValidate>
                    <MyTextField
                        value={email}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleEmailChange}
                    />
                    <MyTextField
                        value={password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePasswordChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" />}
                        label="Remember me"
                    />
                    <Link href="/">
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2" style={{ color: "#000000" }}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href={"./Register"}
                                variant="body2"
                                style={{ color: "#000000" }}
                            >
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
