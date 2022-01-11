import React, {useEffect} from "react";
import "./Assign.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import userAPI from '../../api/userAPI';
import {Button} from "@material-ui/core";
const AdminDetail = (props) => {
  const [admin, setAdmin] = React.useState({});
  useEffect(() => {
    const fetchAssignList = async () => {
      try {
        const response = await userAPI.getAdminDetail(props.items.id);
        if(response.data){
          setAdmin(response.data);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchAssignList();
  }, [props.items.id]);
  return (
    <div className="main bg-gray">
      <HeaderAdmin/>
      <div className="invite">
          <div className="assign_form">
              <div className="assign_detail">
                  <h1 className="color-brown">ADMIN DETAIL</h1>
                  <h3 className="admin_detail"><b>ID:</b> {admin.id}</h3>
                  <h3 className="admin_detail"><b>Username:</b> {admin.username}</h3>
                  <h3 className="admin_detail"><b>Full Name:</b> {admin.fullName}</h3>
                  <h3 className="admin_detail"><b>DOB:</b> {admin.DOB}</h3>
                  <h3 className="admin_detail"><b>Email:</b> {admin.email}</h3>
                  <h3 className="admin_detail"><b>Phone Number:</b> {admin.phoneNumber}</h3>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AdminDetail;