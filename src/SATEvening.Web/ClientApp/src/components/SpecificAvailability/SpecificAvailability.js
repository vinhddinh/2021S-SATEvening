import React, { Component } from "react";
import { Table } from 'reactstrap';
import "./SpecificAvailability.css";
import { Link } from 'react-router-dom';
//import Table from 'react-bootstrap';


export class SpecificAvailability extends Component {
    static displayName = SpecificAvailability.name;


    render() {

        return (
            <div>
                <body>
                    <div class="grid">
                        <header>
                            <h1 class="title"> Specific Availability </h1>
                        </header>
                        <Link to="/availability" id="Availability2"> Save</Link>
                    </div>

                    <Link to="/edit-specific-availability" id="EditSpecificAvailability"> Add Date</Link>
                </body>
                <div id="table">
                {/*Table displaying all current specific availability*/}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>Start Time</th>
                            <th>End Date</th>
                            <th>End Time</th>
                            <th>Notes</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>October 25th 2021</td>
                            <td>00:00</td>
                            <td>October 26th 2021</td>
                            <td>23:59</td>
                            <td>Not Available</td>
                            <td><button class="edit2">Edit</button></td>
                            <td><button class="delete">Delete</button></td>
                        </tr>
                        <tr>
                            <td>December 1st 2021</td>
                            <td>00:00</td>
                            <td>December 24th 2021</td>
                            <td>23:59</td>
                            <td>Not Available</td>
                            <td><button class="edit2">Edit</button></td>
                            <td><button class="delete">Delete</button></td>
                        </tr>
                        <tr>
                            <td>November 11th 2021</td>
                            <td>10:00</td>
                            <td>November 11th 2021</td>
                            <td>14:00</td>
                            <td>Not Available</td>
                            <td><button class="edit2">Edit</button></td>
                            <td><button class="delete">Delete</button></td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
            </div>
         );
    }
}
