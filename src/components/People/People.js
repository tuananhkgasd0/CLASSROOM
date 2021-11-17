import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Avatar} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./People.css";
const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const People = () => {
    const {peopleDialog,setPeopleDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={peopleDialog} 
            onClose={() => setPeopleDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="people">
                    <div className="people__wrapper">
                        <div 
                            className="people__wrapper2" 
                            onClick={() => setPeopleDialog(false)}>
                            <Close className="people__svg"></Close>
                            <div className="people__topHead">People</div>
                        </div>
                    </div>
                    <div className="people__form">
                        <div>
                            <div className="people__formText">
                                <h1>Teacher</h1>
                            </div>
                            <hr/>
                            <div className="people__list">
                                <ul>   
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="people__formText mt-10">
                                <h1>Student</h1>
                            </div>
                            <hr/>
                            <div className="people__list">
                                <ul>   
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                    <li> <Avatar/><span>Nguyễn Văn X</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default People;