import React, { useEffect, useState } from "react";
import "./Assign.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import userAPI from "../../api/userAPI";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const UserDetail = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isMapped, setIsMapped] = useState(false);

  useEffect(() => {
    const fetchAssignList = async () => {
      try {
        const response = await userAPI.getUserDetail(props.items.id);
        console.log(response.data);
        if (response.data !== null) {
          setUser(response.data);
          setIsMapped(response.data.isMapped);
        }
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
    const value = { u_id: props.items.id, cmd: 0 };
    console.log(value);
    userAPI.userMapId(value);
    setIsMapped(true);
    // window.location.reload(false);
  }
  function handleUnMap() {
    const value = { u_id: props.items.id, cmd: 1 };
    console.log(value);
    userAPI.userMapId(value);
    setIsMapped(false);
    // window.location.reload(false);
  }

  return (
    <div className="main bg-gray">
      <HeaderAdmin />
      <div className="invite">
        <div className="assign_form">
          <div className="assign_detail">
            <div className="d-flex align-item-center w-100">
              <h1 className="color-brown">USER DETAIL</h1>
              <Button
                className="ml-auto"
                variant="contained"
                color="secondary"
                onClick={BanUser}
              >
                Ban User
              </Button>
            </div>
            <h3 className="admin_detail">
              <b>Id:</b> {user.id}
            </h3>
            <h3 className="admin_detail">
              <b>Student Id:</b> {user.studentID}
            </h3>
            <h3 className="admin_detail">
              <b>Username:</b> {user.username}
            </h3>
            <h3 className="admin_detail">
              <b>Full Name:</b> {user.fullName}
            </h3>
            <h3 className="admin_detail">
              <b>DOB:</b> {user.DOB}
            </h3>
            <div className="d-flex align-item-center">
              <h3 className="admin_detail">
                <b>Email:</b> {user.email}
              </h3>
              <div className="btn_form ml-auto">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isMapped}
                  onClick={handleMap}
                >
                  Map
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={isMapped}
                  className="ml-2"
                  onClick={handleUnMap}
                >
                  UnMap
                </Button>
              </div>
            </div>
            <h3 className="admin_detail">
              <b>Phone Number:</b> {user.phoneNumber}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
