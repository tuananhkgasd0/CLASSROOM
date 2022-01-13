import React, { useState, useEffect } from "react";
import "./ClassExercise.css";
import { TextField } from "@material-ui/core";
import HeaderClass from "../Header/HeaderClass";
import gradeAPI from "../../api/gradeAPI";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import "./Grade.css";
import assignmentAPI from "../../api/assignmentAPI";
import { ExportExcel } from "../ExportToExcel/ExportExcel";

const Grade = (props) => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  const [studentList, setStudentList] = useState([]);
  const [assignList, setAssignList] = useState([]);

  const exportGrade = [{ "Student ID": "", "Grade": "" }];

  const fileNameGrade = "grade-template";

  const text1 = "Grade";

  const exportStudent = [{ "Student ID": "", "Full Name": "" }];

  const fileNameStudent = "student-template";

  const text2 = "Student List";

  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const response1 = await gradeAPI.getStudentListUpload(props.items.id);
        setStudentList(response1.data);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchClassesList();
  }, [props.items.id]);

  useEffect(() => {
    const fetchClassesList = async () => {
      try {
        const response2 = await assignmentAPI.getAssignmentInClass(props.items.id);
        setAssignList(response2.data);
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
  const [value, setValue] = React.useState({
    s_id: '',
    a_id: '',
    point: '',
  });

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const changePoint = (event) => {
    setValue(event.target.value);
  }

  const handleSubmission = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    gradeAPI.uploadFile(props.items.id, data);
    window.location.reload(false);
  };

  return (
    <div>
      <HeaderClass items={props.items} />
      <div className="grade_board">
          {user.roles[0]==="ROLE_TEACHER" &&
            <div className="upload_form mt-1">
              <label className="mt-5">
                <input name="upload-file " type="file" onChange={changeHandler} className="input_file"/>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmission}
                >
                  Upload File
                </Button>
              </label>
            </div>
          }
        <div className="d-flex align-item-center mt-1">
          <div>
            <ExportExcel csvData={exportGrade} fileName={fileNameGrade} text={text1} />
          </div>
          <div className="ml-2">
            <ExportExcel csvData={exportStudent} fileName={fileNameStudent} text={text2} />
          </div>
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
                  <div
                    className="info__item"
                    style={{
                      color: student.accountLinkTo !== null ? "black" : "red",
                    }}
                  >
                    {student.fullName}
                  </div>
                  {assignList.map((assign) => (
                    <div className="label__item">
                      <Field
                        key={assign.id}
                        as={TextField}
                        type="text"
                        name={"point" + assign.id + student.id}
                        className="point__input"
                        value={value.point   }
                        onChange={changePoint}
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
