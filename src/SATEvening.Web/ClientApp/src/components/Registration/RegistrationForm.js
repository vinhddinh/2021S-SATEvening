import React, { Component } from 'react';
import './RegistrationForm.css';

export class RegistrationForm extends Component {
    static displayName = RegistrationForm.name;

    render() {
        return (
            <div clasName="bg">
                <div className="form">
                    <h1 className="center"> Registration Form </h1>
                    <form>
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
                                <input type="text" name="First Name" style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Last Name*
                                </div>
                            </label>
                            <div>
                                <input type="text" name="Last Name" style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Username*
                                </div>
                            </label>
                            <div>
                                <input type="text" name="Last Name" style={{ width: "350px" }} />
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
                                    UTS Email Address*
                                </div>
                                <div className="additionalInfo">
                                    Using First name, Last name
                                </div>
                            </label>
                            <div>
                                <input type="text" name="Email" style={{ width: "350px" }} />
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
                                <input type="password" name="Password" style={{ width: "350px" }} />
                            </div>
                        </div>
                        <div className="center">
                            <input className="button" type="submit" value="Register" style={{ width: "150px" }} />
                        </div>
                        <div className="center">
                            <input className="subButton" type="submit" value="Go Back To Log In" style={{ width: "150px" }} />
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}