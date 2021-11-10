import * as React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import "./JoinedClasses.css"
const JoinedClasses = (props) => {
  return (
    <Card className="class__item">
      <CardContent>
        <Typography>
          <h1>{props.subject}</h1>
        </Typography>
        <Typography>
            <h3>{props.teacher}</h3>
        </Typography>
      </CardContent>
    </Card>
  );
}
export default JoinedClasses;