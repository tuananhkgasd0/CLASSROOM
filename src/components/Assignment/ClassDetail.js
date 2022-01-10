import React, {useEffect} from "react";
import "./Assign.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import userAPI from '../../api/userAPI';
const ClassDetail = (props) => {
  const [classes, setClasses] = React.useState({});
  useEffect(() => {
    const fetchAssignList = async () => {
      try {
        const response = await userAPI.getClassDetail(props.items.id);
        if(response.data){
          setClasses(response.data);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchAssignList();
  }, [props.items.id]);
  return (
    <div className="main">
      <HeaderAdmin/>
      <div className="invite">
          <div className="assign_form">
              <div className="assign_detail">
                  <h1 className="color-brown">CLASS DETAIL</h1>
                  <h3 className="admin_detail"><b>ID:</b> {classes.id}</h3>
                  <h3 className="admin_detail"><b>Class Name:</b> {classes.className}</h3>
                  <h3 className="admin_detail"><b>Class Code:</b> {classes.classCode}</h3>
                  <h3 className="admin_detail"><b>Teacher Name:</b> {classes.teacherName}</h3>
                  <h3 className="admin_detail"><b>Number of Student:</b> {classes.numberOfStudent}</h3>
                  <h3 className="admin_detail"><b>Banner:</b> {classes.banner}</h3>
                  <h3 className="admin_detail"><b>Create At:</b> {classes.createAt}</h3>
                  <h3 className="admin_detail"><b>Update At:</b> {classes.updateAt}</h3>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ClassDetail;