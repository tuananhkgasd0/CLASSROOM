import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./JoinClass.css";
import {Formik,Form, Field,ErrorMessage} from 'formik';
import classroomAPI from '../../api/classroomAPI';
const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const JoinClass = () => {
    const token = JSON.parse(localStorage.getItem("user") || "[]");
    const {joinClassDialog,setJoinClassDialog} = useLocalContext();
    const [errorMessage, setErrorMessage] = React.useState("");
    const initialValues={
        c_code:'',
        u_id: token.id,
    }
    async function onSubmit(values){
        const response = await classroomAPI.joinClassByCode(values);
        setErrorMessage(response.errMessage)
        window.location.reload(false);
    }
    return(
        <div>
            <Dialog 
            fullScreen 
            open={joinClassDialog} 
            onClose={() => setJoinClassDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="joinClass">
                    <div className="joinClass__wrapper">
                        <div 
                            className="joinClass__wrapper2" 
                            onClick={() => setJoinClassDialog(false)}>
                            <Close className="joinClass__svg"></Close>
                            <div className="joinClass__topHead">Join CLass</div>
                        </div>
                    </div>
                    <div className="joinClass__form">
                        <div className="joinClass__formText">
                            <h1>Class Code</h1>
                        </div>
                        <div className="joinClass__formText">
                        Ask your teacher for the class code, and enter it here.
                        </div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {(data) => (
                            <Form>
                                <div className="joinClass__loginInfo">
                                    <Field
                                        as={TextField}
                                        id="outlined-basic"
                                        label="Class Code"
                                        variant="outlined"
                                        name="c_code"
                                        className="joinClass__input"
                                    >
                                    </Field>
                                </div> 
                                {errorMessage && <div className="mt-2"> {errorMessage} </div>}
                                <div className="joinClass_btnform">
                                    <Button
                                        className="joinClass__btn"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                    Join Class
                                    </Button>
                                </div>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default JoinClass;