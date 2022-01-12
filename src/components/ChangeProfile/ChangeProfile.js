import React, {useState, useEffect} from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField, Avatar} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./ChangeProfile.css";
import { useNavigate } from "react-router-dom";
import userAPI from "../../api/userAPI";
import {Formik,Form, Field} from 'formik';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});


const ChangeProfile = () => {
    const {changeProfileDialog,setChangeProfileDialog} = useLocalContext();
    const [errorMessage, setErrorMessage] = React.useState("");
    const initialValues={
        username:'',
        fullName:'',
        DOB:'',
        email:'',
        password:'',
        studentID:''
    }
    const [userInfo, setUserInfo] = useState(initialValues);
    const user = JSON.parse(localStorage.getItem("user") || "[]");
    let navigate = useNavigate();
    const LogoutBtn = () =>{ 
        localStorage.removeItem("user");
        setChangeProfileDialog(false);  
        navigate("/");
    }
    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const response = await userAPI.getInfo(user.id);
            setUserInfo(response.data);
          } catch (error) {
            console.log("Fail to fetch", error);
          }
        };
        fetchUserInfo();
    }, [user.id]);
    const onSubmit=(values)=>{
        console.log(values);
        userAPI.changeInfo(user.id, values);
        setErrorMessage("Change profile successfully");
        window.location.reload(false);
    }
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
                    <Avatar className="profile__avatar"/>
                    <Formik className="profile__form" initialValues={userInfo} onSubmit={onSubmit}>
                    {(formik) => {
                        const {
                        values,
                        handleChange,
                        } = formik;
                        return (
                        <Form className="profile__loginInfo">
                            <div>
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                name="email"
                                label="Email"
                                variant="outlined"
                                className="profile__input"
                                onChange={handleChange}
                            >
                            </Field>
                            <Field
                                as={TextField}  
                                id="outlined-basic"
                                label="Full Name"
                                name="fullName"
                                variant="outlined"
                                className="profile__input"
                                onChange={handleChange}
                            >
                            </Field>
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Date of birth (dd/mm/yyyy)"
                                name="DOB"
                                variant="outlined"
                                className="profile__input"
                                onChange={handleChange}
                            >
                            </Field>
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                name="studentID"
                                label="Student ID"
                                variant="outlined"
                                className="profile__input"
                                disabled={!(user.roles[0]==="ROLE_STUDENT")}
                            >
                            </Field>
                            {/* <Field
                                as={TextField}
                                id="outlined-basic"
                                name="password"
                                label="password"
                                variant="outlined"
                                className="profile__input"
                                type="password"
                            >
                            </Field>
                            <Field
                                as={TextField}
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                name="confirmpassword"
                                className="profile__input"
                                type="password"
                            >
                            </Field> */}
                            
                            {errorMessage && <div className="mt-2"> {errorMessage} </div>}
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
                                    type="submit"
                                >
                                Submit
                                </Button>
                            </div>
                        </Form>
                        )}}
                    </Formik>
                </div>
            </Dialog>
        </div>
    );
};
export default ChangeProfile;