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
        setChangeProfileDialog};
    return <AddContext.Provider value = {value}> {children} </AddContext.Provider>;
}