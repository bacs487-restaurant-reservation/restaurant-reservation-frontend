import React from "react";
import List from "./List";
import {TextField} from "@mui/material";

class ZipForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
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
                <Restaurants input={this.state.value}/>
            </div>
        );

    }
}

export default ZipForm;