import React, {useState, useEffect}  from "react";
import { Login,UserDetail,ClassInfo,Register, Classes,ClassExercise,Grade, Assign,LoginAdmin,RegisterAdmin, Verify,ManageAdmin,ManageUser,ManageClass, AdminDetail} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import classroomAPI from "./api/classroomAPI";
import assignmentAPI from "./api/assignmentAPI";
import userAPI from "./api/userAPI";
import { useNavigate } from "react-router-dom";
function App() {
  const [classesList, setClassesList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [assignList, setAssignList] = useState([]);
  const [adminList, setAdminList] = useState([]);
  const [userList, setUserList] = useState([]);
  const token = JSON.parse(localStorage.getItem("user") || "[]");
  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const classesResponse = await classroomAPI.getAllClasses(token.id);
        const assignResponse = await assignmentAPI.getAllAssignment();
        const adminResponse = await userAPI.getAdminList();
        const userResponse = await userAPI.getUserList();
        const classResponse = await userAPI.getClassList();
        if(classResponse && assignResponse && adminResponse && userResponse){
          setClassesList(classesResponse.data);
          setAssignList(assignResponse.data);
          setAdminList(adminResponse.data);
          setUserList(userResponse);
          setClassList(classResponse.data);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassesList();
  }, [token.id]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path='/classes' element={<Classes c_list = {classesList}/>}/>  
        <Route path='/admin' element={<LoginAdmin/>}/> 
        <Route path='/admin/manage/admin' element={<ManageAdmin/>}/> 
        <Route path='/admin/manage/user' element={<ManageUser/>}/> 
        <Route path='/admin/manage/class' element={<ManageClass/>}/> 
        <Route path='/verify' element={<Verify/>}/> 
        <Route path="/admin/register" element={<RegisterAdmin/>}/> 

        {adminList.map((admin) => 
          <Route path={"/admin/manage/admin/" + admin.id} element={ 
            <div><AdminDetail items={admin}/></div>
          }></Route>
        )}
        {userList.map((user) => 
          <Route path={"/admin/manage/user/" + user.id} element={ 
            <div><UserDetail items={user}/></div>
          }></Route>
        )}
        {classList.map((classes) => 
          <Route path={"/admin/manage/class/" + classes.id} element={ 
            <div><UserDetail items={classes}/></div>
          }></Route>
        )}
        {classesList.map((classroom) => 
          <Route path={"/" + classroom.id} element={<div><ClassInfo items={classroom}/></div>}></Route>
        )}
        {classesList.map((classroom) => 
          <Route path={"/" + classroom.id + "/excercises"} element={ 
            <div><ClassExercise items={classroom}/></div>
          }></Route>
        )}
        {classesList.map((classroom) => 
          <Route path={"/" + classroom.id + "/grade"} element={ 
            <div>
                <Grade items={classroom}/>
            </div>
          }></Route>
        )}
        {assignList.map((assign) => 
          <Route path={"/assign/" + assign.id} element={ 
            <div><Assign items={assign}/></div>
          }></Route>
        )}
      </Routes>
    </Router>
  );
}
export default App;
