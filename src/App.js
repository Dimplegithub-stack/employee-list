import React from 'react'
// import Loginformwithsingleinput from './Loginformwithsingleinput'
// import Loginformwithmultipleinput from './Loginformwithmultipleinput'
// import Loginformwithsingleinputuncontrolled from './Loginformwithsingleinputuncontrolled'
// import Application from './Application'
// import Employeeswithhooks from './Employeeswithhooks'
import LoginForm from './components/LoginForm'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  return (
    <div className="container" >
           {/* <Application/>
           <Loginformwithsingleinputuncontrolled/>
           <Loginformwithsingleinput/>
           <Loginformwithmultipleinput/> */}
           {/* <Employeeswithhooks/> */}
           <LoginForm  {...props} />
    </div>
  );
}

export default App;

