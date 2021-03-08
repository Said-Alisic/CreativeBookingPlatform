import React, { Component } from 'react';
import NavBar from './Components/Layout/NavBar';
import ResponsiveDrawer from './Components/Layout/TestDrawer';

//<NavBar/>

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <ResponsiveDrawer/>
        
    </div>
    );
  }
  
}

export default App;
