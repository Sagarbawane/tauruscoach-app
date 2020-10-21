import React from "react";
import { connect } from "react-redux";
import { startGetAddCartItem } from "../../actions/cartAction";

class ADR extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBooknow = () => {
    const data = {
      serviceName: "All Documents Review(ADR)",
      price: "US $575.00",
    };
    this.props.dispatch(startGetAddCartItem(data));
  };
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="contain-color">
            <h1 style={{ color: "blue" }}>All Documents Review(ADR)</h1>
            <br />
            <br />
            <div class="row">
              <div class="col-md-4">
                <div className="container3">
                  <h5>Goals:</h5>
                  <ul style={{ marginBottom: "10px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        <strong>
                          “Just-before”review :&nbsp;&nbsp; &nbsp;
                        </strong>
                        Review complete application documents a few weeks before
                        final submission
                      </span>
                    </li>

                    <li>
                      <span>
                        <strong>Consistency:&nbsp;</strong>
                        Build one consistent storyline across all documents
                      </span>
                    </li>

                    <li>
                      <strong> Fix: </strong>
                      Grammar, writing style, presentation, formatting
                    </li>

                    <li>
                      <span>
                        <strong>Target university selection:</strong>
                        Help you choose the right university
                      </span>
                    </li>
                  </ul>
                  <img
                    className="img"
                    width="60%"
                    height="62%"
                    src="assets/images/ADR_Single_600X850.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <h5>How it works:</h5>
                <ul>
                  <li>
                    <strong>We will request:</strong>all your current
                    application materials including academic records,
                    standardized test scores, extracurricular activities,
                    essays, interest statements, and career goals summary
                  </li>
                  <li>
                    <strong>First phone call:</strong>Our admission
                    professionals rate your current profile on scale of 1 to 9.
                    First phone call (30-min) will give feedback and hear your
                    background, goals, and ambitions
                  </li>
                  <li>
                    <strong>Revise your documents</strong>based on our
                    discussion. Point out any quick fixes needed to be done on
                    your part.
                  </li>
                  <li>
                    <strong>Three revisions of essay:</strong>Earlier revisions
                    require heavy editing which gets easier with each revision
                    until a logical, consistent, and clear picture of you
                    emerges as an applicant
                  </li>
                  <li>
                    <strong>One revision of resume</strong>that ties in your
                    achievements with the essay
                  </li>
                  <li>
                    <strong>One revision of 3 recommendation letters:</strong>
                    The recommendation letters are done at the end to get
                    consistent story across the essay and resume.
                  </li>
                  <li>
                    <strong>Second phone call:</strong>30-minutes phone
                    consultation to finalize the report, analysis, and
                    recommendations
                  </li>
                </ul>
                <div className="container2">
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

export default connect(mapStateToProps)(ADR);
