import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Profile } from './components/Profile';
import { Availability } from './components/Availability';
import { RegistrationForm } from './components/RegistrationForm';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/profile' component={Profile} />
        <Route path='/availability' component={Availability} />
        <Route path='/register' component={RegistrationForm} />
      </Layout>
    );
  }
}
