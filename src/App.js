import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signout from './Components/Signout/Signout';
import Imgsearch from './Components/FaceDetect/Imgsearch/Imgsearch';
//import Rank from './Components/FaceDetect/Rank/Rank';
import Facerecognise from './Components/FaceDetect/Facerecognise/Facerecognise';
//import CardList from './Components/Card/CardList';
import Particles from 'react-particles-js';
//import Signin from './Components/Signin/Signin';
//import Register from './Components/Register/Register';
import ReviewInput from './Components/MovieReviews/ReviewInput';
import RReviewInput from './Components/RestaurantReviews/RReviewInput';
import Resume from './Components/Resume/Resume'

import {setInput, setUser, updateEntries} from './actions';

const mapStateToProps = state => {
    return {
        input: state.setInput.input,
        user: state.setUser.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onInputChange: (event) => dispatch(setInput(event.target.value)),
        loadUser: (user) => dispatch(setUser(user)),
        updateEntries: (entries) => dispatch(updateEntries(entries))
    }
}


const initialState = {
  imageUrl:'',
  box: [],
  route:'signedin',
}

class App extends React.Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) =>{
    if (route === 'signedin'){
      this.setState(initialState)
    }
    this.setState({route:route})
  }

  calculateFaceLocation = (data) => {
    const faceData = data;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    let faces = [];
    faces = faceData.map((dim)=>{
      return{
        leftCol: dim.left_col * width,
        topRow: dim.top_row * height,
        rightCol: (1 - dim.right_col) * width,
        bottomRow: (1 - dim.bottom_row) * height
      }
    })
    return faces;
  }

  faceBox = (box) => {
    this.setState({box:box})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl:this.props.input});
    fetch('https://quiet-dusk-48514.herokuapp.com/imageurl', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: this.props.input
          })
      })
      .then(response => response.json())
       .then(response => {
         if (response) {
      //     fetch('https://quiet-dusk-48514.herokuapp.com/image', {
      //       method: 'put',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({
      //         id: this.props.user.id
      //       })
      //     })
      //     .then(response => response.json())
      //     .then(count => {
      //       this.props.updateEntries(count);
      //     })
      //     .catch(err => console.log("Quiet-dusk-api-error" + err))
      // }
      this.faceBox(this.calculateFaceLocation(response))
    }})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Signout/>
            <Route exact path="/">
              {/* <Particles className='particles'/> */}
              <Resume className='resume'/>
              </Route>
            <Route path="/faceDetect">
              <Particles className='particles'/>
              {/* <Rank name={this.props.user.name} entries={this.props.user.entries}/> */}
              <Imgsearch onInputChange={this.props.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <Facerecognise faceBox={this.state.box} imageUrl={this.state.imageUrl}/>
            </Route>
            <Route path="/fakeNews">
              <Particles className='particles'/>
              <ReviewInput />
            </Route>
            <Route path="/restaurantReviews">
              <Particles className='particles'/>
              <RReviewInput />
            </Route>
          </div>
        </Switch>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);