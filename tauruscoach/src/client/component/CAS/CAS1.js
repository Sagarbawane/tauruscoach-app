import React from "react";

import CAS from "./CAS";

import Footer from "../Footer/footer";

import { connect } from "react-redux";
import { startGetAddCartItem } from "../../actions/cartAction";

class CAS1 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBooknow = () => {
    const data = {
      serviceName: "Custom Admission Strategy (CAS)",
      price: "US $250.00",
    };
    this.props.dispatch(startGetAddCartItem(data));
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container5 ">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="description1 ">
                  <h2>PERSONALIZED SERVICES</h2>

                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-success custom-btn btn-lg "
                    >
                      Custom Admission Strategy (CAS)
                    </button>
                  </div>

                  <h5>
                    Have unique goals? Or need special strategy from rest of the
                    crowd?
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="contain-color1">
            <div class="row">
              <div class="col-md-6">
                <img
                  className="img"
                  width="60%"
                  height="62%"
                  src=" /assets/images/CAS_Single_400X600.jpg "
                  alt="img"
                />
              </div>
              <div class="col-md-6">
                <div className="container3">
                  <h1 style={{ color: "blue" }}>
                    Custom Admission Strategy (CAS)
                  </h1>

                  <h5>Goals:</h5>
                  <ul>
                    <li>
                      <strong>Define US education & career goals: </strong>{" "}
                      Decide target universities based on background, US
                      location, career goals, and other preferences
                    </li>
                    <li>
                      <strong>Achievement list:</strong> List the academic &
                      extracurricular achievements required to get into target
                      universities
                    </li>
                    <li>
                      <strong>Strategy:</strong> Build step-by-step strategy on
                      how to get there
                    </li>
                    <li>
                      <strong>Build resources:</strong> Plan which resources you
                      can use and when
                    </li>
                  </ul>
                </div>
                <h5>How it works:</h5>
                <ul>
                  <li>
                    <strong>Plan which resources you can use and when</strong>{" "}
                    your current application material including academic record,
                    standardized test scores, extracurricular activities, essay
                    sample, sample recommendation letters, financial planning,
                    and career goals
                  </li>
                  <li>
                    <strong>Build mock admission profile:</strong> Our admission
                    professionals rate your current profile on scale of 9
                  </li>
                  <li>
                    <strong>First phone call: </strong> (45-min) will give
                    feedback and hear your background, goals, and ambitions.
                    Brainstorm ideas to build your personal brand
                  </li>
                  <li>
                    <strong>Design action plan: </strong> needed to get to the
                    target universities including improved academics,
                    extracurricular activities, and/or personality development.
                  </li>
                  <li>
                    <strong>Wrap up: </strong> 30-minutes phone consultation to
                    discuss the report, analysis, and recommendations
                  </li>
                </ul>
                <div class="row">
                  <div class="col">
                    <button
                      class="btn btn-info custom-btn btn-lg btn-block "
                      onClick={this.handleBooknow}
                    >
                      BOOK NOW
                    </button>
                  </div>
                  <div class="col">
                    <button class="btn btn-secondary custom-btn  btn-lg btn-block ">
                      US $250
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="contain">
              <h1 style={{ color: "blue" }}>
                Compassionate mentors with years of direct experience
              </h1>

              <div class="container-fluid ">
                <div class="row ">
                  <div class="col-md-3">
                    <div class="card" style={{ width: 17 + "rem" }}>
                      <img
                        src="/assets/images/Kimaya-C_450x450.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3>Kimaya C.</h3>
                        <br />
                        <h5>Cornell University</h5>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card" style={{ width: 17 + "rem" }}>
                      <img
                        src="/assets/images/TianT_450x450.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3>Tian T</h3>
                        <br />
                        <h5>Boston University</h5>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card" style={{ width: 17 + "rem" }}>
                      <img
                        src="/assets/images/ChrisL_450x450.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3> Charles L.</h3>
                        <br />
                        <h5> Harvard University</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card" style={{ width: 17 + "rem" }}>
                      <img
                        src="/assets/images/Helen-W_450x450.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3>Helen W.</h3>
                        <br />
                        <h5> Wellesley College</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <br />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CAS1);
