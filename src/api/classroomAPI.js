import axiosClient from "../axiosClient"
import authHeader from "./auth-header";

const classroomAPI = {
  getAllClasses: (param) => {
    const url = "/classes/user/" + param;
    return axiosClient.get(
      url, 
      {
      headers: authHeader()
      }
    )
  },
  createClass: (data) => {
    const url = "/classes/user";
    console.log({ data });
    return axiosClient.post(url, data,)
  },
  getStudent: (param) => {
    const url = "/classes/" + param + "/students";
    return axiosClient.get(
      url, 
      {
      headers: authHeader()
      }
    ) 
  }
};
export default classroomAPI;
