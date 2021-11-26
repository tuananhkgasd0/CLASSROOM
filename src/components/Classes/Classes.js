import React, {useState, useEffect}  from "react";
import {JoinedClasses} from ".."
import './style.css';
import Header from '../Header/Header';
import classroomAPI from "../../api/classroomAPI";

const Classes = (props) => {
    const [classesList, setClassesList] = useState([]);
    const token = JSON.parse(localStorage.getItem("user") || "[]");
    useEffect(() => {
      const fetchClassesList = async () => {
        try {
          console.log("token.id");
          console.log(token.id);
          const response = await classroomAPI.getAllClasses(token.id);
          setClassesList(response);
        } catch (error) {
          console.log("Fail to fetch", error);
        }
      };
      fetchClassesList();
    }, []);
    return(
        <div>
            <Header/>
            <div className="class__root mt-5">
            <div className="class__center">
                {classesList.map(classroom => 
                <JoinedClasses 
                    id = {classroom.id}
                    className = {classroom.className}
                    username = {classroom.users[0].username}
                />)}
            </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default Classes;