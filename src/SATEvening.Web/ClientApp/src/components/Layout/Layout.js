import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Sidebar } from '../Sidebar/Sidebar';
import { NavMenu } from '../NavMenu/NavMenu';

export class LayoutSidebar extends Component {
  static displayName = LayoutSidebar.name;

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

export class LayoutNavMenu extends Component {
  static displayname = LayoutNavMenu.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container className="content-container">
          {this.props.children}
        </Container>
      </div>
    );
	}
}
