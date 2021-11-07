import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Availability } from './components/Availability/Availability';
import { SpecificAvailability } from './components/SpecificAvailability/SpecificAvailability';
import { EditSpecificAvailability } from './components/EditSpecificAvailability/EditSpecificAvailability';
import { RegistrationForm } from './components/Registration/RegistrationForm';
import { LayoutNavMenu, LayoutSidebar } from './components/Layout/Layout';
import './custom.css'
import AuthService from './Services/AuthService';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        <RouteWrapper exact path='/' component={Home} layout={LayoutNavMenu}/>
        <RouteWrapper path='/register' component={RegistrationForm} layout={LayoutNavMenu}/>
        <PrivateRoute path='/profile' component={Profile} layout={LayoutSidebar}/>
        <PrivateRoute path='/availability' component={Availability} layout={LayoutSidebar} />
        <PrivateRoute path='/specific-availability' component={SpecificAvailability} layout={LayoutSidebar} />
        <PrivateRoute path='/edit-specific-availability' component={EditSpecificAvailability} layout={LayoutSidebar} />
      </Switch>
    );
  }
}

function PrivateRoute(props) {
  return AuthService.isSignedIn() ?
      RouteWrapper(props) :
      <Redirect to={{
        pathname: '/'}}
      />
}

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}