import React from 'react';
import {Link} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import './Login.css';
import * as Yup from 'yup';
import userApi from '../../api/userAPI';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
const Login = ({isAuth}) => {
  const initialValues = {
    username:'',
    password:'',
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  })
  let navigate = useNavigate();

  const handleSubmit = async (values)=>{
    const response = await userApi.signIn(values);
    if(response.accessToken !== undefined){
      localStorage.setItem("user",JSON.stringify(response));
      navigate("/classes");
    }
  }
  
  return (
    <div >
        <div className="loginForm">
            <h1 className="login__title">CLASSROOM</h1>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
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
                {/* <div style={{color: "red"}}>
                  {values.errorMessage}
                </div> */}
                <div className="form__btn">
                  <Link to={`/register`}>
                  <Button
                    className="Login__btn"
                    variant="outlined"
                    color="primary"
                  >
                  Register
                  </Button> 
                  </Link>
                  <Button
                    className="Login__btn"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                  Login
                  </Button>
                </div>
              </Form>          
            )}
          </Formik>
          <GoogleButton
            className="mt-10"
            onClick={() => { console.log('Google button clicked') }}
          />
        </div>
    </div>
  );
}
// const mapStateToProps = state => {
//   return {
//       language: state.app.language
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return{
//     navigate: (path) => dispatch(push(path)),
//     userLoginSuccess: (userInfor) => dispatch(acitons.userLoginSuccess(userInfor))
//   }
// }
export default Login;