import React, { Component } from 'react';
import { TeacherList } from './Components/Teacher/teacherList';
import { LeftSideDrawer } from './Components/LeftSideDrawer';
import { Container } from './Components/Container'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <LeftSideDrawer teacherList={TeacherList}/>
 


            <main className="main-content">
            
              
            </main>
        </Container>
        
      </div>
    );
  }
  
}

export default App;
