import React, { Component } from 'react';
import './StyleForm.css';
import logo from '../assets/UTSB.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div clasName = "bg">
          <div className ="child">
              <h1 className = "center"> Log In </h1>
              <form>
                  <div>
                  <label>
                      <div>
                          Email Address:
                      </div>
                      <div>
                              <input type="text" name="Email Address" style={{ width: "350px" }}/>
                      </div>
                      </label>
                  </div>
                  <div>
                  <label>
                      <div>
                          Password:
                    </div>
                          <input type="text" name="Password" style={{ width: "350px" }}/>
                      </label>
                      </div>
                  <input className="center" type="submit" value="Log In" style={{ width: "150px" }} />
              </form>
              </div>
              </div>
    );
  }
}
