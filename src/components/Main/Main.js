import React from "react";
import {JoinedClasses} from ".."
import './style.css';
const Main = (props) => {
    return(
        <div className="class__root">
            <div className="class__center">
                <JoinedClasses
                    subject = {props.items[0].subject}
                    teacher = {props.items[0].teacher}
                />
                <JoinedClasses
                    subject = {props.items[1].subject}
                    teacher = {props.items[1].teacher}
                />
                <JoinedClasses
                    subject = {props.items[2].subject}
                    teacher = {props.items[2].teacher}
                />
                <JoinedClasses
                    subject = {props.items[3].subject}
                    teacher = {props.items[2].teacher}
                />
                <JoinedClasses
                    subject = {props.items[4].subject}
                    teacher = {props.items[2].teacher}
                />
            </div>
        </div>
    );
};
export default Main;