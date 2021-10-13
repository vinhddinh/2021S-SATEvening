import React, { Component } from "react";
import Table from 'react-reactstrap/Table';
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

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>Start Time</th>
                            <th>End Date</th>
                            <th>End Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>3/7</th>
                            <th>00:00</th>
                            <th>3/7</th>
                            <th>23:59</th>
                            <th><button id="editDate" onClick={editDate}>Edit</button></th>
                            <th><button id="deleteDate" onClick={deleteDate}>Delete</button></th>
                        </tr>
                        <tr>
                            <th>6/8</th>
                            <th>00:00</th>
                            <th>10/8</th>
                            <th>18:00</th>
                            <th><button id="editDate" onClick={editDate}>Edit</button></th>
                            <th><button id="deleteDate" onClick={deleteDate}>Delete</button></th>
                        </tr>
                        <tr>
                            <th>1/8</th>
                            <th>8:00</th>
                            <th>1/8</th>
                            <th>11:00</th>
                            <th><button id="editDate" onClick={editDate}>Edit</button></th>
                            <th><button id="deleteDate" onClick={deleteDate}>Delete</button></th>
                        </tr>
                    </tbody>
                </Table>
            </div>
         );
    }
}
