import { AppBar, Avatar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChangeProfile, CreateClass, JoinClass } from '..';
import { useLocalContext } from '../../context/context';
import logo from '../assets/logo.png';
import { useStyles } from './HeaderStyle';
const HeaderAdmin = () =>{
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const {setCreateClassDialog, setJoinClassDialog, setChangeProfileDialog} = useLocalContext();

    const handleCreate = () =>{
        handleClose()
        setCreateClassDialog(true)
    }
    const handleJoin = () => {
        handleClose()
        setJoinClassDialog(true)
    }
    const handleChange = () => {
        handleClose()
        setChangeProfileDialog(true)
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.headerWrapper}>
                        <Link to={`/admin/manage/admin/`} className="header__home">
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div 
                        className={classes.header_wrapper_middle}>
                        <Link to={`/admin/manage/admin`}
                            className={classes.button} >
                        <Button>Manage admin accounts</Button>
                        </Link>
                        <Link to={`/admin/manage/user`}
                            className={classes.button} >
                        <Button>Manage user accounts</Button>
                        </Link>
                        <Link to={`/admin/manage/class`}
                            className={classes.button} >
                        <Button>Manage classes</Button>
                        </Link>
                    </div>
                    <div className={classes.header_wrapper_right}>
                        <div>
                            <Avatar onClick={handleChange}/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <CreateClass/>
            <JoinClass/>
            <ChangeProfile/>
        </div>
    )
}
export default HeaderAdmin;