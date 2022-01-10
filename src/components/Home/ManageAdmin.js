import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import { useNavigate } from "react-router-dom";
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';

const ManageAdmin = (props) => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  let navigate = useNavigate();
  if(user.length === 0) {
    navigate("/");
    window.location.reload(false);
  }

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
  return(
      <div className="bg-gray">
          <HeaderAdmin/>
          <div className="class__root mt-2">
            <div className="class__center form_admin">
              <div className="d-flex align-item-center w-100">
                <h1 className="color-brown">ADMIN LIST</h1>
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