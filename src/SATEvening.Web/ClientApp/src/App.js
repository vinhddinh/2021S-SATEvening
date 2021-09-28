import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Availability } from './components/Availability/Availability';
import { RegistrationForm } from './components/Registration/RegistrationForm';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/availability' component={Availability} />
        <Route path='/register' component={RegistrationForm} />
      </Switch>
    );
  }
}
