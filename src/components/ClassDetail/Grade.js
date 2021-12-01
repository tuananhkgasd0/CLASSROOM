import React, {useState,useEffect} from 'react';
import "./ClassExercise.css";
import {TextField} from '@material-ui/core';
import HeaderClass from "../Header/HeaderClass"
import classroomAPI from '../../api/classroomAPI';
import {Formik,Form, Field} from 'formik';
import "./Grade.css";
const Grade = (props) => {
    const [studentList, setStudentList] = useState([]);
    useEffect(() => {
        const fetchClassesList = async () => {
        try {
            const response = await classroomAPI.getStudent(props.items.id);
            setStudentList(response.data);
            console.log(studentList);
        } catch (error) {
            console.log("Fail to fetch", error);
        }
        };
        fetchClassesList();
    }, []);
    
    const initialValues={
        point:'',
      }
    return (
        <div className="main">
            <HeaderClass items={props.items}/>
            <Formik initialValues={initialValues}>
                {(data) => (
                    <Form>
                        <div className="label__form">
                            <div className="label__item">Full Name</div>
                            <div className="label__item">Assignment Name</div>
                        </div>
                        {studentList.map(student => (
                            <div className="value__form">
                                <div className="info__item">{student.fullName}</div>
                                <div className="info__item">
                                    <Field
                                    as={TextField}
                                    type="text"
                                    name = "point"
                                    className="point__input"
                                    /><h3>/100</h3></div>
                            </div>
                            )
                        )}   
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Grade;