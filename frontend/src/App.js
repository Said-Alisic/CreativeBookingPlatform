import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TeacherList } from './Components/Teacher/teacherList';
import { LeftSideDrawer } from './Components/LeftSideDrawer';
import { Container } from './Components/Container'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Container>
          <LeftSideDrawer/>
              <BrowserRouter>


            <main className="main-content">
              <Route path='/teachers' exact component={TeacherList}/>
              
            </main>
          </BrowserRouter>
        </Container>
        
      </div>
    );
  }
  
}

export default App;
