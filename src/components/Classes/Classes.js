import React from "react";
import {JoinedClasses} from ".."
import './style.css';
const Main = (props) => {
    return(
        <div>
            <div className="class__root mt-5">
            <div className="class__center">
                <JoinedClasses
                    id = {props.items[0].idc}
                    subject = {props.items[0].subject}
                    teacher = {props.items[0].teacher}
                />
                <JoinedClasses
                    id = {props.items[1].idc}
                    subject = {props.items[1].subject}
                    teacher = {props.items[1].teacher}
                />
                <JoinedClasses
                    id = {props.items[2].idc}
                    subject = {props.items[2].subject}
                    teacher = {props.items[2].teacher}
                />
                <JoinedClasses
                    id = {props.items[3].idc}
                    subject = {props.items[3].subject}
                    teacher = {props.items[3].teacher}
                />
                <JoinedClasses
                    id = {props.items[4].idc}
                    subject = {props.items[4].subject}
                    teacher = {props.items[4].teacher}
                />
            </div>
            </div>
        </div>
    );
};
export default Main;