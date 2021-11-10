import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button} from "@material-ui/core"
import {Close} from "@material-ui/icons"
import "./JoinClass.css"
const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const JoinClass = () => {
    const {joinClassDialog,setJoinClassDialog} = useLocalContext();
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
                        <Button
                            className="joinClass__btn"
                            variant="contained"
                            color="primary"
                            >Join</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default JoinClass;