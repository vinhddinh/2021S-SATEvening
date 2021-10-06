import React, { Component } from "react";
import { Button } from "react";
import TableDragSelect from "react-table-drag-select";
import "./Availability.css";

export class Availability extends Component {
    static displayName = Availability.name;

  state = {
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

    render() {
        function editGeneral() {
            if (document.getElementById("editbutton").innerHTML == "Edit") {
                document.getElementById("editbutton").innerHTML = "Save";                
            }
            else {
                document.getElementById("editbutton").innerHTML = "Edit";
            }    
        }
      return (
          <div>
            <body>
              <header>
               <h1> General Availability </h1>
              </header>
            </body>
        <button id="editbutton" onClick={editGeneral}>Edit</button>
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
    );
  }
}
