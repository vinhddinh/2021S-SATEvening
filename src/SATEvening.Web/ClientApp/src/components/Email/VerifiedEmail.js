import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class VerifiedEmail extends Component {
    static displayName = VerifiedEmail.name;

    render() {
        return (
            <div className="bg">
                <div className="childs">
                    <h1 className="center">Verified</h1>
                    <p className="center">Your email has been verified.</p>
                    <div>   
                        <p className="center">You may login now to use the</p>
                        <p className="center">My Scheduling Assistant tool as a Tutor</p>
                    </div>
                    <div className="center">
                        <Link to="/"><button className="button">Go to Login</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}