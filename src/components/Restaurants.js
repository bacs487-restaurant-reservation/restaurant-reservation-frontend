import React from "react";

class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        this.input = props.input;
        this.filterZip = [];
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch(`http://143.198.139.94:3000/restaurants/`)
            .then(results => results.json())
            .then(json => {

                for (let i = 0; i < json.length; i++) {
                    if (json[i].zip_code === this.input) {
                        this.filterZip.push(json[i].restaurant_name)
                    }
                }

                console.log(this.filterZip);
            })
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }

    render() {

        console.log(this.filterZip)

        return this.filterZip;

        // let {
        //     isLoaded,
        //     items
        // } = this.state;
        //
        // if (!isLoaded) {
        //     return (<div> Loading... </div>)
        // } else {
        //
        //     return (
        //         <div>
        //             <ul>
        //                 {this.filterZip.map((item, key) => (
        //                     <li>{item}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     );
        // }
    }
}

export default Restaurants;