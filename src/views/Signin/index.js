import React, { useState, useRef } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
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
import {
  apiPostLogin
} from 'api/login.api'
import {
  routerPath
} from 'router/Routerlist'
import { withRouter } from "react-router";
import Loading from 'components/Loading/index'
import { connect } from 'react-redux'
import {
  actionToProps as authAction
} from 'store/reducers/auth/auth.action'

const SignIn = (props) => {
  const [ isLoading, setLoading ] = useState(false)
  const loginForm = useRef(null)
  const {
    history,
    changeAuthAttribute
  } = props

  const handleSubmit = async (e) =>{
    e.preventDefault()

    setLoading(true)
    let payload = {
      username: loginForm.current.querySelector('input#username').value,
      password: loginForm.current.querySelector('input#password').value
    }
    await apiPostLogin(payload).then((e)=>{
      setLoading(false)
      changeAuthAttribute({
        key: 'authenticated',
        value: true,
      })
      setTimeout(()=>{

        history.push(routerPath.homepage.root)
      },300)
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="padding-container login">
        <div className="text-center">

          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
        </div>

        <form ref={loginForm} noValidate onSubmit={handleSubmit}>
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
                type="submit"
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
            type="submit"
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
            type="submit"
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
      <Loading open={isLoading}/>
    </Container>
  );
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      news: state.news,
    }
}
const mapDispatchToProps = {...authAction}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
