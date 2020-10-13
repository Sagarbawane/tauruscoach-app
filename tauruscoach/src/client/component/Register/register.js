import React from "react";
import { connect } from "react-redux";
import { startRegisterUser } from "../../actions/userAction";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      privacy: false,
      coupons: false,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 5 ? "First Name must be 5 characters long!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 5 ? "Last Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "userName":
        errors.userName =
          value.length < 5 ? "User Name must be 5 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handlePrivacy = (e) => {
    this.setState({
      privacy: !this.state.privacy,
    });
  };
  handleCoupons = (e) => {
    this.setState({
      coupons: !this.state.coupons,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("password does not match with confirm password");
    } else {
      if (validateForm(this.state.errors)) {
        const formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          privacy: this.state.privacy,
          coupons: this.state.coupons,
        };
        const redirect = () => {
          this.props.history.push("/login");
        };
        console.log(formData);
        this.props.dispatch(startRegisterUser(formData, redirect));
      } else {
        console.error("Invalid Form");
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="register-info">
            <div className="container-fluid ">
              <br />
              <h6>For a limited time</h6>

              <h5 style={{ color: "blue" }}>
                Create an account and receive Early Season Discount
              </h5>
              <br />
            </div>
          </div>
          <div className="register-info">
            <div className="container-fluid ">
              <br /> <br /> <br />
              <div class="row">
                <div class="col-md-5">
                  <img
                    className="img"
                    width="80%"
                    height="90%"
                    src="  /assets/images/Taurus_Bull_Favicon_512.png"
                    alt="img"
                  />
                </div>
                <div class="col-md-7">
                  <h6>
                    Register to our customer club and receive member discounts,
                    special offers, and coupon promotions. Don't forget to join
                    our mailing-list (click the box) to receive the latest
                    updates on the state of US university admissions for
                    international students
                  </h6>
                  <br />
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <div className="fullName" noValidate>
                          <label for="first">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            class="form-control"
                            id="first"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            noValidate
                          />
                          {this.state.errors.firstName.length > 0 && (
                            <span className="error">
                              {this.state.errors.firstName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div class="form-group col-md-6">
                        <div className="fullName" noValidate>
                          <label for="last">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            class="form-control"
                            id="last"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            noValidate
                          />
                          {this.state.errors.lastName.length > 0 && (
                            <span className="error">
                              {this.state.errors.lastName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-group ">
                      <div class="form-group ">
                        <div className="fullName" noValidate>
                          <label for="inputEmail4">Email</label>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            noValidate
                          />
                          {this.state.errors.email.length > 0 && (
                            <span className="error">
                              {this.state.errors.email}
                            </span>
                          )}
                        </div>
                      </div>
                      <div class="form-group ">
                        <div className="fullName" noValidate>
                          <label for="inputusername">UserName</label>
                          <input
                            type="text"
                            name="userName"
                            class="form-control"
                            id="inputusername"
                            placeholder="Username"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            noValidate
                          />
                          {this.state.errors.userName.length > 0 && (
                            <span className="error">
                              {this.state.errors.userName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col">
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
                            <span className="error">
                              {this.state.errors.password}
                            </span>
                          )}
                        </div>
                      </div>

                      <div class="col">
                        <div className="fullName" noValidate>
                          <label for="confirm">Confirm Password</label>
                          <input
                            type="text"
                            name="confirmPassword"
                            class="form-control"
                            id="confirm"
                            placeholder="confirm"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            noValidate
                          />
                          {this.state.errors.confirmPassword.length > 0 && (
                            <span className="error">
                              {this.state.errors.confirmPassword}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="form-group">
                      <div class="form-check">
                        <label>
                          <strong>Consent *</strong>
                        </label>
                        <br />
                        <input
                          name="privacy"
                          checked={this.state.privacy}
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onChange={this.handlePrivacy}
                        />
                        <label class="form-check-label" for="gridCheck">
                          I agree to the privacy and terms policy.
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label>
                          <strong>Join Taurus Connect Mailing List</strong>
                        </label>
                        <br />
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          name="coupons"
                          checked={this.state.coupons}
                          onChange={this.handleCoupons}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Please send me discount coupons and special news
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary custom-btn">
                      Sign in
                    </button>
                  </form>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="footer">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <h5>Copyright © 2020 Taurus Coach|Developed by kitreek</h5>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
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
export default connect(mapStateToProps)(Register);
