import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ConfirmEmail extends Component {
    static displayName = ConfirmEmail.name;

    render() {
        return (
            <div className="bg">
                <div className="childs">
                    <h1 className="center"> Check Email </h1>
                    <p className="center"> An email has been sent to your mailbox.</p>
                    <div>
                        <p className="center"> Please check your inbox and spam folder.</p>
                        <p className="center"> To continue, please follow the instructions in the email.</p>
                    </div>
                    <div className="center">
                        <Link to="/"><button className="button">Go Back To Login </button></Link>
                    </div>
                </div>
            </div>
        );
    }
}