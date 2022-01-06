import axiosClient from "../axiosClient";
import authHeader from "./auth-header";
const assignmentAPI = {
    getAssignment: (params) =>{
        const url = "/assignments/" + params.a_id + "?c_id=" + params.c_id;
        return (
            axiosClient.get(
            url,
            {
            headers: authHeader()
            }
            )
        )
    },
    getAllAssignment: () =>{
        const url = "/assignments/all";
        return (
            axiosClient.get(
            url,
            {
            headers: authHeader()
            }
            )
        )
    },
    getAssignmentInClass: (params) =>{
        const url = "/assignments?c_id=" + params;
        return (
            axiosClient.get(
            url,{params},
            {
            headers: authHeader()
            }
            )
        )
    },
    createAssignment: (param) =>{
        const url = "/assignments";
        return (
            axiosClient.post(
            url,
            {
                assignmentTitle: param.assignmentTitle,
                instruction: param.instruction,
                point: param.point,
                dueDate: param.dueDate,
                classId: param.classId
            },
            {
            headers: authHeader()
            }
            )
        )
    },
    deleteAssignment: (req, res, param) =>{
        const url = "/assignments?c_id=" + req + "&id=" + res;
        return (
            axiosClient.delete(
            url,
            {param},
            {
            headers: authHeader()
            }
            )
        )
    }
}
export default assignmentAPI