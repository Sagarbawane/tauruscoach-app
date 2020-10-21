import React from "react";

import PDP from "./PDP";

import Footer from "../Footer/footer";

import { connect } from "react-redux";
import { startGetAddCartItem } from "../../actions/cartAction";

class PDP1 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBooknow = () => {
    const data = {
      serviceName: " Profile Development Plan (PDP)",
      price: "US $250.00",
    };
    this.props.dispatch(startGetAddCartItem(data));
  };
  render() {
    return (
      <div>
        <div className="container-fluid ">
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
                      Profile Development Plan (PDP)
                    </button>
                  </div>

                  <h5>Start your adventure with a right plan</h5>
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
                  src=" /assets/images/PDP_Single_600X800.jpg "
                  alt="img"
                />
              </div>
              <div class="col-md-6">
                <div className="container3">
                  <h1 style={{ color: "blue" }}>
                    Profile Development Plan (PDP)
                  </h1>
                  <br />
                  <h5>Goals:</h5>
                  <ul>
                    <li>
                      <strong>Plan: </strong> For 1-3 years advance planning
                    </li>
                    <li>
                      <strong>Target: </strong> Shortlist target universities
                      and map career paths
                    </li>
                    <li>
                      <strong>Route:</strong> Build action plan how to get there
                    </li>
                  </ul>
                </div>
                <h5>How it works:</h5>
                <ul>
                  <li>
                    <strong>We will request:</strong> your current academic,
                    personality, career-goals profile
                  </li>
                  <li>
                    <strong>Evaluate current state:</strong> Our admission
                    professionals rate your current profile on scale of 9
                  </li>
                  <li>
                    <strong>Refine future education and career plan:</strong>{" "}
                    Our admission professionals help you shortlist target
                    universities based on your profile, US location preferences,
                    financial capability, and career goals
                  </li>
                  <li>
                    <strong>Design action plan:</strong> needed to get to the
                    target universities including improved academics,
                    extracurricular activities, and/or personality development.
                  </li>
                  <li>
                    <strong>Wrap up:</strong> 30-minutes phone consultation to
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
                Mentors who have been there, done that
              </h1>

              <div class="container ">
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
                        src="/assets/images/EmilyT_450x450.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h3>Emily T.</h3>
                        <br />
                        <h5>Barmouth</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
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

export default connect(mapStateToProps)(PDP1);
