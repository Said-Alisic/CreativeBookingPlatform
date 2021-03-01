import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import { TeacherList } from './Components/Teacher/teacherList'

export default function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <Router>
        <header className="App-header">
          
        </header>
        <Link to="/teachers">Teachers</Link>
        <Link to="/students">Students</Link>
        <Link to="/classes">Classes</Link>
      </Router>
    </div>
  );
};



