import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ConfirmEmail extends Component {
    static displayName = ConfirmEmail.name;

    render() {
        return (
            <div clasName="bg">
                <div className="childs">
                    <h1 className="center"> Check Email </h1>
                    <p className="center"> An email has been sent to: </p>
                    <p className="center"> I'm not sure how to get the email here </p>
                    <div>
                        <p className="center"> Please check your inbox and spam folder.</p>
                        <p className="center"> To continue, please follow the instructions in the email </p>
                    </div>
                    <div className="center">
                        <Link to="/"><button className="button">Go Back To Login </button></Link>
                    </div>
                </div>
            </div>
        );
    }
}