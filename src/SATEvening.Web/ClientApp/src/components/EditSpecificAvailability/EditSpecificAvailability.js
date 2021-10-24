import React, { Component } from "react";
//import Table from 'react-reactstrap/Table';
import "./EditSpecificAvailability.css";

export class EditSpecificAvailability extends Component {
    static displayName = EditSpecificAvailability.name;


    render() {

        function addSpecific() { 

        }

        return (
            <div>
                <body>
                    <header>
                        <h1> Edit Specific Availability </h1>
                    </header>
                    <button id="addDate" onClick={addSpecific}>Add Date</button>
                </body>
            </div>
         );
    }
}
