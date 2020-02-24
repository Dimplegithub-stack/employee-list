import React from 'react';
import Navlinks from './Navlinks';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'John',
                    age: 20
                },
            ]
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        const name = this.name.value;
        const age = this.age.value;
        const info = { name: name, age: age };
        const data = [...this.state.data, info];
        this.setState({
            data: data
        });



    }
    render() {
        return (
            <div className="container" >
                <Navlinks />

                <div className="jumbotron row">
                    <div class="col-md-12 text-center">
                        <form className="form-inline pb-5" onSubmit={this.onSubmit}>
                            <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text"
                                value={this.state.name} placeholder=" name" ref={input => this.name = input} />
                            <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text"
                                value={this.state.age} placeholder=" age" ref={input => this.age = input} />
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                        <div className="row">
                            {
                                this.state.data.map((info, index) => <Card key={index} info={info} />)
                            }
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
const Card = props =>
    <div className="col-md-8 col-lg-3">
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-title"><span>Name: </span>{props.info.name}</p>
                <p className="card-text">
                    <span>Age: </span>{props.info.age}
                </p>
            </div>
        </div>
    </div>;
export default Content