import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TeacherTable } from '../Teacher/TeacherTable';

// Defines our routes to our different page components
function RouteSwitch() {

  return (
    <Switch>
      <Route exact path="/"/>
      <Route path="/teachers" exact component={TeacherTable}/>
      <Route path="/students"/>
      <Route path="/classes"/>
      <Route path="/bookings"/>
      <Route path="/mybookings"/>
      <Route path="/myclasses"/>
      <Route path="/myprofile"/>
    </Switch>
  )
}

export default RouteSwitch;