import axiosClient from "../axiosClient"
import authHeader from "./auth-header";
const userAPI = {
    signUp: (param,checked) =>{
        const url = "/auth/signup";
        if(checked === "teacher"){
            return axiosClient.post(
                url,
                {
                    username: param.username,
                    password: param.password,
                    fullName: param.name,
                    email: param.email,
                    roles: ["teacher"]
                }
            );
        }
        else{
            return axiosClient.post(
                url,
                {
                    username: param.username,
                    password: param.password,
                    fullName: param.name,
                    email: param.email,
                }
            );
        }
    },
    signUpAdmin: (param) =>{
        const url = "/auth/signup";
        return axiosClient.post(
            url,
            {
                username: param.username,
                password: param.password,
                fullName: param.name,
                email: param.email,
                roles: ["admin"]
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
    signInAdmin: (param) => {
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
    signInGoogle: (params) => {
        const url = "/auth/signin/google-sign-in?id_token=" + params;
        return(axiosClient.post(
            url).then(function(response) {
                return response.data;
            }).catch(function(error) {
                return error;
            }
        ));
    },
    signUpGoogle: (params) => {
        const url = "/auth/signin/google-sign-up?id_token=" + params;
        return(axiosClient.post(
            url).then(function(response) {
                return response.data;
            }).catch(function(error) {
                return error;
            }
        ));
    },
    getInfo: (param) => {
        const url = "/users/" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
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
                studentID: param.studentID
            },
            {
            headers: authHeader()
            }
        ));
    },
    activateAccount: (param) => {
        const url = "/auth/verify-account/";
        return(axiosClient.post(
            url,
            {
                activationToken: param.verifycode
            }
        ));
    }
}
export default userAPI;