import React from "react";
import {TextField,DialogActions,Button} from "@material-ui/core";
const Form = () => {
    return (
        <div className="form">
            <p className="class__title">Create Class</p>
            <div className="form__inputs">
                <TextField 
                    id="filled-basic"
                    label="Section" 
                    className="form__input"
                    variant="filled"
                />
                <TextField 
                    id="filled-basic"
                    label="Subject" 
                    className="form__input"
                    variant="filled"
                />
                <TextField 
                    id="filled-basic"
                    label="Room" 
                    className="form__input"
                    variant="filled"
                />
                <TextField 
                    id="filled-basic"
                    label="Class Name" 
                    className="form__input"
                    variant="filled"
                />
            </div>
            <DialogActions>
                <Button color="primary">
                    Create Class
                </Button>
            </DialogActions>
        </div>
    );
};
export default Form;