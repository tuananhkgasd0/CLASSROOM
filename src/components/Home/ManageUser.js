import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import { useNavigate } from "react-router-dom";
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';

const ManageUser = () => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  let navigate = useNavigate();
  console.log(user);
  if(user.length === 0) {
    navigate("/");
    window.location.reload(false);
  }

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
  return(
    <div className="bg-gray">
    <HeaderAdmin/>
    <div className="class__root mt-2">
      <div className="class__center form_admin">
        <div className="d-flex align-item-center w-100">
          <h1 className="color-brown">USER LIST</h1>
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