import {AppBar, Toolbar, Avatar, Menu, MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Add} from '@material-ui/icons';
import React from 'react';
import {useStyles} from './style';
import {useLocalContext} from '../../context/context';
import {CreateClass, JoinClass,ChangeProfile} from '..';
import logo from '../assets/logo.png'; 
const Header = () =>{
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
                        <Link to={`/`} className="header__home">
                            <img src={logo}/>
                        </Link>
                    </div>
                    <div className={classes.header_wrapper_right}>
                        <Add className={classes.icon} onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.menu}
                        >
                            <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                            <MenuItem onClick={handleCreate}>Create Class</MenuItem>   
                        </Menu>
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
export default Header;