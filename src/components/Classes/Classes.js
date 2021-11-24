import React from "react";
import {JoinedClasses} from ".."
import './style.css';
import Header from '../Header/Header';
const Classes = (props) => {

    return(
        <div>
            <Header/>
            <div className="class__root mt-5">
            <div className="class__center">
                {props.items.map(classroom => 
                <JoinedClasses 
                    id = {classroom.id}
                    className = {classroom.className}
                    username = {classroom.users[0].username}
                />)}
            </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default Classes;