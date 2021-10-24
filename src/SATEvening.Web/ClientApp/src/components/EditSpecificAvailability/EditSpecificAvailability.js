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
                        <h1 class="title"> Edit Specific Availability </h1>
                    </header>
                    <button id="addDate" onClick={addSpecific}>Save</button>
                    //<Link to= "/edit-specific-availability
                    <form onSubmit= {this.handleSubmit}>
                        <div>
                        <label class ="text">
                            <div> 
                            Start Date
                            </div>
                        </label>
                       <div>
                                <input type= "text" name= "Start Date" >
                        </div>
                        </div>
                       <label class = "text">
                           <div>
                           End Date
                           </div>
                        </label>
                           <div>
                           <input type = "text" name = "End Date" >
                            </div>


                                
                </body>
            </div>
         );
    }
}
