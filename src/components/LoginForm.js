import React from 'react'
import '../index.css';

// import { Redirect } from 'react-router-dom' 
// import Employee from '../components/Employee'
import PropTypes from 'prop-types';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          username: '',
          password: "",
          loginstatus: false
        },
      ]
    }
  }

  handleSubmit = event => {

    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    if (username === "" || password === "") {
      alert("Please enter the username and password");
    } 
    else
    {
      const loginstatus = true;
      const info = { username: username, password: password, loginstatus: loginstatus };
      const data = [...this.state.data, info];
      this.setState({
        data: data
      });
      if (loginstatus === true) {
        this.props.history.push('/employee');
      }
    }



  };



  render() {

    return (
      <React.Fragment>
        <h2 className="text-center pb-5">Welcome to Employee Management</h2>
        <div className="form-signin">
          <h3 className="text-center" style={{ color: "blue" }}>Please Login </h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="pr-3">Username:</label>
            <input
              type="text"
              name="username"
              ref={input => this.username = input}

            />

            <label htmlFor="password" className="pr-3">Password:</label>
            <input
              type="password"
              name="password"
              ref={input => this.password = input}

            />

            <button
              type="submit"
              className="btn btn-primary btn-lg text-center mt-3" style={{ display: "block", margin: "auto" }} username={this.state.username} >{this.state.loginstatus ? "Logout" : "Login"}
            </button>
          </form>
          {/*<pre >{JSON.stringify(this.state.data, null, 4)}</pre>*/}
        </div>

      </React.Fragment>
    );
  }
}




export default LoginForm