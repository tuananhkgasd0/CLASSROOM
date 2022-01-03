import React, {useState, useEffect}  from "react";
import { Login,ClassInfo,Register, Classes,ClassExercise,Grade} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import classroomAPI from "./api/classroomAPI";
function App() {
  const [classesList, setClassesList] = useState([]);
  const token = JSON.parse(localStorage.getItem("user") || "[]");
  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const response = await classroomAPI.getAllClasses(token.id);
        if(response){
          setClassesList(response.data);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassesList();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path='/classes' element={<Classes items={() => classesList} />}/>  
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
      </Routes>
    </Router>
  );
}
export default App;
