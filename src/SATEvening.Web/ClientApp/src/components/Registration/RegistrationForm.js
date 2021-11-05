import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

export class RegistrationForm extends Component {
    static displayName = RegistrationForm.name;

    constructor(props) {
        super(props);

        this.state = {
            firstname:"",
            lastname:"",
            password: "",
            confirmpassword: "",
            email:"",
            message: "",
            isError: false
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

        try {
            this.handlePassword();

            const { message, isError, ...registrationDetails } = this.state;
            await this.authService.register(registrationDetails);
            this.props.history.push("/confirm-email");
        } catch(error) {
            this.setState({
                message: error.message,
                isError: true
            });
        }
    }

    handlePassword() {
        if (this.state.password !== this.state.confirmpassword) {
            throw new Error("Password is not the same. Try again");
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="form">
                    <h1 className="center"> Registration Form </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="labelText">
                                <div>
                                    Select Role:
                                </div>
                            </label>
                            <div>
                                <select name="selectList" id="selectList">
                                    <option value="Tutor">Tutor</option>
                                    <option value="Coord">Subject Coordinator</option>
                                    <option value="Admin">Subject Administartor</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    First Name*
                                </div>
                            </label>
                            <div>
                                <input type="text" name="firstname" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Last Name*
                                </div>
                            </label>
                            <div>
                                <input type="text" name="lastname" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    UTS Email Address*
                                </div>
                                <div className="additionalInfo">
                                    Using First name, Last name
                                </div>
                            </label>
                            <div>
                                <input type="text" name="email" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Staff ID #
                                </div>
                            </label>
                            <div>
                                <input type="text" name="Staff ID" style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Phone Number
                                </div>
                            </label>
                            <div>
                                <input type="text" name="Phone Number" style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Password*
                                </div>
                                <div className="additionalInfo">
                                    At least 8 characters containing numbers and symbols
                                </div>
                            </label>
                            <div>
                                <input type="password" name="password" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                            </div>
                            <label className="labelText">
                                <div>
                                    Confirm Password*
                                </div>
                                <div className="additionalInfo">
                                    Re-enter your password
                                </div>
                            </label>
                            <div>
                                <input type="password" name="confirmpassword" value={this.state.value} onChange={this.handleChange} style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div className="center">
                            <input className="button" type="submit" value="Register" style={{ width: "150px" }} />
                        </div>
                        <div className="center">
                            <Link to="/"><button className="subButton">Go Back To Log In</button></Link>
                        </div>
                    </form>
                    <p className={this.state.isError && "text-danger"}>{this.state.message}</p>
                </div>
            </div>
        );
    }
}