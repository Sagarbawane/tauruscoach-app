import React from "react";

import { connect } from "react-redux";
import { startGetAddCartItem } from "../../actions/cartAction";

class CAS extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBooknow = () => {
    const data = {
      serviceName: "Custom Admission Strategy (CAS)",
      price: "US $575.00",
    };
    this.props.dispatch(startGetAddCartItem(data));
  };
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="contain">
            <h1 style={{ color: "blue" }}>Custom Admission Strategy (CAS)</h1>
            <br />
            <br />
            <div class="row">
              <div class="col-md-4">
                {" "}
                <div className="container3-color">
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
                  <img
                    className="img"
                    width="60%"
                    height="62%"
                    src=" /assets/images/CAS_Single_400X600.jpg "
                    alt="img"
                  />
                </div>
              </div>

              <div class="col-md-8">
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
                <div className="container2 ">
                  <div className="details">
                    <h4>2-WEEK TURNAROUND | US $575.00</h4>

                    <button
                      type="button"
                      class="btn btn-primary custom-btn btn-lg"
                      onClick={this.handleBooknow}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(CAS);
