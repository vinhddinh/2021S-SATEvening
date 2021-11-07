import React, { Component } from "react";
//import Table from 'react-reactstrap/Table';
import "./EditSpecificAvailability.css";
import { Link } from 'react-router-dom';
import TableDragSelect from "react-table-drag-select";

export class EditSpecificAvailability extends Component {
    static displayName = EditSpecificAvailability.name;

    //Date Table
    initState = {
        savedCells: [],
        cells: [
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false],
            [false, false]
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            savedCells: this.initState.savedCells,
            cells: this.initState.cells
        };
    }

    render() {

        return (
            <div>
                <div>
                    <div class="grid">
                    <header>
                        <h1 id="title"> Edit Specific Availability </h1>
                    </header>
                        <Link to="/specific-availability" id="save">Save</Link>
                    </div>
                    {/* Dates for the specific availability table */}
                    <form>
                        <div>
                            <label class="text" id="formtxt"> Start Date </label>
                        </div>
                        <div>
                            <input type="text" name="Start Date" id="txtbox" placeholder="October 25th" />
                        </div>
                        <div>
                            <label class="text" id="formtxt2" > End Date</label>
                        </div >
                        <div >
                            <input type="text" name="End Date" id="txtbox" placeholder="October 25th"/>
                        </div>
                    </form>
                    
                    <div id="Table2" class="myDisabledDiv">
                        <TableDragSelect
                            value={this.state.cells}
                            onChange={cells => this.setState({ cells })}
                        >
                            <tr>
                                <td disabled />
                                <td disabled>Monday October 25th </td>
                            </tr>
                            <tr>
                                <td disabled> 08:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 09:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 10:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 11:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 12:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 13:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 14:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 15:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 16:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 17:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 18:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 19:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                            <tr>
                                <td disabled> 20:00 </td>
                                <td />
                            </tr>
                            <tr>
                                <td disabled />
                                <td />
                            </tr>
                        </TableDragSelect>
                    </div>
                </div>
            </div>
         );
    }
}
