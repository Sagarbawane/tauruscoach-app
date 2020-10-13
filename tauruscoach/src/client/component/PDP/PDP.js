import React from "react";

function PDP() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="contain-color">
          <h1 style={{ color: "blue" }}>Profile Development Plan (PDP)</h1>
          <br />
          <div class="row">
            <div class="col-md-4">
              <div className="container3">
                <h5>Goals:</h5>
                <ul>
                  <li>
                    <strong>Plan: </strong> For 1-3 years advance planning
                  </li>
                  <li>
                    <strong>Target: </strong> Shortlist target universities and
                    map career paths
                  </li>
                  <li>
                    <strong>Route:</strong> Build action plan how to get there
                  </li>
                </ul>
                <img
                  className="img"
                  width="60%"
                  height="62%"
                  src=" /assets/images/PDP_Single_600X800.jpg "
                  alt="img"
                />
              </div>
            </div>
            <div class="col-md-8">
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
                  <strong>Refine future education and career plan:</strong> Our
                  admission professionals help you shortlist target universities
                  based on your profile, US location preferences, financial
                  capability, and career goals
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
              <div className="container2">
                <div className="details">
                  <h4>2-WEEK TURNAROUND | US $575.00</h4>

                  <button
                    type="button"
                    class="btn btn-primary custom-btn btn-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PDP;
