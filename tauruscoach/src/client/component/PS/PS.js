import React from "react";
import ADR from "../ADR/ADR";
import CAS from "../CAS/CAS";
import PDP from "../PDP/PDP";
import ER from "../ER/ER";

import Footer from "../Footer/footer";

function Ps() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container5">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="description1  ">
                <h2>PERSONALIZED SERVICES</h2>
                <h5>
                  Have unique goals? Or need special strategy from rest of the
                  crowd?
                </h5>
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-warning custom-btn btn-lg "
                  >
                    We help you to stand out{" "}
                  </button>
                </div>
                <div className="container">
                  <button
                    type="button"
                    class="btn btn-danger custom-btn btn-lg "
                  >
                    Personalized Plan(PDP)
                  </button>

                  <button
                    type="button"
                    class="btn btn-danger custom-btn btn-lg"
                  >
                    Custom Strategy(CAS)
                  </button>

                  <button
                    type="button"
                    class="btn btn-danger custom-btn btn-lg"
                  >
                    Essay Review(ER)
                  </button>

                  <button
                    type="button"
                    class="btn btn-danger custom-btn btn-lg"
                  >
                    Documents Review(ADR)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="contain">
          <h1 style={{ color: "blue" }}>What Sets You Apart?</h1>

          <h6>
            <p>
              Some of you are highly ambitious, have a unique situation, or have
              already figured out your distinct path. You are looking for some
              help and direction how to get there. We have resources to make
              those dreams come true.
            </p>
            <p></p>
            Being the faculty and students of international origins at Harvard,
            MIT, and Boston University, we have seen the incredible number of
            unique ways students achieve their goals.
          </h6>
        </div>
      </div>
      <div className="container-fluid">
        <div className="contain-color">
          <h1 style={{ color: "blue" }}>
            Mentors who have been there, done that
          </h1>

          <div class="container ">
            <div class="row ">
              <div class="col-md-3">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <img
                    src="/assets/images/TianT_450x450.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3>Tian T</h3>
                    &nbsp; &nbsp;
                    <h5>Boston University</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <img
                    src="/assets/images/Kimaya-C_450x450.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3>Kimaya C.</h3>
                    &nbsp; &nbsp;
                    <h5>Cornell University</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <img
                    src="/assets/images/Aditya-D_450x450.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h3>Aditya D.</h3>
                    &nbsp; &nbsp;
                    <h5> Tufts University</h5>
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
                    &nbsp; &nbsp;
                    <h5> Wellesley College</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="contain-color1">
          <h1 style={{ color: "blue" }}>Personalized Services</h1>

          <div class="container-fluid ">
            <div class="row my-flex-card">
              <div class="col-lg-3 col-sm-6">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <span className="">
                    <i
                      class="fa fa-link fa-4x circle-icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div class="card-body">
                    <h4 style={{ color: "blue" }}>
                      Profile Development Plan (PDP)
                    </h4>

                    <h5>
                      <p>For 1 – 3 years in-advance planning.</p>

                      <p>
                        Help you shortlist target universities and recommend
                        action plan to get there
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <span className="">
                    <i
                      class="fa fa-key fa-4x circle-icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div class="card-body">
                    <h4 style={{ color: "blue" }}>
                      Custom Admission Strategy (CAS)
                    </h4>

                    <h5>
                      <p> Mock Admission Process</p>

                      <p>
                        Application strategy to target universities, and one
                        general revision of essay, LoR, and CV
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <span className="">
                    <i
                      class="fa fa-file-text fa-4x circle-icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div class="card-body">
                    <h4 style={{ color: "blue" }}>All Documents Review</h4>
                    &nbsp; &nbsp;
                    <h5>
                      <p>
                        The final boosting finish a few weeks before submitting
                        the application
                      </p>

                      <p>
                        Brainstorming a consistent storyline that integrates
                        your background with target university
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card" style={{ width: 17 + "rem" }}>
                  <span className="">
                    <i
                      class="fa fa-pencil-square-o fa-4x circle-icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div class="card-body">
                    <h4 style={{ color: "blue" }}>Essay Review (ER)</h4>

                    <h5>
                      <p>Make a convincing case</p>

                      <p>
                        Streamlines your storyline, content, and impact;
                        improves language and grammar
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CAS />
      <PDP />
      <ADR />
      <ER />
      <div className="container-fluid">
        <div className="form">
          <h3>SPECIAL REQUESTS?</h3>

          <h6>
            Every application is unique. So are your needs. You may want to
            apply for specific set of universities, particular scholarships /
            awards, or have other unique questions. Please feel free to contact
            us describing your situation. Most likely we will be able to help.
          </h6>

          <div className="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">First Name</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Last Name</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-group ">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      coloums="2"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
              <div class="col-md-4">
                <img
                  className="img"
                  width="100%"
                  height="100%"
                  src="/assets/images/Expert_Assistance_Lady.png "
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Ps;
