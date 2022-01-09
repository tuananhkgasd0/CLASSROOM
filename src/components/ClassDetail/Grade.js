import React, { useState, useEffect } from "react";
import "./ClassExercise.css";
import { TextField } from "@material-ui/core";
import HeaderClass from "../Header/HeaderClass";
import gradeAPI from "../../api/gradeAPI";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import "./Grade.css";
import assignmentAPI from "../../api/assignmentAPI";

const Grade = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [assignList, setAssignList] = useState([]);
  
  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const response1 = await gradeAPI.getStudentListUpload(props.items.id);
        const response2 = await assignmentAPI.getAssignmentInClass(props.items.id);
        setStudentList(response1.data);
        setAssignList(response2.data);
        console.log(studentList);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassesList();
  }, [props.items.id]);

  const initialValues = {
    point: "",
  };

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    gradeAPI.uploadFile(props.items.id, data);
    // window.location.reload(false);
  };

  return (
    <div>
      <HeaderClass items={props.items} />
      <div className="grade_board">
        <div className="input_file">
        <label className="mt-5 ">
          <input name="upload-file " type="file" onChange={changeHandler} />
          <Button
            variant="contained"
            color="primary"
            className="upload_student"
            onClick={handleSubmission}
          >
            Upload File
          </Button>
        </label>
        </div>
        <Formik initialValues={initialValues}>
          {(data) => (
            <Form className="form_grade">
              <div className="label__form">
                <div className="info__item">Full Name</div>
                {assignList.map((assign) => (
                  <div className="label__item">{assign.assignmentTitle}</div>
                ))}
              </div>
              {studentList.map((student) => (
                <div className="value__form">
                  <div className="info__item" style={{ color: student.accountLinkTo !== null ? "black" : "red" }}>{student.fullName}</div>
                  {assignList.map((assign) => (
                  <div className="label__item">
                    <Field
                      key={assign.id}
                      as={TextField}
                      type="text"
                      name={"point" + assign.id + student.id}
                      className="point__input"
                    />
                    <h5 className="fw_normal">/{assign.point}</h5>
                  </div>
                  ))}
                </div>
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Grade;
