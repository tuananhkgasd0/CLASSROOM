import {AppBar, Toolbar, Avatar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';
import {useStyles} from './HeaderClassStyle';
import {useLocalContext} from '../../context/context';
import {CreateClass, JoinClass,ChangeProfile} from '..';
import logo from '../assets/logo.png'; 
//import ToggleButton from '@material-ui/lab/ToggleButton';
//import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const HeaderClass = (props) =>{
    const classes = useStyles();    

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const {setChangeProfileDialog} = useLocalContext();

    const handleChange = () => {
        handleClose()
        setChangeProfileDialog(true)
    }

    //const [alignment, setAlignment] = React.useState('News');
    // const handleButtonChange = (event, newAlignment) => {
    //     setAlignment(newAlignment);
    // };
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.headerWrapper}>
                        <Link to={`/classes`} className="header__home">
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div 
                        className={classes.header_wrapper_middle}>
                        <Link to={`/${props.items.id}`}
                            className={classes.button} >
                        <Button
                        >News</Button>
                        </Link>
                        <Link to={`/${props.items.id}/excercises`}
                            className={classes.button} >
                        <Button
                        >Classroom exercises</Button>
                        </Link>
                        <Link to={`/${props.items.id}/grade`}
                            className={classes.button} >
                        <Button
                        >Grade</Button>
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
export default HeaderClass;