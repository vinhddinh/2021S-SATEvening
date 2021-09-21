import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from '../assets/UTSlogo3.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom header" light>
          <Container>
            <NavbarBrand to="/"><img src={logo}/></NavbarBrand>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-white" to="/">MySchedulingAssistant</NavLink>
            </NavItem>
            </ul>
          </Container>
        </Navbar>
      </header>
    );
  }
}
