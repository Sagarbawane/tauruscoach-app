import React from "react";

function Info() {
  return (
    <div className="container-fluid ">
      <div className="container4 ">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="description ">
              <p className="banner-heading">THE .EDU ADMISSION ACCELERATOR</p>
              <p className="banner-content">
                Admission Preparation to the Best US Universities for
                International Applicants
              </p>

              <p className="banner-subhead">
                From the Alumni of the Best US Universities
              </p>
              <img
                className="img"
                width="35%"
                height="20%"
                src="/assets/images/Univ_Logo_BW.jpg"
                alt="img"
              />

              <p className="banner-subhead">Year 2020 admission programs</p>

              <div className="row">
                <div className="col-lg-8 ">
                  <button
                    type="button"
                    class="btn btn-primary custom-btn btn-lg "
                  >
                    Personalized Plan
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary custom-btn btn-lg "
                  >
                    Custom Strategy
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary custom-btn btn-lg "
                  >
                    Essay Review
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary custom-btn btn-lg "
                  >
                    Documents Review
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
export default Info;
