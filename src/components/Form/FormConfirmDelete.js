import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField, Box,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./FormEx.css";
import assignmentAPI from "../../api/assignmentAPI";
import {Formik,Form, Field,FormikControl} from 'formik';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const FormConfirmDelete = (req, res) => {
    const handleDelete = (req, res) => {
        console.log(req);
        console.log(res);
        assignmentAPI.deleteAssignment(req, res);
    }

    const {formConfirmDeleteDialog,setFormConfirmDeleteDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={formConfirmDeleteDialog} 
            onClose={() => setFormConfirmDeleteDialog(false)}
            TransitionComponent={Transition}
            >
            <div className="invite__wrapper2" 
                onClick={() => setFormConfirmDeleteDialog(false)}>
                <Close className="invite__svg"></Close>
                <div className="invite__topHead">Are you sure delete</div>
                <div className="ml-auto">
                    <Button
                        onClick={handleDelete}
                    >
                        Yes
                    </Button>
                </div>
            </div>
                       
            </Dialog>
        </div>
    );
};
export default FormConfirmDelete;