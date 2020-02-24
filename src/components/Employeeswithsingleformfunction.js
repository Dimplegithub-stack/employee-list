import React from 'react';
import './App.css';

class Employeeswithsingleformfunction extends React.Component {
    constructor() {
        super()
        this.state = {
            payload: {
                name: "",
                id: '',
                isPromoted: true,
                joinedAt: '',
                salary: 20000,
                profilePic: "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-512.png"

            },
            data: [
                {
                    "name": "srikanth1",
                    "id": 407094,
                    "isPromoted": true,
                    "joinedAt": 2016,
                    "salary": 20000,
                    "profilePic": "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-512.png"
                },
                {
                    "name": "srikanth2",
                    "id": 407096,
                    "isPromoted": true,
                    "joinedAt": 2018,
                    "salary": 30000,
                    "profilePic": "https://image.flaticon.com/icons/png/512/21/21294.png"
                },
                {
                    "name": "srikanth3",
                    "id": 407098,
                    "isPromoted": true,
                    "joinedAt": 2020,
                    "salary": 20000,
                    "profilePic": "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-512.png"
                },
                {
                    "name": "srikanth4",
                    "id": 407100,
                    "isPromoted": false,
                    "joinedAt": 2022,
                    "salary": 10000,
                    "profilePic": "https://image.flaticon.com/icons/png/512/21/21294.png"
                }
            ]
        }
    }
    changeJson(index, checkedstatus) {

        let newarray = this.state.data;
        const status = (checkedstatus == false) ? true : false
        newarray[index].isPromoted = status
        this.setState(prevState => {
            return {
                data: newarray
            }
        })

    }
    /* changeJson(index, checkedstatus) {
    this.setState(prevState  =>  {
     const  newItems  =  [...prevState.data];
     newItems[index].isPromoted  = checkedstatus;
     return  { data:  newItems };
 })
 }
 console.log(this.state.data)
 debugger*/

    deleteEmployee() {
        const oldData = this.state.data;
        let newData = oldData.filter((items) => items.isPromoted == true);
        this.setState(prevState => {
            return { data: newData };
        })
    }


    handleFormInput({target}, index, isPromoted) {
        const {data = []} = this.state
        this.setState((prevState) => {
            (index + 1) && (data[index].isPromoted = !prevState.data[index].isPromoted)
            return {
                payload: {
                    ...this.state.payload,
                    [target.id || target.name]: target.value
                },
                data: [
                    ...data
                ]

            }
        })

    }
    addEmployee() {
        this.setState({
            data:
            [
                ...this.state.data,
                this.state.payload
            ]

        })

    }




    render() {

        return (

            <div className="container">
                <div className="jumbotron">
                    <div class="alert alert-info">
                        <h1> The ({this.state.data.filter(item => item.isPromoted).length}) no of associates got promoted out of ({this.state.data.length}) associates</h1>
                    </div>


                    {

                        this.state.data.map((item, index) => {
                            const isPromotedEnabled = !item.isPromoted ? '' : 'checked';
                            const textpromoted = item.isPromoted ? 'Promoted' : 'Not Promoted';

                            return (
                                <div className="list-group " key={item.id}>
                                    <a href="#" className="list-group-item">
                                        <h4 className="list-group-item-heading">{item.name}</h4>
                                        <p className="list-group-item-text"> Joined in the year <span className="badge">{item.joinedAt}</span> with the employee id <span className="badge">{item.id}</span></p>
                                        <label>
                                            <input type="checkbox" defaultChecked={isPromotedEnabled} name="isPromoted" onChange={(e) => this.handleFormInput(e, index, item.isPromoted)} />{textpromoted}
                                        </label>
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="empName">Employee Name</label>
                                <input type="text" onChange={(e) => this.handleFormInput(e)} defaultValue={this.state.payload.name} className="form-control" id="name" placeholder="employee name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="empId">Employee ID</label>
                                <input type="text" onChange={(e) => this.handleFormInput(e)} defaultValue={this.state.payload.id} className="form-control" id="id" placeholder="employee Id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="joinedAt">Year ofJoining</label>
                                <input type="text" onChange={(e) => this.handleFormInput(e)} defaultValue={this.state.payload.joinedAt} className="form-control" id="joinedAt" placeholder="Joined year" />
                            </div>
                            <button type="button" className="btn btn-lg btn-primary" onClick={() => this.addEmployee()}>Add Employee</button>

                            <button type="button" className="btn btn-lg btn-warning" onClick={() => this.deleteEmployee()}>Delete Employee</button>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <pre>{JSON.stringify(this.state.payload, null, 4)}</pre>
                    </div>
                </div>
            </div>
        )
    }

}

export default Employeeswithsingleformfunction
