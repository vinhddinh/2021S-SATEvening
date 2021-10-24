import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { Availability } from './components/Availability/Availability';
import { SpecificAvailability } from './components/SpecificAvailability/SpecificAvailability';
import { EditSpecificAvailability } from './components/EditSpecificAvailability/EditSpecificAvailability';
import { RegistrationForm } from './components/Registration/RegistrationForm';
import { LayoutNavMenu, LayoutSidebar } from './components/Layout/Layout';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        <RouteWrapper exact path='/' component={Home} layout={LayoutNavMenu}/>
        <RouteWrapper path='/register' component={RegistrationForm} layout={LayoutNavMenu}/>
        <RouteWrapper path='/profile' component={Profile} layout={LayoutSidebar}/>
        <RouteWrapper path='/availability' component={Availability} layout={LayoutSidebar} />
            <RouteWrapper path='/specific-availability' component={SpecificAvailability} layout={LayoutSidebar} />
            <RouteWrapper path='/edit-specific-availability' component={EditSpecificAvailability} layout={LayoutSidebar} />
      </Switch>
    );
  }
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