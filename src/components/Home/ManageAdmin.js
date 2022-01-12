import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import {TextField, Button} from '@material-ui/core';

const ManageAdmin = (props) => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  const initialValues = {text: ''};

  const [adminList, setAdminList] = useState([]);
  useEffect(() => {
    const fetchAdminList = async () => {
      try {
        const response = await userAPI.getAdminList();
        setAdminList(response.data);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchAdminList();
  }, []);  
  async function onSubmit(values){
    const response = await userAPI.searchAdmin(values.text);
    setAdminList(response.data)
  };
  return(
      <div className="bg-gray">
          <HeaderAdmin/>
          <div className="class__root mt-2">
            <div className="class__center form_admin">
              <div className="d-flex align-item-center w-100">
                <h1 className="color-brown">ADMIN LIST</h1>
                <div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(props) => (
                    <Form className="search_form d-flex">
                      <Field
                      as={TextField}
                      label="Search name/email"
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
                <Link to={`/admin/register`} className="ml-auto create_admin">Create admin</Link>
              </div>
              <div className="row mt-2">
                <div className="column">
                  <h3>Full Name:</h3> 
                </div>
                <div className="column">
                  <h3>Email:</h3>
                </div>
                <div className="column">
                  <h3>Detail</h3>
                </div>
              </div>
              {adminList.map((admin) => (
                  <div className="row">
                    <div className="column">
                      {admin.fullName}
                    </div>
                    <div className="column">
                      {admin.email}
                    </div>
                    <div className="column">
                      <Link to={"/admin/manage/admin/" + admin.id} className="btn_detail">Show Detail</Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default ManageAdmin;