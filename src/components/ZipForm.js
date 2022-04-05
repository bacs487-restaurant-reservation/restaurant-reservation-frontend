import React from "react";
import List from "./List";
import {TextField} from "@mui/material";
import Restaurants from "./Restaurants";

import MediaCard from "./RestRender";

// Material Design Libraries
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class ZipForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.zipFound = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }


    // This will execute on submit
    handleSubmit(event) {
        document.getElementById("theList").innerHTML = "";

        fetch(`http://143.198.139.94:3000/restaurants/`)
            .then(results => results.json())
            .then(json => {

                for (let i = 0; i < json.length; i++) {
                    if (json[i].zip_code == this.state.value) {
                        this.zipFound.push(json[i]);
                    }
                }

                let ul = document.getElementById("theList");

                for (let i =0; i < this.zipFound.length; i++) {
                    let li = document.createElement("li");

                    li.appendChild(document.createTextNode(this.zipFound[i].restaurant_name));
                    ul.appendChild(li);
                }

                let restContainer = document.getElementById("theContainer");

                for (let i =0; i < this.zipFound.length; i++) {
                    let restCard = document.createElement("Card");
                    let restCardContent = document.createElement("CardContent");
                    restCard.appendChild(restCardContent);
                    let restCardTypography = document.createElement("Typography");
                    restCardTypography.innerText = this.zipFound[i].id;
                    restCardContent.appendChild(restCardTypography);

                    restContainer.appendChild(restCard);
                }

            })

        // document.getElementById("theList").innerHTML = ;
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.handleSubmit}><label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>

                <ul id="theList"></ul>

                <div id="theContainer"></div>

            </>
        );

    }
}

export default ZipForm;