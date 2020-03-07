import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';

class App extends Component {

  state = {
    appName: 'Demo React'
  }
  render(){
    const {appName} = this.state;
    return(
      <div>
        <Navbar name={appName} />
      </div>
    )
  }
}


export default App;
