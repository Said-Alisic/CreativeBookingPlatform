import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeacherTable from '../Teacher/TeacherTable';
import StudentTable from '../Student/StudentTable';
import TransactionTable from '../Transaction/TransactionTable';
import BookingTable from '../Booking/BookingTable';

// Defines our routes to our different page components
function RouteSwitch() {

  return (
    <Switch>
      <Route exact path="/"/>
      <Route path="/teachers" exact component={TeacherTable}/>
      <Route path="/students" exact component={StudentTable}/>
      <Route path="/classes"/>
      <Route path="/bookings" exact component={BookingTable}/>
      <Route path="/transactions" exact component={TransactionTable}/>
      <Route path="/mybookings"/>
      <Route path="/myclasses"/>
      <Route path="/myprofile"/>
    </Switch>
  )
}

export default RouteSwitch;