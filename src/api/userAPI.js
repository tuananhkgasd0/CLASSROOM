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
                activationToken: param.verifycode,
            }
        ));
    },
    getAdminList: () => {
        const url = "/admins";
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    }, 
    getAdminDetail: (param) => {
        const url = "/admins/detail/" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    }, 
    getUserList: () => {
        const url = "/users";
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    }, 
    searchUser: (param) => {
        const url = "/admins/users/search?term=" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    },    
    searchAdmin: (param) => {
        const url = "/admins/search?term=" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    },   
    searchClass: (param) => {
        const url = "/admins/classes/search?term=" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    },   
    getUserDetail: (param) => {
        const url = "admins/users/" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    }, 
    getClassList: () => {
        const url = "/admins/classes";
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    },
    getClassDetail: (param) => {
        const url = "/admins/classes/" + param;
        return(axiosClient.get(
            url,
            {
            headers: authHeader()
            }
        ))
    }, 
    banUser: (param) => {
        const url = "/admins/users/" + param;
        return(axiosClient.delete(url, {headers: authHeader()}))
    }, 
    userMapId: (param) => {
        console.log(param.u_id + "/" + param.cmd);
        const url = "/admins/users/" + param.u_id;
        return(axiosClient.post(url,{cmd: param.cmd}, {headers: authHeader()}))
    }, 
}
export default userAPI;