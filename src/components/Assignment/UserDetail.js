import React, {useEffect} from "react";
import "./Assign.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import userAPI from '../../api/userAPI';
import {Button} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const UserDetail = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = React.useState({});
  useEffect(() => {
    const fetchAssignList = async () => {
      try {
        const response = await userAPI.getUserDetail(props.items.id);
        if(response.data !== null){
          setUser(response.data);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchAssignList();
  }, [props.items.id]);

  function BanUser() {
    userAPI.banUser(props.items.id);
    navigate("/admin/manage/user/");
    window.location.reload(false);
  }
  function handleMap() {
    userAPI.userMapId(props.items.id);
    window.location.reload(false);
  }
  function handleUnMap() {
    userAPI.userUnMapId(props.items.id);
    window.location.reload(false);
  }

  return (
    <div className="main bg-gray">
      <HeaderAdmin/>
      <div className="invite">
          <div className="assign_form">
              <div className="assign_detail">
                  <div className="d-flex align-item-center w-100">
                    <h1 className="color-brown">USER DETAIL</h1>
                    <Button className="ml-auto" variant="contained" color="secondary" onClick={BanUser}>Ban User</Button>
                  </div>
                  <h3 className="admin_detail"><b>Id:</b> {user.id}</h3>
                  <div className="d-flex align-item-center">
                    <h3 className="admin_detail"><b>Student Id:</b> {user.studentID}</h3>
                    <div className="btn_form">
                      <Button variant="contained" color="primary" disabled={user.studentID} onClick={handleMap}>Map</Button>
                      <Button variant="contained" color="secondary" disabled={!user.studentID} className="ml-2" onClick={handleUnMap}>UnMap</Button>
                    </div>
                  </div>
                  <h3 className="admin_detail"><b>Username:</b> {user.username}</h3>
                  <h3 className="admin_detail"><b>Full Name:</b> {user.fullName}</h3>
                  <h3 className="admin_detail"><b>DOB:</b> {user.DOB}</h3>
                  <h3 className="admin_detail"><b>Email:</b> {user.email}</h3>
                  <h3 className="admin_detail"><b>Phone Number:</b> {user.phoneNumber}</h3>
              </div>
          </div>
      </div>
    </div>
  );
};

export default UserDetail;