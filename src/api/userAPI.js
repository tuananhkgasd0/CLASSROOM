import axiosClient from "../axiosClient"
const userAPI = {
    signUp: (param) =>{
        const url = "/auth/signup";
        return axiosClient.post(
            url,
            {
                username: param.username,
                password: param.password,
                email: param.email,
            },
        )
    },
    signIn: (param) =>{
        const url = "/auth/signin";
        return (
            axiosClient.post(
            url,
            {
                username: param.username,
                password: param.password,
            },
            )
            .then(res=>{
                localStorage.setItem("token", true)
            })
            .catch(err => {
                console.log(err)
            })
        )
    }
}
export default userAPI