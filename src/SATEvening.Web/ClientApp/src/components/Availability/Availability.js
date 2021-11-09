import React, { Component } from "react";
import { Button } from "react";
import TableDragSelect from "react-table-drag-select";
//import { Redirect, Router, Switch, Route } from "react-router";
import { Link } from 'react-router-dom';
import "./Availability.css";
import AvailabilityService from '../../Services/AvailabilityService';

export class Availability extends Component {
    static displayName = Availability.name;

    //calendar/ general availability Table
    initState = {
        savedCells: [],
        cells: [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false]
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            savedCells: this.initState.savedCells,
            cells: this.initState.cells,

            //userID: "b0855012-f026-4343-a40d-a26485292ba8"  //local
            userID: "638d88e2-a229-46c7-bf2c-fe7235bd56d0"  //remote
        };

        this.availabilityService = new AvailabilityService();

        this.stringToTable = this.stringToTable.bind(this);
        this.tableToString = this.tableToString.bind(this);
        this.stringToTable = this.stringToTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getAvailability = this.getAvailability.bind(this);
        this.editGeneral = this.editGeneral.bind(this);
    }

    async componentDidMount() {
        await this.getAvailability();
    }

    async handleChange(table) {
        this.setState({ ...this.state, cells: table });
        this.availabilityService.updateAvailability(this.state.userID, this.tableToString(this.state.cells));
    }

    async getAvailability() {
        var availabilityString = await this.availabilityService.getAvailability(this.state.userID);
        var availabilityTable = this.stringToTable(availabilityString, this.state.cells);
        this.setState({ ...this.state, cells: availabilityTable });
    }

    tableToString(table) {
        var result = "";
        for (var i = 0; i < table.length; i++) {
            for (var j = 0; j < table[i].length; j++) {
                result += (table[i][j] === true ? '1' : '0');
            }
        }
        return result;
    }

    stringToTable(availabilityString, table) {
        for (var i = 0; i < table.length; i++) {
            for (var j = 0; j < table[i].length; j++) {
                table[i][j] = availabilityString[i * table[i].length + j] === '1';
            }
        }
        return table;
    }

    //function called when edit/save button pressed chaning both state of the button and table
    editGeneral() {
        if (document.getElementById("editbutton").innerHTML === "Save") {
            this.setState({ savedCells: this.state.cells });
            document.getElementById("editbutton").innerHTML = "Edit";
            document.getElementById("Table1").classList.add('myDiv');
            document.getElementById("Table1").classList.remove('myDisabledDiv');
            document.getElementById("editbutton").classList.remove('save');
            document.getElementById("editbutton").classList.add('edit');
        } else {
            document.getElementById("editbutton").innerHTML = "Save";
            document.getElementById("editbutton").classList.remove('edit');
            document.getElementById("editbutton").classList.add('save');
            document.getElementById("Table1").classList.remove('myDiv');
            document.getElementById("Table1").classList.add('myDisabledDiv');
        }
    }

    render() {
        return (
            <div>
                <div className="grid">
                    <body>
                        <header>
                            <h1 className="title"> General Availability </h1>
                        </header>
                    </body>
                    <button id="editbutton" className="edit" onClick={() => this.editGeneral()}>Edit</button>
                    <br></br>
                    <Link to="/specific-availability" id="SpecificAvailability"> Edit Specific Availabilities</Link>
                </div>
                <div id="Table1" className="myDiv">
                    <TableDragSelect
                        value={this.state.cells}
                        onChange={cells => this.handleChange(cells)}
                    >
                        <tr>
                            <td disabled />
                            <td disabled>Monday</td>
                            <td disabled>Tuesday</td>
                            <td disabled>Wednesday</td>
                            <td disabled>Thursday</td>
                            <td disabled>Friday</td>
                            <td disabled>Saturday</td>
                            <td disabled>Sunday</td>
                        </tr>
                        <tr>
                            <td disabled> 08:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 09:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 10:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 11:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 12:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 13:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 14:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 15:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 16:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 17:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 18:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 19:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled> 20:00 </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td disabled />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                    </TableDragSelect>
                </div>
            </div>
        );
  }
}