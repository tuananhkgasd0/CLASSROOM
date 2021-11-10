import './CreateClass.css';
import { useLocalContext } from "../../context/context";
import {Dialog} from "@material-ui/core"
import React from 'react';
import Form from './Form'
const CreateClass = () => {
    const {createClassDialog,setCreateClassDialog} = useLocalContext();
    return (
        <Dialog
            onClose={() => setCreateClassDialog(false)}
            aria-labelledby="customized-dialog-title"
            open={createClassDialog}
            className="form__dialog"
            maxWidth={"lg"}
        >
            <Form/>
        </Dialog>
    );
};
export default CreateClass;