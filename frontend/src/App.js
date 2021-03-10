import React, { Component } from 'react';
import SideDrawer from './Components/Layout/SideDrawer';

//<NavBar/>

class App extends Component {

  render() {
    return (
      <div className="App">
        <main className='main-content'>
          <SideDrawer/>
        </main>
        
        
    </div>
    );
  }
  
}

export default App;
