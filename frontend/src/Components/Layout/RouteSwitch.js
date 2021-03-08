import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TeacherList } from '../Teacher/teacherList';

function RouteSwitch() {

  return (
    <Switch>
      <Route exact path="/"/>
      <Route path="/teachers" exact component={TeacherList} />
      <Route path="/students" />
      <Route path="/classes" />
      <Route path="/bookings" />
      <Route path="/mybookings" />
      <Route path="/myclasses" />
      <Route path="/myprofile" />
    </Switch>
  )
}

export default RouteSwitch;