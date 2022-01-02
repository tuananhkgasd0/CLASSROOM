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
      setErrorMessage("Sign Up Success");
    }
    else{
      console.log("confirm password is incorrect");
      setErrorMessage("Confirm password is incorrect")
    }
  };
  return (
    <div >
        <div className="loginForm">
            <h1 className="login__title">CLASSROOM</h1>
            <h1 className="login__title mt-5">SIGNUP</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form className="loginForm mt-5 w-20">
                <Field
                as={TextField}
                label="Username"
                type="text"
                className="login__input"
                name = "username"
                helperText={<ErrorMessage name="username"/>}
                />
                <Field
                as={TextField}
                label="Name"
                type="text"
                className="login__input"
                name = "name"
                helperText={<ErrorMessage name="name"/>}
                />
                <Field
                as={TextField}
                label="Email"
                type="text"
                className="login__input"
                name = "email"
                helperText={<ErrorMessage name="email"/>}
                />
                <Field
                as={TextField}
                label="Password"
                type="password"
                name = "password"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password"/>}
                />
                <Field
                as={TextField}
                label="Confirm Password"
                type="password"
                name = "confirmpassword"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password"/>}
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
                    disabled={props.isSubmitting}
                  >
                  {/* {props.isSubmitting?"Done":"Register"} */}
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