import React, {useState, useEffect}  from "react";
import { Login,ClassInfo,Register, Classes,ClassExercise,Grade, Assign,LoginAdmin,RegisterAdmin, Verify} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import classroomAPI from "./api/classroomAPI";
import assignmentAPI from "./api/assignmentAPI";
import { useNavigate } from "react-router-dom";
function App() {
  const [classesList, setClassesList] = useState([]);
  const [assignList, setAssignList] = useState([]);
  const token = JSON.parse(localStorage.getItem("user") || "[]");
  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const classResponse = await classroomAPI.getAllClasses(token.id);
        const assignResponse = await assignmentAPI.getAllAssignment();
        if(classResponse.data && assignResponse){
          setClassesList(classResponse.data);
          setAssignList(assignResponse.data);
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
        <Route path='/admin/MangerUser' element={<LoginAdmin/>}/> 
        <Route path='/verify' element={<Verify/>}/> 
        <Route path="/admin/register" element={<RegisterAdmin/>}/> 
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
