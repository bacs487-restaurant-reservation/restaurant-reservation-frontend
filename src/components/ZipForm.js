import React from "react";
import List from "./List";
import {TextField} from "@mui/material";
import Restaurants from "./Restaurants";

class ZipForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {

        let zipFound = []
        document.getElementById("theList").innerHTML = "";

        fetch(`http://143.198.139.94:3000/restaurants/`)
            .then(results => results.json())
            .then(json => {

                // for (let i = 0; i < json.length; i++) {
                //     if (json[i].zip_code === this.input) {
                //         this.filterZip.push(json[i].restaurant_name)
                //     }
                // }

                for (let i = 0; i < json.length; i++) {
                    if (json[i].zip_code == this.state.value) {
                        zipFound.push(json[i]);
                    }
                }

                let ul = document.getElementById("theList");

                for (let i =0; i < json.length; i++) {
                    let li = document.createElement("li");
                    li.appendChild(document.createTextNode(zipFound[i].restaurant_name));
                    ul.appendChild(li);
                    li.appendChild(document.createTextNode(zipFound[i].id));
                    ul.appendChild(li);
                }

            })

        // document.getElementById("theList").innerHTML = ;
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}><label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <ul id="theList"></ul>
            </div>
        );

    }
}

export default ZipForm;