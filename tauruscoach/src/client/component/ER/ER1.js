import React from "react";

import ER from "./ER";

import Footer from "../Footer/footer";

function ER1() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="container5  ">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="description1 ">
                <h2>PERSONALIZED SERVICES</h2>
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-success custom-btn btn-lg"
                  >
                    Essay Review (ER)
                  </button>
                </div>

                <h5>Make a convincing case for your candidacy!</h5>
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
                src="/assets/images/ER_Single_550X350-1.jpg "
                alt="img"
              />
            </div>
            <div class="col-md-6">
              <div className="container3">
                <h1 style={{ color: "blue" }}>Essay Review (ER)</h1>

                <h5>Goals:</h5>
                <ul>
                  <li>
                    <strong>Make a convincing case for your candidacy: </strong>{" "}
                    Integrate academics + extracurricular activities +
                    personality + career goals in one document
                  </li>
                  <li>
                    <strong>Streamlines</strong> your storyline, content, and
                    impact
                  </li>
                  <li>
                    <strong>Fix</strong>grammar, writing style, presentation,
                    formatting
                  </li>
                </ul>
              </div>
              <h5>How it works:</h5>
              <ul>
                <li>
                  <strong>We will request:</strong> your resume and essay.
                  Please note that we do not write the essay for you. You write
                  the essay; we make it impactful.
                </li>
                <li>
                  <strong>includes two revisions of essay </strong> for one
                  university or school application
                </li>
                <li>
                  <strong>The first revision</strong> streamlines your
                  storyline, content, and impact. We send it to you for final
                  modifications or fill-in any gaps
                </li>
                <li>
                  <strong>The second revision</strong> focuses on improving
                  language and grammar.
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
              We have the best strategic essay writers!
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
                      src="/assets/images/Sutada-L_450X450.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h3>Sutada L.</h3>
                      <br />
                      <h5>Tufts University</h5>
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
export default ER1;
