import React from "react"


class Mobilespecification extends React.Component{

    constructor(props){

        super()
        
console.log(props)
    }

    render(){
        const h3Stylespecdetails = {
            color: 'blue'
        }
        const ulstyle ={
                fontWeight: 700,
    fontSize: 15
        }
        const pStylespecdetails ={
            paddingBottom:5,
            color :'green'
        }
        return(
            <div>
                 <h3 style={h3Stylespecdetails}>${this.props.mobile}</h3>
                 <p style={pStylespecdetails}>${this.props.ratings}</p>
               <ul >
                  {this.props.specification.map((spec,i) =>{
                       return <li style={ulstyle} key={i}>{spec}</li>
                   })} 
               </ul>

            </div>
            
        )

    }

}

 

export default Mobilespecification
