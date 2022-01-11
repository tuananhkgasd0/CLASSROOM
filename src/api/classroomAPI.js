import axiosClient from "../axiosClient"
import authHeader from "./auth-header";

const classroomAPI = {
  getAllClasses: (param) => {
    const url = "/classes/user/" + param;
    return axiosClient.get(url, 
      {
      headers: authHeader()
      })
  },
  createClass: (data) => {
    const url = "/classes";
    return axiosClient.post(url, {
      className: data.className,
      numberOfStudent: data.numberOfStudent,
      banner: data.banner,
    },{
      headers: authHeader()
      })
  },
  getStudent: (param) => {
    const url = "/student/?c_id=" + param;
    return(axiosClient.get(
      url, 
      {
        headers: authHeader()
      }
    ))
  },
  getTeacher: (param) => {
    const url = "/teacher/?c_id=" + param;
    return axiosClient.get(
      url, 
      {
      headers: authHeader()
      }
    ) 
  },
  addUser: (param) => {
    const url = "/addUser";
    return axiosClient.post(
      url,
      {
        classID: param.c_id,
        userID: param.u_id
      },
      {
      headers: authHeader()
      }
    )
  },
  inviteUser: (param) => {
    const url = "/addUser/join/?classid="+param.c_id + "&username=" + param.username;
    return axiosClient.post(
      url,{
      headers: authHeader()
      }
    )
  },
  joinClassByCode: (param) => {
    const url = "/classes/join-class?clsCode=" + param.c_code + "&userId=" + param.u_id;
    return axiosClient.post(
      url,{
      headers: authHeader()
      }
    )
  }
};
export default classroomAPI;
