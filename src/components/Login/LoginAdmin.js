import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import userApi from "../../api/userAPI";
import "./Login.css";

const LoginAdmin = ({ isAuth }) => {
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
    const response = await userApi.signInAdmin(values);
    if (response.roles[0] === 'ROLE_ADMIN') {
      console.log("OK")
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/admin/manage/admin");
    }
    else {
      setErrorMessage("This account is not an admin account");
    }
  };

  return (
    <div class="login">
      <div className="loginForm">
        <h1 className="login__title">ADMIN CLASSROOM</h1>
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
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                className="login__input"
                helperText={<ErrorMessage name="password" />}
              />
              {errorMessage && <div> {errorMessage} </div>}
              <div className="form__btn">
                <Link to={`/admin/register`}>
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
      </div>
    </div>
  );
};
export default LoginAdmin;
