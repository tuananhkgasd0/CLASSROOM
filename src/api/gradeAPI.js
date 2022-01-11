import axiosClient from "../axiosClient";
import authHeader from "./auth-header";

const gradeAPI = {
  uploadFile: (c_id, params) => {
    const url = "/classes/" + c_id + "/students/upload";
    return axiosClient
      .post(url, params,
        {
        headers: authHeader()
        })
      .then((e) => {
        console.log("Success");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  },
  getStudentListUpload: (c_id) => { 
    const url = "/classes/" + c_id + "/students";
    return axiosClient
      .get(url,
        {
        headers: authHeader()
        })
      .then(function(response) {
          return response;
      })
      .catch(function(error) {
          return error;
    })
  },
  downloadGrade: () => {
    const url = "/download/student";
    return axiosClient
      .get(url,
        {
        headers: authHeader()
        }).then(function(response) {
          return response;
      }).catch(function(error) {
          return error;
    })
  }
};
export default gradeAPI;
