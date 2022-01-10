import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
        color: "black",
    },
    header__home:{
        textDecoration: "none",
    },
    title: {
        fontSize: "1.38rem",
        color: "#5f6368",
        marginLeft: "Spx",
        cursor: "pointer",
        textDecoration: "none",
    },
    header__logo:{
        backgroundImage: `url("../assets/bg-login.jpeg")` ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    appBar: {
        backgroundColor: "white",
        color: "black",
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerWrapper: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
    },
    header_wrapper_right: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        marginRight: "15px",
        color: "#5f6368",
        cursor: "pointer",
    },
    menu: {
        marginRight: "100px",
    },
    button:{
        padding: "0 2vw",
        textDecoration: "none",
    }
}));    