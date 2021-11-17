import React, { useRef, useState, Fragment } from "react";
import {Header, Login,ClassInfo, Classes, JoinedClasses} from './components';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import{Button} from '@material-ui/core';
import apiClient from "./http-common";
import classroomAPI from './api/classroomAPI';
function App() {
 
  const get_id = useRef(null);
  const get_title = useRef(null);
  async function getAllData() {
    const res = await apiClient.get("/classes");

    const result = {
      status: res.status + "-" + res.statusText,
      headers: res.headers,
      data: res.data,
    };
    console.log(await classroomAPI.getAllClasses());
  }
  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={
            <div>
              <Header/>
              {/* <Classes items={classroom}/> */}
              <Button onClick={getAllData}>abc</Button>
            </div>
          }></Route>
          <Route path="/login" element={<Login/>}>
          </Route> 
          {/* <Route path="/c1" element={ 
            <div><ClassInfo items={classroom[0]}/></div>
          }>
          </Route> */}
        </Routes>
      </Fragment>
    </Router>
  );
}
export default App;
