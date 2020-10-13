import React from "react";
import ADR from "./ADR";

import Footer from "../Footer/footer";

function ADR1() {
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
                    All Documents Review(ADR)
                  </button>
                </div>

                <h5>The final boosting finish to your complete application</h5>
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
                src="/assets/images/ADR_Single_600X850.jpg "
                alt="img"
              />
            </div>
            <div class="col-md-6">
              <div className="container3">
                <h1 style={{ color: "blue" }}>All Documents Review(ADR)</h1>

                <h5>Goals:</h5>
                <ul style={{ marginBottom: "10px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      <strong>“Just-before”review :&nbsp;&nbsp; &nbsp;</strong>
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
              </div>
              <h5>How it works:</h5>
              <ul>
                <li>
                  <strong>We will request:</strong>all your current application
                  materials including academic records, standardized test
                  scores, extracurricular activities, essays, interest
                  statements, and career goals summary
                </li>
                <li>
                  <strong>First phone call:</strong>Our admission professionals
                  rate your current profile on scale of 1 to 9. First phone call
                  (30-min) will give feedback and hear your background, goals,
                  and ambitions
                </li>
                <li>
                  <strong>Revise your documents</strong>based on our discussion.
                  Point out any quick fixes needed to be done on your part.
                </li>
                <li>
                  <strong>Three revisions of essay:</strong>Earlier revisions
                  require heavy editing which gets easier with each revision
                  until a logical, consistent, and clear picture of you emerges
                  as an applicant
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
              <div class="row">
                <div class="col">
                  <button class="btn btn-info custom-btn btn-lg btn-block ">
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

            <br />
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
                      src="https://tauruscoach.com/wp-content/uploads/2019/03/Helen-W_450x450.jpg"
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
export default ADR1;
