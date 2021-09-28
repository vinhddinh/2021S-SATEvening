import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Sidebar } from '../Sidebar/Sidebar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Sidebar/>
        <Container className="content-container">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
