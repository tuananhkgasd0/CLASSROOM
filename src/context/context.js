import { createContext, useContext, useState } from "react";
const AddContext = createContext();

export function useLocalContext(){
    return useContext(AddContext)
}

export function ContextProvider({children}){
    const [createClassDialog, setCreateClassDialog] = useState(false);
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const [peopleDialog, setPeopleDialog] = useState(false);
    const [invitePeopleDialog, setInvitePeopleDialog] = useState(false);
    const [changeProfileDialog, setChangeProfileDialog] = useState(false);
    const [formClassExDialog, setFormClassExDialog] = useState(false);
    const [formExDialog, setFormExDialog] = useState(false);
    const [formConfirmDeleteDialog, setFormConfirmDeleteDialog] = useState(false);
    const [assignDialog, setAssignDialog] = useState(false);
    const value = {
        createClassDialog,
        setCreateClassDialog,
        joinClassDialog,
        setJoinClassDialog,
        peopleDialog,
        setPeopleDialog,
        invitePeopleDialog,
        setInvitePeopleDialog,
        changeProfileDialog,
        setChangeProfileDialog,
        formClassExDialog, 
        setFormClassExDialog,
        formExDialog, 
        setFormExDialog,
        formConfirmDeleteDialog, 
        setFormConfirmDeleteDialog,
        assignDialog,
        setAssignDialog};
    return <AddContext.Provider value = {value}> {children} </AddContext.Provider>;
}