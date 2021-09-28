import React, { Component } from 'react';
import './Sidebar.css';

export class Sidebar extends Component {
  static displayName = Sidebar.name;

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
