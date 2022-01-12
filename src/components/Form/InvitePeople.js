import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./InvitePeople.css";
import {Formik,Form, Field,ErrorMessage} from 'formik';
import classroomAPI from '../../api/classroomAPI';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const InvitePeople = (props) => {
    const initialValues={
        c_id: props.c_id,
        email: '',
    }
    const {invitePeopleDialog,setInvitePeopleDialog} = useLocalContext();
    const onSubmit=(values)=>{
        classroomAPI.addUser(values);
        console.log(values);
        // window.location.reload(false);
    }
    return(
        <div>
            <Dialog 
            fullScreen 
            open={invitePeopleDialog} 
            onClose={() => setInvitePeopleDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="invite">
                    <div className="invite__wrapper">
                        <div 
                            className="invite__wrapper2" 
                            onClick={() => setInvitePeopleDialog(false)}>
                            <Close className="invite__svg"></Close>
                            <div className="invite__topHead">Invite to Class</div>
                        </div>
                    </div>
                    <div className="invite__form">
                        <div className="joinClass__formText">
                            <h1>Invite to class by Email</h1>
                        </div>
                        <div className="invite__formText">
                            Ask your teacher or student email, and enter it here.
                        </div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {(data) => (
                            <Form>
                            <div className="invite__loginInfo">
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    className="invite__input"
                                    name="email"
                                >
                                </Field>
                            </div>
                            <div className="invite_btnform">
                                <Button
                                    className="invite__btn"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Invite
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
export default InvitePeople;