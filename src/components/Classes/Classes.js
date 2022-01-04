import React, {useState, useEffect}  from "react";
import {JoinedClasses} from ".."
import './style.css';
import Header from '../Header/Header';
import classroomAPI from "../../api/classroomAPI";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ClassInfo,ClassExercise,Grade} from "../../components";

const Classes = (props) => {
  // const [classesList, setClassesList] = useState([]);
  // const token = JSON.parse(localStorage.getItem("user") || "[]");
  // useEffect(() => {
  //   const fetchClassesList = async () => {
  //     try {
  //       const response = await classroomAPI.getAllClasses(token.id);
  //       setClassesList(response.data);
  //     } catch (error) {
  //       console.log("Fail to fetch", error);
  //     }
  //   };
  //   fetchClassesList();
  // }, []);
  return(
      <div className="bg-gray">
          <Header/>
          <div className="class__root mt-5">
            <div className="class__center">
                {props.c_list.map((classroom) => 
                <JoinedClasses 
                    id = {classroom.id}
                    className = {classroom.className}
                    teacherName = {classroom.teacherName}
                />)}
            </div>
          </div>
      </div>
  );
};


// const mapStateToProps = state => {
//     return {
//         systemMenuPath: state.app.systemMenuPath
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

export default Classes;