import * as React from 'react';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TextField, Button, Radio, RadioGroup } from '@material-ui/core';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import './Register.css';
import * as Yup from 'yup';
import userApi from '../../api/userAPI';

const Verify = () => {
  const initialValues={verifycode: ''};
  const [errorMessage, setErrorMessage] = React.useState("");
  const validationSchema = Yup.object().shape({
    verifycode: Yup.string().required("Required"),
  });

  const onSubmit=(values)=>{
    console.log(values);
    userApi.activateAccount(values);
    setErrorMessage("Activate successfully");
  };
  return (
    <div className="login">
        <div className="loginForm">
            <h1 className="login__title">VERIFY ACCOUNT</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form className="loginForm mt-5 w-20">
                <Field
                as={TextField}
                label="Verify Code"
                type="text"
                className="login__input"
                name = "verifycode"
                multiline
                helperText={<ErrorMessage name="username"/>}
                />
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
                  Verify
                  </Button>
                </div>
              </Form>          
            )}
          </Formik>
        </div>
    </div>
  );
}
export default Verify;