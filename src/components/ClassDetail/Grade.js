import React, {useState,useEffect} from 'react';
import "./ClassExercise.css";
import {TextField} from '@material-ui/core';
import HeaderClass from "../Header/HeaderClass"
import classroomAPI from '../../api/classroomAPI';
import gradeAPI from '../../api/gradeAPI';
import {Formik,Form, Field} from 'formik';
import {Button} from "@material-ui/core";
import "./Grade.css";
const Grade = (props) => {
    const [studentList, setStudentList] = useState([]);
    useEffect(() => {
        const fetchClassesList = async () => {
        try {
            const response = await classroomAPI.getStudent(props.items.id);
            setStudentList(response.data);
        } catch (error) {
            console.log("Fail to fetch", error);
        }
        };
        fetchClassesList();
    }, []);
    
    const initialValues={
        point:'',
    }
    
	const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
        const data = new FormData();
        data.append('file', selectedFile);
		gradeAPI.uploadFile(props.items.id, selectedFile);
    };

    return (
        <div>
            <HeaderClass items={props.items}/>
            <div className="main">
                <label className="mt-5">
                    <input name="upload-file " type="file" onChange={changeHandler} />
                    <Button variant="contained" color="primary" className="upload_student" onClick={handleSubmission}> 
                        Upload File
                    </Button>
                </label>
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
        </div>
    );
};

export default Grade;