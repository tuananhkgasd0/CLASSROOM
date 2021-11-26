import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button} from "@material-ui/core";
import "./FormEx.css";
import assignmentAPI from "../../api/assignmentAPI";
import "./FormConfirmDelete.css";

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const FormConfirmDelete = (props) => {
    const {formConfirmDeleteDialog,setFormConfirmDeleteDialog} = useLocalContext();
    const handleDelete = () => {
        console.log(props.class_id);
        console.log(props.assign_id);
        assignmentAPI.deleteAssignment(props.class_id, props.assign_id);
        setFormConfirmDeleteDialog(false)
        window.location.reload(false);
    }
    return(
        <div>
            <Dialog
            onClose={() => setFormConfirmDeleteDialog(false)}
            aria-labelledby="customized-dialog-title"
            open={formConfirmDeleteDialog}
            className="form__dialog"
            maxWidth={"lg"}
            >
                <div className="form">
                    <h1>Are you sure deleted this assign</h1>
                    <div className="form__btn">
                        <Button onClick={() => setFormConfirmDeleteDialog(false)}>No</Button>
                        <Button onClick={handleDelete} className="ml-auto">Yes</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default FormConfirmDelete;