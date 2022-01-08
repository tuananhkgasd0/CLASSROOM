import React from "react";
import {JoinedClasses} from ".."
import './style.css';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";

const Classes = (props) => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  let navigate = useNavigate();
  console.log(user);
  if(user.length === 0) {
    navigate("/");
    window.location.reload(false);
  }

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

export default Classes;