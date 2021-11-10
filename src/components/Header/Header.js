import { AppBar, Typography, Toolbar, Avatar, Menu, MenuItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react'
import { useStyles } from './style';
import {useLocalContext} from '../../context/context';
import {CreateClass, JoinClass} from '..';
const Header = () =>{
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const {setCreateClassDialog, setJoinClassDialog} = useLocalContext();

    const handleCreate = () =>{
        handleClose()
        setCreateClassDialog(true)
    }
    const handleJoin = () => {
        handleClose()
        setJoinClassDialog(true)
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.headerWrapper}>
                        <Typography variant="h6" className={classes.title}>
                            Classroom
                        </Typography>
                    </div>
                    <div className={classes.header_wrapper_right}>
                        <Add className={classes.icon} onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                            <MenuItem onClick={handleCreate}>Create Class</MenuItem>   
                        </Menu>
                        <div>
                            <Avatar/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <CreateClass/>
            <JoinClass/>
        </div>
    )
}
export default Header;