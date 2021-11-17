import axiosClient from "../axiosClient";
const userAPI = {
    Login: (param) =>{
        const url = "/api/auth/signin";
        return axiosClient
            .post(
                url,
                {},
                {
                params: {
                    username: param.username,
                    password: param.password,
                },
                }
            )
    }
}