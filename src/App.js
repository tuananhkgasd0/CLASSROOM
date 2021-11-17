import React, { useRef, useState, Fragment } from "react";
import {Header, Login,ClassInfo,Register, Classes} from './components';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import{Button} from '@material-ui/core';
import apiClient from "./http-common";
import classroomAPI from './api/classroomAPI';
function App() {
  const classroom = [
    {
      idc: 'c1',
      subject: 'C++',
      teacher: 'Nguyen Van X'
    },
    {
      idc: 'c2',
      subject: 'Python',
      teacher: 'Nguyen Tran A'
    },
    {
      idc: 'c3',
      subject: 'Java',
      teacher: 'Le Thanh H'
    },
    {
      idc: 'c4',
      subject: 'C#',
      teacher: 'Nguyen Huu T'
    },
    {
      idc: 'c5',
      subject: 'C',
      teacher: 'Nguyen Van X'
    },
  ];
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
              <Classes items={classroom}/>
            </div>
          }></Route>
          <Route path="/login" element={<Login/>}>
          </Route> 
          <Route path="/register" element={<Register/>}>
          </Route> 
          <Route path="/c1" element={ 
            <div><ClassInfo items={classroom[0]}/></div>
          }>
          </Route>
          <Route path="/c2" element={ 
            <div><ClassInfo items={classroom[1]}/></div>
          }>
          </Route>
          <Route path="/c3" element={ 
            <div><ClassInfo items={classroom[2]}/></div>
          }>
          </Route>
          <Route path="/c4" element={ 
            <div><ClassInfo items={classroom[3]}/></div>
          }>
          </Route>
          <Route path="/c5" element={ 
            <div><ClassInfo items={classroom[4]}/></div>
          }>
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}
export default App;
