// this will be the page were the user is directed to after the zip code screen
//  have a link that links to every restaurant

import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurants from "./Restaurants";

function AllRestaurants(){
    let navigate = useNavigate();
    return(
        <center>
            <div className="container">
                <header style={{textAlign: 'center'}}>Restaurants in your area!</header>

                <Restaurants />

                <button onClick={() =>(navigate("/zipcode"))}>Back</button>

            </div>
        </center>
    )

}

export default AllRestaurants