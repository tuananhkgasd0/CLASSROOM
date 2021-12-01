import {Button, TextField} from "@material-ui/core";
import {useLocalContext} from '../../context/context';
import React from 'react';
import {People, InvitePeople} from '..';
import "./ClassInfo.css";
import HeaderClass from "../Header/HeaderClass"

const ClassInfo = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => setAnchorEl(null);

  const {setPeopleDialog, setInvitePeopleDialog} = useLocalContext();

  const handlePeople = () =>{
    handleClose()
    setPeopleDialog(true)
  }
  const handleInvitePeople = () => {
    handleClose()
    setInvitePeopleDialog(true)
  }
  return (
    <div className="main">
      <HeaderClass items={props.items}/>
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {props.items.className}
              </h1>
              <div className="main__section main__overflow">
                {props.items.teacherName}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id"> {props.items.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div className="main__status">
            <h3>Classroom Management</h3>
            <div className="main__menu">
              <div type="button" className="main__menuItem" onClick={handlePeople}>People</div>
              <div type="button" className="main__menuItem" onClick={handleInvitePeople}>Invite people</div>
            </div>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                <div><TextField
                    id="outlined-multiline-static"
                    label="Content announcements for your class"
                    multiline
                    rows={4}
                    defaultValue=""
                    className="announce__input"
                /></div>
                <Button
                    color="primary"
                    className="post__btn"
                    variant="contained"
                >
                    Post
                </Button>
              </div>
            </div>
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                    <h1>Announce</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <People/>
      <InvitePeople/>
    </div>
  );
};

export default ClassInfo;