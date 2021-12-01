import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField, Box,InputLabel,Select} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./FormEx.css";
import assignmentAPI from '../../api/assignmentAPI';
import {Formik,Form, Field} from 'formik';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const FormEx = (props) => {
    const initialValues={
        assignmentTitle:'',
        instruction:'',
        point:'',
        dueDate:'',
        classId: props.items.id
    }

    const onSubmit=(values,data)=>{
        console.log(values);
        assignmentAPI.createAssignment(values);
        console.log(data);
        window.location.reload(false);
    }

    const [point, setPoint] = React.useState('');

    const handleChange = (event) => {
        setPoint(event.target.value);
    };

    const {formExDialog,setFormExDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={formExDialog} 
            onClose={() => setFormExDialog(false)}
            TransitionComponent={Transition}
            >
                <Formik className="invite" initialValues={initialValues} onSubmit={onSubmit}>
                {(data) => (
                    <Form>
                        <div className="invite__wrapper">
                            <div className="invite__wrapper2" 
                                onClick={() => setFormExDialog(false)}>
                                <Close className="invite__svg"></Close>
                                <div className="invite__topHead">Exercise</div>
                                <div className="ml-auto">
                                    <Button
                                        className="invite__btn"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={data.isSubmitting}
                                    >
                                        Assignment
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="input__form">
                            <div className="invite__loginInfo">
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Title"
                                    name="assignmentTitle"
                                    variant="outlined"
                                    className="title__input"
                                >
                                </Field>
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Instruct"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    name="instruction"
                                    className="instruct__input"
                                >
                                </Field>
                            </div>
                            <div className="invite_btnform">
                                <Box>
                                    <InputLabel id="demo-simple-select-label">Point</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label='Point'
                                        name='point'
                                    >
                                        <option value="10">10</option>
                                        <option value="100">100</option>
                                    </Field>
                                </Box>
                                <form className="container" noValidate>
                                    <Field
                                        as={TextField}
                                        id="datetime-local"
                                        label="Deadline"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        className="textField"
                                        name="dueDate"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </Dialog>
        </div>
    );
};
export default FormEx;