import axiosClient from "../axiosClient"
import authHeader from "./auth-header";

const gradeAPI = {
    uploadFile: (c_id, params) => {
        const url = "/classes/" + c_id + "/students/upload";
        return(axiosClient.post(
            url,
            {params}
            ).then((e) => {
                console.log('Success');
            }).catch((error) => {
                console.error('Error', error);
            }
        ));
    }
}
export default gradeAPI;