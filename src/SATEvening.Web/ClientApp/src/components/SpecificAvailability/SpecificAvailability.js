import React, { Component } from "react";
//import Table from 'react-reactstrap/Table';
import "./SpecificAvailability.css";

export class SpecificAvailability extends Component {
    static displayName = SpecificAvailability.name;


    render() {

        function addSpecific() { 

        }

        function editDate() {

        }

        function deleteDate() {

        }

        return (
            <div>
                <body>
                    <header>
                        <h1> Specific Availability </h1>
                    </header>
                    <button id="addDate" onClick={addSpecific}>Add Date</button>
                </body>
            </div>
         );
    }
}
