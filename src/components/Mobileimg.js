import React from "react"

class Mobileimg extends React.Component {
    constructor(props) {
        super()
    }
    render() {

        return (
            <div>
                <img src={this.props.img} alt="aternate"/>
                <p ><input type="checkbox" /> Add to Compare</p>

            </div>

        )
    }
}



export default Mobileimg
