import React from "react";
import {TextField,DialogActions,Button} from "@material-ui/core";
import {Formik,Form,Field} from 'formik';
import classroomAPI from '../../api/classroomAPI';

const FormCreateClass = () => {
    const token = JSON.parse(localStorage.getItem("user") || "[]");
    const initialValues={
        className: '',
        numberOfStudent: '',
        banner: '',
        teacherId: token.id
    }

    const onSubmit=(values,data)=>{
        console.log(values);
        classroomAPI.createClass(values);
        console.log(data);
        window.location.reload(false);
    }
    return (
        <Formik className="invite" initialValues={initialValues} onSubmit={onSubmit}>
        {(data) => (
            <div className="form">
                <p className="class__title">Create Class</p>
                <Form className="form__inputs">
                    <Field
                        as={TextField} 
                        id="filled-basic"
                        label="Class Name" 
                        className="form__input"
                        name="className"
                        variant="filled"
                    />
                    <Field
                        as={TextField} 
                        id="filled-basic"
                        label="Number Of Student" 
                        className="form__input"
                        name="numberOfStudent"
                        variant="filled"
                    />
                    <Field
                        as={TextField} 
                        id="filled-basic"
                        label="Banner" 
                        className="form__input"
                        name="banner"
                        variant="filled"
                    />
                    <Button 
                        color="primary" 
                        type="submit"
                        disabled={data.isSubmitting}>
                        Create Class
                    </Button>
                </Form>
            </div>
        )}
        </Formik>
    );
};
export default FormCreateClass;