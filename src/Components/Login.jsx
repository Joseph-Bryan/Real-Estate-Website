import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsernameChange = event => {
    console.log("new username", event.target.value);
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    console.log("new password", event.target.value);
    this.setState({ password: event.target.value });
  };
  handleSubmit = async evt => {
    evt.preventDefault();
    // console.log("login form submitted");
    // let data = new FormData();
    // data.append("username", this.state.username);
    // data.append("password", this.state.password);
    // let response = await fetch("/login", {
    //   method: "POST",
    //   body: data,
    //   credentials: "include"
    // });
    // let responseBody = await response.text();
    // console.log("responseBody from login", responseBody);
    // let body = JSON.parse(responseBody);
    // console.log("parsed body", body);
    // if (!body.success) {
    //   alert("login failed");
    //   return;
    // }
    console.log("going to submit the login form");
    this.props.history.push("/admin");
  };
  render = () => {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   Username
      //   <input type="text" onChange={this.handleUsernameChange} />
      //   Password
      //   <input type="password" onChange={this.handlePasswordChange} />
      //   <input type="submit" />
      // </form>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row justify-content-md-center">
          <div className="col-6">
            <div className="card">
              <h5
                className="card-title text-center"
                style={{ paddingTop: "20px" }}
              >
                LOGIN
              </h5>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.handleUsernameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Login;
