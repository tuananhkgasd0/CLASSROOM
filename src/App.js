import React from 'react';
import {Header, Main} from './components';
function App() {
  const classes = [
    {
      id: 'Class 1',
      subject: 'Python',
      teacher: 'Nguyen Van A',
    },
    {
      id: 'c2',
      subject: 'Java',
      teacher: 'Nguyen Van B',
    },
    {
      id: 'c3',
      subject: 'C++',
      teacher: 'Nguyen Van C',
    },
    {
      id: 'c4',
      subject: 'C#',
      teacher: 'Nguyen Van D',
    },
    {
      id: 'c5',
      subject: 'C#',
      teacher: 'Nguyen Van X',
    },
  ];
  return (
    <div className="App">
      <Header></Header>
      <Main items={classes}></Main>
    </div>
  );
}

export default App;
