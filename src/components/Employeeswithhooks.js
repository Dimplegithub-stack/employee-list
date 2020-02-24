import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks';
import EditemployeeModal from './Modal';


const Employeeswithhooks = () => {


    const [payload, setPayload] = useState({
        name: "",
        id: '',
        isPromoted: true,
        joinedAt: '',
        salary: 20000,
        gender: "",
        isEditing: false
    })
    const [data, setData] = useState(
        [
            {
                "name": "Ramya",
                "id": 407096,
                "isPromoted": true,
                "joinedAt": 2016,
                "salary": 20000,
                "gender": "Female",
                "isEditing": false
            },
            {
                "name": "Divya",
                "id": 407093,
                "isPromoted": true,
                "joinedAt": 2018,
                "salary": 30000,
                "gender": "Female",
                "isEditing": false
            },

            {
                "name": "Santhosh",
                "id": 407100,
                "isPromoted": true,
                "joinedAt": 2020,
                "salary": 20000,
                "gender": "Male",
                "isEditing": false
            },

            {
                "name": "Ravi",
                "id": 407068,
                "isPromoted": false,
                "joinedAt": 2022,
                "salary": 10000,
                "gender": "Male",
                "isEditing": false
            }
        ])
    const [show, setShow] = useState(false);
    const [editData, setEditData] = useState({});
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);


    const handleFormInput = ({ target }) => {
        setPayload({
            ...payload,
            [target.id || target.name]: target.value
        })
    }

    const changeJsonforcheckbox = ({ target }, index, isPromoted) => {
        data[index].isPromoted = !isPromoted;
        setData([
            ...data
        ]);
    }


    const addEmployee = (userenterid) => {
        if (payload.Id === "" || payload.name === "" || payload.joinedAt === "" || payload.gender === "") {
            alert("Please enter the value to proceed")
        }
        else if (data.filter(item => item.id === userenterid).length === 0) {
            setData([...data, payload]);
        } else {
            alert("User already exist")
        }
    }

    const reset = () => {
        setPayload({
            name: "",
            id: '',
            isPromoted: true,
            joinedAt: '',
            salary: 20000,
            gender: "",
            isEditing: false
        })
    }



    const deleteEmployeeNotPromoted = () => {
        let newdata = data.filter(items => items.isPromoted === true);
        setData([
            ...newdata
        ]);
    }

    const onDelete = (index) => {
        console.log(index);
        setData([
            ...data.slice(0, index),
            ...data.slice(index + 1)
        ]);
    }

    const sortByIdAsc = (id) => {
        const sorted = [...data].sort((a, b) => {
            return b.id - a.id;
        });
        setData(sorted);
        //alert(sorted[0].name);
    };


    const sortByIdDes = (id) => {
        const sorted1 = [...data].sort((a, b) => {
            return a.id - b.id;
        });
        setData(sorted1);
        //alert(sorted[0].name);
    };

    const changeEditMode = (e, id) => {
        console.log( id)
        setShow(true);
       const dataFilter = data.filter((item)=>{ return (id ===item.id)});
    setEditData(dataFilter[0]);
    }

    const handleClose = () => setShow(false);


    return (

        <div className="container" >
            <EditemployeeModal enable={show} handleClose={handleClose} editData={editData}/>
            <Navlinks />

            <div className="jumbotron row">
                <h1 className="text-center" style={{ width: 1000, paddingBottom: 20 }}>Empolyees Management</h1>
                {<div className="alert alert-info">
                    <h3 style={{ width: 1000 }} className="text-center"> The ({data.filter(item => item.isPromoted).length}) no of associates got promoted out of ({data.length}) associates</h3>
                </div>}
                {
                    data.map((item, index) => {
                        const isPromotedEnabled = !item.isPromoted ? '' : 'checked';
                        const textpromoted = item.isPromoted ? 'Promoted' : 'Not Promoted';
                        return (
                            <div className="list-group col-md-6" key={index} style={{ marginBottom: 10 }}>
                                {/* <pre>{JSON.stringify(item, null, 4)}</pre> */}
                                <div className="list-group-item text-center" >
                                    <img alt="dh" src={(item.gender === "Male") ? "https://image.flaticon.com/icons/png/512/21/21294.png" : "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-512.png"} style={{ width: 150, paddingBottom: 15 }} />
                                    <h4 className="list-group-item-heading">
                                        <label >Employee Name:</label> {item.name}</h4>
                                    <div className="list-group-item-text">
                                        <h5><label >Joined Year:</label> <span className="badge">{item.joinedAt}</span> </h5>
                                        <h5><label >Employee Id :</label> <span className="badge">{item.id}</span></h5>
                                    </div>
                                    <label style={item.isPromoted ? { backgroundColor: 'yellowgreen' } : { backgroundColor: 'transparent' }} >
                                        <input type="checkbox" defaultChecked={isPromotedEnabled} name="isPromoted" onChange={(e) => changeJsonforcheckbox(e, index, item.isPromoted)} />{textpromoted}
                                    </label>
                                    <p className="text-center">Salary of Empolyee : {item.salary}  {item.isPromoted ? "plus 100000 Bonus" : ""} </p>
                                    <button type="button" className="btn btn-primary mr-2" onClick={(e) => changeEditMode(e, item.id)}>Edit</button>
                                    <button type="button" className="btn btn-primary" onClick={() => onDelete(index)}> Delete </button>
                                </div>
                            </div>
                        )
                    })
                }
                <p className="text-right" style={{ paddingTop: 30, fontWeight: 700, color: "blue", width: 1000, fontSize: 30 }}>Total Salary of all Empolyees: {data.map(key => key.salary).reduce((previous, current) => previous + current)}</p>
            </div>



            <div className="row" >
                <div className="col-sm-9 pt-5 pb-5" style={{ backgroundColor: "white" }}>
                    <h3 style={{ width: 1000, paddingBottom: 20 }}>Please fill the details of New Joinee</h3>
                    <form >
                        <div className="form-group">
                            <label htmlFor="empName" style={{ fontWeight: 700 }}>Employee Name</label>
                            <input type="text" onChange={(e) => handleFormInput(e)} defaultValue={payload.name} className="form-control" id="name" placeholder="Enter the Employee Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="empId" style={{ fontWeight: 700 }}>Employee ID</label>
                            <input type="text" onChange={(e) => handleFormInput(e)} defaultValue={payload.id} className="form-control" id="id" placeholder="Enter the Employee Id" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="joinedAt" style={{ fontWeight: 700 }}>Year of Joining</label>
                            <input type="text" onChange={(e) => handleFormInput(e)} defaultValue={payload.joinedAt} className="form-control" id="joinedAt" placeholder="Enter the Employee Joined year" />
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" id="gender"  onChange={(e) => handleFormInput(e)} placeholder="Select the Gender">
                                    <option disabled selected="selected">Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>



                        <button type="button" className="btn btn-lg btn-primary" style={{ marginRight: 10 }} onClick={() => addEmployee(payload.id)} >Add</button>
                        <button type="button" className="btn btn-lg btn-warning" style={{ marginRight: 10 }} onClick={() => deleteEmployeeNotPromoted()}>Delete </button>
                        <button type="button" className="btn btn-lg btn-primary" style={{ marginRight: 10 }} onClick={() => sortByIdDes(data.Id)}>Sort A-Z</button>
                        <button type="button" className="btn btn-lg btn-primary" style={{ marginRight: 10 }} onClick={() => sortByIdAsc(data.Id)}>Sort Z-A</button>


                        <input type="reset" defaultValue="Reset" className="btn btn-lg btn-primary " onClick={() => reset()} />

                    </form>



                </div>



                <div className="col-sm-3 xzc pt-5" style={{ fontWeight: 700, backgroundColor: "#ceefeb" }}>

                    <h3 style={{ width: 1000, paddingBottom: 20 }}> Details of Associate</h3>

                    <pre >{JSON.stringify(payload, null, 4)}</pre>
                </div>
            </div>
        </div>
    )

}


export default Employeeswithhooks
