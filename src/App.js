import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Diabetes from './Components/Diabetes'
import Cholesterol from './Components/Cholesterol'
import Hypertension from './Components/Hypertension'
import WeightLoss from './Components/Weight-Loss'
import NavBar from './Components/NavBar'



class App extends Component {


search = () => {

}




  render() {
    return (
      <div className="App">

          <NavBar/>

          <Switch>
            <Route 
               path="/Diabetes" 
               component={(props) => <Diabetes {...props} {...this.state}/>} />
            
            <Route 
               path="/Cholesterol" 
               component={(props) => <Cholesterol {...props} {...this.state}/>} />

            <Route 
               path="/Hypertension" 
               component={(props) => <Hypertension {...props} {...this.state}/>} />

            <Route 
               path="/Weight-Loss" 
               component={(props) => <WeightLoss {...props} {...this.state}/>} />

          </Switch>

      </div>
    );
  }
}

export default App;
