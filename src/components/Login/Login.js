import * as React from 'react';
import {TextField, Button} from '@material-ui/core';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import './Login.css';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({handleChange}) => {
  const initialValues={
    username:'',
    password:'',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  })

  const onSubmit=(values,props)=>{
    console.log(values);
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(true)
    },2000)
    console.log(props);

    axios({
      method: 'post',
      url: 'http://localhost:8080/api/auth/signin',
      data: {
        username: values.username,
        password: values.password
      }
    });
  }
  return (
    <div >
        <div className="loginForm">
            <h1 className="login__title">CLASSROOM</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form className="loginForm mt-5 w-20">
                <Field
                as={TextField}
                id="filled-required"
                label="Username"
                type="text"
                className="login__input"
                name = "username"
                helperText={<ErrorMessage name="username"/>}
                />
                <Field
                as={TextField}
                id="outlined-password-input"
                label="Password"
                type="password"
                name = "password"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password"/>}
                />
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
                    type="submit"
                    disabled={props.isSubmitting}
                  >
                  {props.isSubmitting?"Loading":"Login"}
                  </Button>
                </div>
              </Form>          
            )}
          </Formik>
        </div>
    </div>
  );
}
export default Login;