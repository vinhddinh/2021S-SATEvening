import React, { Component } from 'react';
import './StyleForm.css';
import { Link } from 'react-router-dom';

export class Home extends Component {

    static displayName = Home.name;
  
    render () {
    return (
        <div className = "bg">
            <div className ="child">
                <h1 className = "center"> Log In </h1>
                <form>
                    <div>
                        <label>
                                Email Address:
                        </label>
                        <div>
                            <input type="text" name="Email Address" style={{ width: "350px" }} />
                        </div>
                    </div>
                    <div>
                        <label>
                                Password:
                        </label>
                        <div>
                            <input type="password" name="Password" style={{ width: "350px" }} />
                        </div>
                    </div>
                    <div className="center">
                        <input className="button" type="submit" value="Log In" style={{ width: "150px" }} />
                    </div>
                    <div className="center">
                        <input className="subButton" type="submit" value="Forgot My Password" style={{ width: "150px" }} />
                    </div>
                </form>
                </div>
            <div className="childs">
                <h1 className="center"> Create Account </h1>
                <p className="centers"> Register for an account below </p>
                <div className="center">
                    <Link to="/register"><button className="button">Register</button></Link>
                </div>
            </div>
        </div>
    );
  }
}

