import * as React from 'react';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TextField, Button, Radio, RadioGroup } from '@material-ui/core';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import './Register.css';
import * as Yup from 'yup';
import userApi from '../../api/userAPI';

const Register = ({handleChange}) => {
  const initialValues={
    username:'',
    name:'',
    email:'',
    password:'',
    confirmpassword: '',
  };
  
  const [value, setValue] = React.useState('student');
  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const [errorMessage, setErrorMessage] = React.useState("");

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit=(values,props)=>{
    if(values.confirmpassword === values.password){
      console.log(values);
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(true)
      },200)
      console.log(props);
      userApi.signUp(values,value);
      setErrorMessage("Sign up successfully! Please check your email to activate your account.");
    }
    else{
      console.log("confirm password is incorrect");
      setErrorMessage("Confirm password is incorrect")
    }
  };
  return (
    <div className="login">
        <div className="loginForm">
            <h1 className="login__title">REGISTER</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form className="loginForm mt-5 w-20">
                <Field
                as={TextField}
                label="Username"
                type="text"
                className="login__input"
                name = "username"
                helperText={<ErrorMessage name="username" className="error"/>}
                />
                <Field
                as={TextField}
                label="Name"
                type="text"
                className="login__input"
                name = "name"
                helperText={<ErrorMessage name="name" className="error"/>}
                />
                <Field
                as={TextField}
                label="Email"
                type="text"
                className="login__input"
                name = "email"
                helperText={<ErrorMessage name="email" className="error"/>}
                />
                <Field
                as={TextField}
                label="Password"
                type="password"
                name = "password"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password" className="error"/>}
                />
                <Field
                as={TextField}
                label="Confirm Password"
                type="password"
                name = "confirmpassword"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password" className="error"/>}
                />
                <RadioGroup  className="checkbox d-flex" value={value} onChange={handleValue}>
                  <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                  <FormControlLabel value="student" control={<Radio />} label="Student" />  
                </RadioGroup >
                {errorMessage && <div> {errorMessage} </div>}
                <div className="form__btn">
                <Link to={`/`}>
                  <Button
                    className="Login__btn"
                    variant="outlined"
                    color="secondary"
                  >
                  Back
                  </Button> 
                  </Link>
                  <Button
                    className="Login__btn"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                  Register
                  </Button>
                </div>
              </Form>          
            )}
          </Formik>
        </div>
    </div>
  );
}
export default Register;