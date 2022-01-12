import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import {TextField, Button} from '@material-ui/core';

const ManageClass = () => {
  const initialValues = {text: ''};

  const [classList, setClassList] = useState([]);
  useEffect(() => {
    const fetchClassList = async () => {
      try {
        const response = await userAPI.getClassList();
        setClassList(response.data);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassList();
  }, []);  

  async function onSubmit(values){
    const response = await userAPI.searchClass(values.text);
    setClassList(response.data)
  };

  return(
      <div className="bg-gray">
          <HeaderAdmin/>
          <div className="class__root mt-2">
            <div className="class__center form_admin">
              <div className="d-flex align-item-center w-100">
                <h1 className="color-brown">CLASS LIST</h1>
                <div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(props) => (
                    <Form className="search_form d-flex">
                      <Field
                      as={TextField}
                      label="Search user class"
                      type="text"
                      className="search__input"
                      name = "text"
                      variant="filled"
                      helperText={<ErrorMessage name="username"/>}
                      />
                      <Button
                        className="search__btn"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                      Search
                      </Button>
                    </Form>          
                  )}
                </Formik>
                </div>
              </div>
              <div className="row mt-2">
                <div className="column">
                  <h3>Class Name:</h3> 
                </div>
                <div className="column">
                  <h3>Class Code:</h3>
                </div>
                <div className="column">
                  <h3>Teacher Name</h3>
                </div>
                <div className="column">
                  <h3>Detail</h3>
                </div>
              </div>
              {classList.map((classes) => (
                  <div className="row">
                    <div className="column">
                      {classes.className}
                    </div>
                    <div className="column">
                      {classes.classCode}
                    </div>
                    <div className="column">
                      {classes.teacherName}
                    </div>
                    <div className="column">
                      <Link to={"/admin/manage/class/" + classes.id} className="btn_detail">Show Detail</Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default ManageClass;