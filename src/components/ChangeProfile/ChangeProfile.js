import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField, Avatar} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./ChangeProfile.css";
import { useNavigate } from "react-router-dom";
//import { withCookies } from 'react-cookie';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});


const ChangeProfile = () => {
    let navigate = useNavigate();
    const LogoutBtn = () =>{ 
        localStorage.removeItem("user");
        navigate("/");
    }
    const {changeProfileDialog,setChangeProfileDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={changeProfileDialog} 
            onClose={() => setChangeProfileDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="profile">
                    <div className="profile__wrapper">
                        <div 
                            className="profile__wrapper2" 
                            onClick={() => setChangeProfileDialog(false)}>
                            <Close className="profile__svg"></Close>
                            <div className="profile__topHead">Profile</div>
                        </div>
                    </div>
                    <div className="profile__form">
                        <Avatar/>
                        <div className="profile__loginInfo">
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                className="profile__input"
                                defaultValue="Nguyễn Văn X"
                            >
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                label="Student Id"
                                variant="outlined"
                                className="profile__input"
                                defaultValue="1812039"
                            >
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                className="profile__input"
                                type="password"
                            >
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                className="profile__input"
                                type="password"
                            >
                            </TextField>
                        </div>
                        <div className="profile_btnform">
                            <Button
                                className="profile__btn"
                                variant="outlined"
                                color="primary"
                                onClick={LogoutBtn}
                            >
                            Logout
                            </Button>
                            <Button
                                className="profile__btn"
                                variant="contained"
                                color="primary"
                            >
                            Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default ChangeProfile;