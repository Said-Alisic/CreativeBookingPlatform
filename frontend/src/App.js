import React, { Component } from 'react';
import { LeftSideDrawer } from './Components/Layout/LeftSideDrawer';
import NavBar from './Components/Layout/NavBar';



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <LeftSideDrawer/>
    </div>
    );
  }
  
}

export default App;
