import * as React from 'react';
import {Link} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import './Register.css';
import * as Yup from 'yup';
import classroomAPI from '../../api/classroomAPI';

const VerifyClass = () => {
  const initialValues={verifyCode: ''};
  const [errorMessage, setErrorMessage] = React.useState("");
  const validationSchema = Yup.object().shape({
    verifyCode: Yup.string().required("Required"),
  });

  async function onSubmit(values){
    const response = await classroomAPI.inviteUser(values);
    setErrorMessage(response.errMessage);
  };
  return (
    <div className="login">
        <div className="loginForm">
            <h1 className="login__title">VERIFY JOIN CLASS</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form className="loginForm mt-5 w-20">
                <Field
                as={TextField}
                label="Verify Code"
                type="text"
                className="login__input"
                name = "verifyCode"
                multiline
                helperText={<ErrorMessage name="verifyCode" className="error"/>}
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
export default VerifyClass;