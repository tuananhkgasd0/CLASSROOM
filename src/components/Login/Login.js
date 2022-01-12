import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";
import * as Yup from "yup";
import userApi from "../../api/userAPI";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuth }) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (values) => {
    const response = await userApi.signIn(values);
    if (response.accessToken !== undefined && response.roles[0] !== 'ROLE_ADMIN') {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/classes");
      window.location.reload(false);
    }
    else if(response.roles[0] === 'ROLE_ADMIN'){
      setErrorMessage("This account is admin account");
    }
    else if(!response){
      setErrorMessage("Incorrect username or Password ");
    }
  };

  const onGoogleLoginSuccess = async (googleAuth) => {
    console.log("Google login success", googleAuth);
    const response = await userApi.signInGoogle(googleAuth.tokenId);
    if (response === undefined){
      navigate("/register");
    }
    else{
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/classes");
      window.location.reload(false);
    }
  };

  const onGoogleLoginFailure = (error) => {
    console.log("Google login failed");
    console.log(error);
  };

  return (
    <div class="login">
      <div className="loginForm">
        <h1 className="login__title">CLASSROOM</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form className="loginForm mt-5 w-20">
              <Field
                as={TextField}
                id="filled-required"
                label="Username"
                type="text"
                className="login__input"
                name="username"
                helperText={<ErrorMessage name="username" className="error"/>}
              />
              <Field
                as={TextField}
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password" className="error"/>}
              />
              {errorMessage && <div> {errorMessage} </div>}
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
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onGoogleLoginSuccess}
          onFailure={onGoogleLoginFailure}
          cookiePolicy={"single_host_origin"} 
          className="mt-2"
        />
      </div>
    </div>
  );
};
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
