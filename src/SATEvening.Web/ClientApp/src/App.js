import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Availability } from './components/Availability/Availability';
import { RegistrationForm } from './components/Registration/RegistrationForm';
import './custom.css'
import { LayoutNavMenu, LayoutSidebar } from './components/Layout/Layout';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        <LayoutNavMenu>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={RegistrationForm} />
        </LayoutNavMenu>
        <LayoutSidebar>
          <Route path='/profile' component={Profile} />
          <Route path='/availability' component={Availability} />
         </LayoutSidebar>
      </Switch>
    );
  }
}
