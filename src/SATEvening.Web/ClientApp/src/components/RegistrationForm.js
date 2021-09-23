import React, { Component } from 'react';
import './RegistrationForm.css';

export class RegistrationForm extends Component {
    static displayName = RegistrationForm.name;

    render() {
        return (
            <div clasName="bg">
                <div className="child">
                    <h1 className="center"> Registration Form </h1>
                    <form>
                        <div>
                            <label className="labelText">
                                <div>
                                    Select Role:
                                </div>
                                <select name="selectList" id="selectList">
                                    <option value="Tutor">Tutor</option>
                                    <option value="Coord">Subject Coordinator</option>
                                    <option value="Admin">Subject Administartor</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    First Name*
                                </div>
                                <input type="text" name="First Name" style={{ width: "350px" }} />
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Last Name*
                                </div>
                                <input type="text" name="Last Name" style={{ width: "350px" }} />
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Staff ID #
                                </div>
                                <input type="text" name="Staff ID" style={{ width: "350px" }} />
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Phone Number
                                </div>
                                <input type="text" name="Phone" style={{ width: "350px" }} />
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    UTS Email Address*
                                </div>
                                <input type="text" name="Email" style={{ width: "350px" }} />
                                <div className="additionalInfo">
                                    Using First name, Last name
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="labelText">
                                <div>
                                    Password*
                                </div>
                                <input type="text" name="Password" style={{ width: "350px" }} />
                                <div className="additionalInfo">
                                    At least 8 characters containing numbers and symbols
                                </div>
                            </label>
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