import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./InvitePeople.css";

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const InvitePeople = () => {
    const {invitePeopleDialog,setInvitePeopleDialog} = useLocalContext();
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
                        <div className="invite__loginInfo">
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                className="invite__input"
                            >
                            </TextField>
                        </div>
                        <div className="invite_btnform">
                            <Button
                                className="invite__btn"
                                variant="contained"
                                color="primary"
                            >
                                Invite
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default InvitePeople;