import axiosClient from "../axiosClient"
//import authHeader from "./auth-header";
const userAPI = {
    signUp: (param) =>{
        const url = "/auth/signup";
        return axiosClient.post(
            url,
            {
                username: param.username,
                password: param.password,
                fullName: param.name,
                email: param.email,
            }
        );
    },
    signIn: (param) => {
        const url = "/auth/signin";
        return(axiosClient.post(
        url,
        {
            username: param.username,
            password: param.password,
        }
        ).then(function(response) {
            return response;
        }).catch(function(error) {
            return error;
        }
        ));
    },
    getInfo: (param) => {
        const url = "/users/" + param;
        return(axiosClient.get(
            url
        ));
    },
    changeInfo: (user_id, param) => {
        const url = "/users/" + user_id;
        return(axiosClient.put(
            url, 
            {
                username: param.username,
                email: param.email,
                fullName: param.fullName,
                DOB: param.DOB,
                password: param.password
        }));
    }
}
export default userAPI;