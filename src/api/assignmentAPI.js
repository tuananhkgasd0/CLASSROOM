import axiosClient from "../axiosClient"
const assignmentAPI = {
    getAssignment: (params) =>{
        const url = "/assignments?c_id=" + params;
        return (
            axiosClient.get(
            url,{params},
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
            )
        )
    },
    deleteAssignment: (req, res, param) =>{
        const url = "/assignments?c_id=" + req + "&id=" + res;
        return (
            axiosClient.delete(
            url,
            {param},
            )
        )
    }
}
export default assignmentAPI