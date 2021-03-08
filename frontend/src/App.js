import React, { Component } from 'react';
import { LeftSideDrawer } from './Components/LeftSideDrawer';
import { Container } from './Components/Container'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <LeftSideDrawer/>
 


            <main className="main-content">
            
              
            </main>
        </Container>
        
      </div>
    );
  }
  
}

export default App;
