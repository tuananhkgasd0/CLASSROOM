import * as React from 'react';
import {TextField, Button} from '@material-ui/core';
import './Login.css';
const Login = () => {
  return (
    <div className="login">
        <div className="loginForm">
            <h1 className="login__title">CLASSROOM</h1>
            <div className="loginForm mt-5 w-20">
              <TextField
              id="filled-required"
              label="Username"
              type="email"
              defaultValue="@gmail.com"
              className="login__input"
              />
              <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className="login__input"
              />
            </div>
            <div className="form__btn">
              <Button
                className="Login__btn"
                variant="outlined"
                color="primary"
              >
              Register
              </Button> 
              <Button
                className="Login__btn"
                variant="contained"
                color="primary"
              >
              Login
              </Button>
            </div>
        </div>
    </div>
  );
}
export default Login;