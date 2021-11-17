import axiosClient from "../axiosClient";
const classroomAPI = {
  getAllClasses: async () => {
    const url = "/classes";
    const response = await axiosClient.get(url);
    console.log(response[0]);
    return response;
  },

  joinClass: (param) => {
    const url = "/addUser/join";
    return axiosClient
      .post(
        url,
        {},
        {
          params: {
            classid: param.classid,
            username: param.username,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default classroomAPI;
