import React from "react"




class Mobilepricedetail extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        const h3Stylepricedetails = {
            color: 'blue'
        }
        return (
            <div>
                <h3 style={h3Stylepricedetails}>${this.props.amt}</h3>
                <div>${this.props.discount}</div>
                <div>${this.props.emi}</div>
                <div>${this.props.exchange}</div>

            </div>
        )
    }
}


export default Mobilepricedetail
