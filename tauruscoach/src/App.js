import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogoutUser } from "./client/actions/userAction";
import About from "./client/component/About/about";
import Home from "./home";
import Register from "./client/component/Register/register";
import Login from "./client/component/Login/login";
import Dashboard from "./client/component/Dashboard/dashboard";

import Ps from "./client/component/PS/PS";
import PDP1 from "./client/component/PDP/PDP1";
import ER1 from "./client/component/ER/ER1.js";
import CAS1 from "./client/component/CAS/CAS1.js";
import ADR1 from "./client/component/ADR/ADR1";
import Cart from "./client/component/Cart/cart";
class App extends React.Component {
  constructor() {
    super();
  }
  handleLogout = () => {
    this.props.dispatch(startLogoutUser());
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">
              Navbar
            </a> */}
              {console.log(this.props.user.length)}
              {Object.keys(this.props.user).length == 0 ? (
                <Link to="/">
                  <img
                    src="/assets/images/Taurus_Bull_Logo4-_GSuite.jpg"
                    className="navbar-brand"
                    width="50%"
                    height="50%"
                    alt="..."
                  />{" "}
                </Link>
              ) : (
                <div>hello,{this.props.user.userName}</div>
              )}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <Link className="nav-link active" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Know The Basics
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link class="dropdown-item" to="#">
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Personalized Services
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link class="dropdown-item" to="/ps">
                        Personalized Services
                      </Link>
                      <Link class="dropdown-item" to="/pdp">
                        Personalized Plan(PDP)
                      </Link>
                      <Link class="dropdown-item" to="/cas">
                        Custom Strategy(CAS)
                      </Link>
                      <Link class="dropdown-item" to="/er">
                        Essay Review(ER)
                      </Link>
                      <Link class="dropdown-item" to="/adr">
                        Documents Review(ADR)
                      </Link>
                    </div>
                  </li>
                  {Object.keys(this.props.user).length == 0 && (
                    <li class="nav-item active">
                      <Link
                        className="nav-link active"
                        to="/register"
                        exact={true}
                      >
                        Register
                      </Link>
                    </li>
                  )}
                  {Object.keys(this.props.user).length == 0 && (
                    <li class="nav-item active">
                      <Link
                        className="nav-link active"
                        to="/login"
                        exact={true}
                      >
                        Login
                      </Link>
                    </li>
                  )}
                  {Object.keys(this.props.user).length != 0 && (
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-user fa-0.5x" aria-hidden="true"></i>
                        Profile
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link class="dropdown-item" to="/dashboard">
                          My Account
                        </Link>
                        <Link class="dropdown-item" to="/">
                          My Subscription
                        </Link>
                        <Link
                          className="dropdown-item"
                          onClick={this.handleLogout}
                          to="/logout"
                          exact={true}
                        >
                          Logout
                        </Link>
                      </div>
                    </li>
                  )}{" "}
                  &nbsp;
                  <Link to="/"></Link>
                  <Link to="/cart">
                    <div className="cart">
                      <i
                        class="fa fa-shopping-cart fa-2x"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <switch>
            <Route path="/about" component={About} exact={true}></Route>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/register" component={Register} exact={true}></Route>
            <Route path="/login" component={Login} exact={true}></Route>
            <Route path="/logout" exact={true}></Route>
            <Route path="/ps" component={Ps} exact={true}></Route>
            <Route path="/cas" component={CAS1} exact={true}></Route>
            <Route path="/pdp" component={PDP1} exact={true}></Route>
            <Route path="/er" component={ER1} exact={true}></Route>
            <Route path="/adr" component={ADR1} exact={true}></Route>
            <Route path="/dashboard" component={Dashboard} exact={true}></Route>
            <Route path="/cart" component={Cart} exact={true}></Route>
          </switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
