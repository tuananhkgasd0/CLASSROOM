import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import {TextField, Button} from '@material-ui/core';

const ManageUser = () => {
  const initialValues = {text: ''};
  const user = JSON.parse(localStorage.getItem("user") || "[]");

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await userAPI.getUserList();
        setUserList(response);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchUserList();
  }, []);  

  async function onSubmit(values){
    const response = await userAPI.searchUser(values.text);
    setUserList(response.data)
  };

  return(
    <div className="bg-gray">
    <HeaderAdmin/>
    <div className="class__root mt-2">
      <div className="class__center form_admin">
        <div className="d-flex align-item-center w-100">
          <h1 className="color-brown">USER LIST</h1><div>
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
        {userList.map((user) => (
            <div className="row">
              <div className="column">
                {user.fullName}
              </div>
              <div className="column">
                {user.email}
              </div>
              <div className="column">
                <Link to={"/admin/manage/user/" + user.id} className="btn_detail">Show Detail</Link>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ManageUser;