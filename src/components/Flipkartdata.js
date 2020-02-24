import React from 'react';
import Mobileimg from './Mobileimg';
import Mobilespecification from './Mobilespecification';
import Mobilepricedetail from './Mobilepricedetail';
import Navlinks from './Navlinks';


class Flipkartdata extends React.Component {
  constructor() {
    super()
    this.state = {
      mobiledata: [

      ]
    }

  }
  componentDidMount() {
    fetch('https://jsonblob.com/api/96d879a8-4ccc-11ea-97f8-f97155a65a99')
      .then(response => response.json())
      .then(response => this.setState({ mobiledata: [...response] })
      )
  }

  render() {
    const rowstyle = {
      padding: 30,
      borderBottom: '2px solid gray'

    }
    return (


 
        <div className="container" >
             <Navlinks/>

      <div className="jumbotron" >

        {this.state.mobiledata.map((item, index) => {

          return (
            <div className="row" key={index} style={rowstyle}>
              <div className="col-md-3"> <Mobileimg img={item.img} /></div>
              <div className="col-md-6"> <Mobilespecification specification={item.specification} mobile={item.mobile} ratings={item.ratings} /></div>
              <div className="col-md-3"> <Mobilepricedetail amt={item.amt} discount={item.discount} emi={item.emi} exchange={item.exchange} /></div>
              <hr />
            </div>

          )
        })

        }

      </div>
      </div>

    )
  }
}




export default Flipkartdata
