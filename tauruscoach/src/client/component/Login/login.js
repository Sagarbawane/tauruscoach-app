import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { startLoginUser } from "../../actions/userAction";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      errors: {
        userName: "",
        password: "",
      },
    };
  }
  handleBack = () => {
    this.props.history.push(`/`);
  };
  registerPage = () => {
    this.props.history.push(`/register`);
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "userName":
        errors.userName =
          value.length < 5 ? "User Name must be 5 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      const formData = {
        userName: this.state.userName,
        password: this.state.password,
      };
      console.log(formData);
      const redirect = () => {
        this.props.history.push("/dashboard");
      };
      this.props.dispatch(startLoginUser(formData, redirect));
    } else {
      console.error("Invalid Form");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="box-container4">
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <div className="fullName" noValidate>
                  <label for="exampleInputEmail1">UserName</label>
                  <input
                    type="userName"
                    name="userName"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    noValidate
                  />
                  {this.state.errors.userName.length > 0 && (
                    <span className="error">{this.state.errors.userName}</span>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your username with anyone else.
                  </small>
                </div>
              </div>
              <div class="form-group">
                <div className="fullName" noValidate>
                  <label for="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    noValidate
                  />
                  {this.state.errors.password.length > 0 && (
                    <span className="error">{this.state.errors.password}</span>
                  )}
                </div>
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Rembember Me
                </label>
              </div>

              <button type="submit" class="btn btn-primary custom-btn">
                Submit
              </button>
            </form>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={this.registerPage}
              type="button"
              class="btn-link btn-anchor"
            >
              Register
            </button>{" "}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <button type="button" class="btn-link btn-anchor">
              Lost Your Password
            </button>{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={this.handleBack}
              type="button"
              class="btn-link btn-anchor"
            >
              Back to Taurus Coach
            </button>
          </div>
          <br />

          <div className="footer">
            <h5>Copyright © 2020 Taurus Coach|Developed by kitreek</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Login);
