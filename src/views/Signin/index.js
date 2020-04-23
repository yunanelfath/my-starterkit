import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Facebook from '@material-ui/icons/Facebook';
import DeleteIcon from '@material-ui/icons/GitHub';

export default function SignIn() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="padding-container login">
        <div className="text-center">

          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
        </div>

        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
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
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className="black-bgcolor text-transform-capitalize"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
          <br/>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<Facebook />}
            className="blue-fb text-transform-capitalize"
          >
            Sign In With Facebook
          </Button>
          <br/>
          <br/>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            className="blue-google text-transform-capitalize"
          >
            Sign In with Google
          </Button>
        </form>
      </div>
    </Container>
  );
}
