import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class VerifiedEmail extends Component {
    static displayName = VerifiedEmail.name;

    render() {
        return (
            <div className="bg">
                <div className="childs">
                    <h1 className="center"> Verified </h1>
                    <p className="center"> Your email: </p>
                    <p className="center"> I'm not sure how to get the email here </p>
                    <div>   
                        <p className="center"> You may now continue to use the </p>
                        <p className="center"> My Scheduling Assistant tool as a Tutor </p>
                    </div>
                    <div className="center">
                        <Link to="/availability"><button className="button">Go to Dash Board</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}