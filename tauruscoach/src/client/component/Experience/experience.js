import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Data from "../Data/data";

function Expereience() {
  return (
    // <div className="container-fluid">
    <div className="container-fluid ">
      <div className="contain">
        <h1 style={{ color: "blue" }}>
          Experienced mentors and reliance on latest data
        </h1>
        <br />
        <h6>
          We put our first-hand​ experience​ to help you achieve your goals. We
          aim to uncover the true career potential of each of our client by
          guiding through perfectly matched US education. The admission criteria
          to US universities changes frequently. The applicant pool and
          government regulations also change every year. We constantly collect
          and analyze a ​vast amount of data and facts. We put our experience,
          data analysis, and hard work for your use at an ​affordable cost.
        </h6>
      </div>
      <br />
      <div class="container-fluid ">
        <div class="row ">
          <div class="col-md-3">
            <div class="card" style={{ width: 18 + "rem" }}>
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
            <div class="card" style={{ width: 18 + "rem" }}>
              <img
                src="/assets/images/EmilyT_450x450.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3>Emily T</h3>
                &nbsp; &nbsp;
                <h5>Dartmouth</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style={{ width: 18 + "rem" }}>
              <img
                src="/assets/images/ChrisL_450x450.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3>Chris L.</h3>
                &nbsp; &nbsp;
                <h5>Harvard University</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style={{ width: 18 + "rem" }}>
              <img
                src="/assets/images/SarahL_450x450.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3>Sarah c.</h3>
                &nbsp; &nbsp;
                <h5>New York University</h5>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Data />
      <div className="know">
        <div className="container-fluid ">
          <br />
          <br />
          <BrowserRouter>
            <Link>
              <h6 style={{ color: "black" }}>Before you start the process</h6>
            </Link>
            <br />
            <Link>
              <h1 style={{ color: "black" }}>
                Click here to “Know the Basics”
              </h1>
            </Link>
          </BrowserRouter>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default Expereience;
