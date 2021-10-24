import React, { Component } from "react";
//import Table from 'react-reactstrap/Table';
import "./SpecificAvailability.css";
import { Link } from 'react-router-dom';
//import {Table} from 'table';

export class SpecificAvailability extends Component {
    static displayName = SpecificAvailability.name;


    render() {

        function addSpecific() { 

        }

        return (
            <div>
                <body>
                    <div class="grid">
                        <header>
                            <h1 class="title"> Specific Availability </h1>
                        </header>
                        <Link to="/availability" id="Availability"> Save</Link>
                    </div>
                    <Link to="/edit-specific-availability" id="EditSpecificAvailability"> Add Date</Link>
                </body>
            </div>
         );
    }
}
