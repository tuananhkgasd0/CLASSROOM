import React, {useState, useEffect}  from "react";
import { Login,ClassInfo,Register, Classes,ClassExercise} from "./components";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import classroomAPI from "./api/classroomAPI";
function App() {
  const [classesList, setClassesList] = useState([]);
  const token = JSON.parse(localStorage.getItem("user") || "[]");
  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        console.log(token);
        const response = await classroomAPI.getAllClasses(token.id);
        setClassesList(response);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassesList();
  }, []);

  return (
    <Router>
        <Routes>
          {classesList.map(classroom => 
            <Route path={"/" + classroom.id} element={<div><ClassInfo items={classroom}/></div>}></Route>
          )}
          {classesList.map(classroom => 
            <Route path={"/" + classroom.id + "/excercises"} element={ 
              <div><ClassExercise items={classroom}/></div>
            }>
            </Route>
          )}
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path='/classes' element={<Classes items={classesList} />}/>  
          <Route></Route>
        </Routes>
    </Router>
  );
}
export default App;
