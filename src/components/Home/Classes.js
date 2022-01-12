import React from "react";
import {JoinedClasses} from ".."
import './style.css';
import Header from '../Header/Header';

const Classes = (props) => {
  console.log(props)
  return(
      <div className="bg-gray">
          <Header/>
          <div className="class__root mt-5">
            <div className="class__center2">
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