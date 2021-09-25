import React, { Component } from 'react';
import { NavItem, NavLink, Navbar, Container, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import './NavMenu.css';

export class Sidebar extends Component {
  static displayName = Navbar.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div className="sidebar-container">
        <div className="sidebar-logo">
          UTS
        </div>
        <ul className="sidebar-navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/availability">Availability</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    );
  }
}
