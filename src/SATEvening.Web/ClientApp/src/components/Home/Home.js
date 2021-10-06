import React, { Component } from 'react';
import './StyleForm.css';
import { Link } from 'react-router-dom';
import AuthService from '../../Services/AuthService';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            message: ""
        };

        this.authService = new AuthService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                message: "Fields are required"
            });
        }

        try {
            const { username, password } = this.state;
            await this.authService.signIn(username, password);
            this.props.history.push("/profile");
        } catch(error) {
            this.setState({
                message: "An error occurred. Please wait or try again."
            });
        }
    }
  
    render () {
    return (
        <div className = "bg">
            <div className ="child">
                <h1 className="center"> Log In </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                                Username:
                        </label>
                        <div>
                            <input type="text" name="username" value={this.state.value} onChange={this.handleChange} style = {{ width: "350px" }} />
                        </div>
                    </div>
                    <div>
                        <label>
                                Password:
                        </label>
                        <div>
                            <input type="password" name="password" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                        </div>
                    </div>
                    <div className="center">
                        <input className="button" type="submit" value="Log In" style={{ width: "150px" }} />
                    </div>
                    <div className="center">
                        <input className="subButton" type="submit" value="Forgot My Password" style={{ width: "150px" }} />
                    </div>
                    <p className="text-danger text-center">{this.state.message}</p>
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

