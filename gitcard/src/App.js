import React from 'react';
import './App.css';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// step 4 above
import axios from "axios";
// step 5 import axios then build componentDidMount function



class App extends React.Component { // step 1

  state = { // 3
    user: [],
    followers:[]
  };

componentDidMount(){ // step 6
  // Axios for my profile
  axios
 .get("https://api.github.com/users/Vrndavana")
 .then(res => { console.log(res.data) 
  this.setState({ user: res.data});})
 .catch(err => { console.log(err, 'this is an error');});


  //Axios for followers
  axios
  .get('https://api.github.com/users/Vrndavana/followers')
  .then ( response => {console.log(response.data)
  this.setState({ followers: response.data })})
  .catch ( err => { console.log( err, 'this is an error')})


}
 



  render() { // 2 now step 7 this.state
  return (
    <div className="App">
    
        <h1>GitHub Profile</h1>
        <div className='user'>
          <Card>
            <CardImg src={this.state.user.avatar_url} alt="Git User"/>
            <CardBody>
              <CardTitle>{this.state.user.name}</CardTitle>
              <CardSubtitle>Username: {this.state.user.login}</CardSubtitle> 
              <CardText>{this.state.user.bio}</CardText>
            </CardBody>
          </Card>
        </div>
    

          <div className="followerscard">
            {this.state.followers.map( person => {
              return (
              <div> 
                <Card className="followers"> 
                  <CardImg src={person.avatar_url} alt="followerimg" />
                  <CardTitle><h3>{person.login}</h3></CardTitle>
                </Card>
              </div>
              )
              })}
          </div>





    </div>
  );}
}

export default App;
