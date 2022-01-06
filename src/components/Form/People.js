import React, {useEffect,useState} from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Avatar} from "@material-ui/core";
import classroomAPI from "../../api/classroomAPI";
import {Close} from "@material-ui/icons";
import "./People.css";
const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const People = (props) => {
    const {peopleDialog,setPeopleDialog} = useLocalContext();
    const [studentList, setStudentList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);
    useEffect(() => {
        const fetchTeacherList = async () => {
          try {
            const response = await classroomAPI.getTeacher(props.c_id);
            setTeacherList(response.data);
          } catch (error) {
            console.log("Fail to fetch", error);
          }
        };
        fetchTeacherList();
    }, []);  
    useEffect(() => {
        const fetchStudentList = async () => {
          try {
            const response = await classroomAPI.getStudent(props.c_id);
            setStudentList(response.data);
          } catch (error) {
            console.log("Fail to fetch", error);
          }
        };
        fetchStudentList();
    }, []);  
    return(
        <div>
            <Dialog 
            fullScreen 
            open={peopleDialog} 
            onClose={() => setPeopleDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="people">
                    <div className="people__wrapper">
                        <div 
                            className="people__wrapper2" 
                            onClick={() => setPeopleDialog(false)}>
                            <Close className="people__svg"></Close>
                            <div className="people__topHead">People</div>
                        </div>
                    </div>
                    <div className="people__form">
                        <div>
                            <div className="people__formText">
                                <h1>Teacher</h1>
                            </div>
                            <hr/>
                            <div className="people__list">
                                <ul>   
                                    {teacherList.map((teacher) => 
                                        <li> <Avatar/><span>{teacher.fullName}</span></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="people__formText mt-10">
                                <h1>Student</h1>
                            </div>
                            <hr/>
                            <div className="people__list">
                                    <ul>   
                                    {studentList.map((student) => 
                                        <li> <Avatar/><span>{student.fullName}</span></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default People;