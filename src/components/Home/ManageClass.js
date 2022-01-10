import React, {useEffect, useState} from "react";
import './style.css';
import HeaderAdmin from '../Header/HeaderAdmin';
import { useNavigate } from "react-router-dom";
import userAPI from '../../api/userAPI';
import {Link} from 'react-router-dom';

const ManageClass = () => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  let navigate = useNavigate();
  console.log(user);
  if(user.length === 0) {
    navigate("/");
    window.location.reload(false);
  }

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
  return(
      <div className="bg-gray">
          <HeaderAdmin/>
          <div className="class__root mt-2">
            <div className="class__center form_admin">
              <div className="d-flex align-item-center w-100">
                <h1 className="color-brown">CLASS LIST</h1>
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
                      <Link to={"/admin/manage/admin/" + classes.id} className="btn_detail">Show Detail</Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default ManageClass;