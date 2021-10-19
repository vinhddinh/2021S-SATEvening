import React, { Component } from "react";
import { Button } from "react";
import TableDragSelect from "react-table-drag-select";
//import { Redirect, Router, Switch, Route } from "react-router";
import { Link } from 'react-router-dom';
import "./Availability.css";

export class Availability extends Component {
    static displayName = Availability.name;

    initState = {
        savedCells: [],
        cells: [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            savedCells: this.initState.savedCells,
            cells: this.initState.cells
        };
        this.editGeneral = this.editGeneral.bind(this);
        this.saveGeneral = this.saveGeneral.bind(this);
    }
    editGeneral() {
        if (document.getElementById("editbutton").innerHTML === "Save") {
            this.setState({ savedCells: this.state.cells });
            document.getElementById("editbutton").innerHTML = "Edit";
            //document.getElementById("Table1").disabled = true;
        } else {
            document.getElementById("editbutton").innerHTML = "Save";
            //document.getElementById("Table1").disabled = false;
        }
    }

    async saveGeneral(event) {
        
    }

    render() {
      return (
          <div>
            <body>
              <header>
               <h1 classname= "title"> General Availability </h1>
              </header>
            </body>
              <button id="editbutton" onClick={() => this.editGeneral()}>Edit</button>
              <br></br>
          <Link to="/specific-availability"> <button id="SpecificAvailability">Edit Specific Availabilities</button></Link>
          <div id="Table1">
              <TableDragSelect
             value={this.state.cells}
             onChange={cells => this.setState({ cells })}
         >
        <tr>
          <td disabled />
          <td disabled>Monday</td>
          <td disabled>Tuesday</td>
          <td disabled>Wednesday</td>
          <td disabled>Thursday</td>
          <td disabled>Friday</td>
        </tr>
        <tr>
          <td disabled> 08:00 </td>
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
        </tr>
        <tr>
          <td disabled> 09:00 </td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled/>
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
        </tr>
        <tr>
          <td disabled />
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
