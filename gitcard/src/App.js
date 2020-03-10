import React from 'react';
import './App.css';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// step 4 above
class App extends React.Component { // step 1

  state = { // 3
    user: [],
    followers:[]
  };




  render() { // 2
  return (
    <div className="App">
      <header className='App-header'>
        <h1>GitHub Profile</h1>
        <div className='user'>
          <Card>
            <CardImg/>
            <CardBody>
              <CardTitle>Card</CardTitle>
              <CardSubtitle>Title</CardSubtitle> 
              <CardText>Whoa</CardText>
            </CardBody>
          </Card>
        </div>
      </header>
    </div>
  );}
}

export default App;
