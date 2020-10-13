import React from "react";

function Form() {
  return (
    <div className="container-fluid ">
      <div className="form">
        <br />
        <br />
        <h3>SPECIAL REQUESTS?</h3>
        <br />
        <br />
        <h6>
          Every application is unique. So are your needs. You may want to apply
          for specific set of universities, particular scholarships / awards, or
          have other unique questions. Please feel free to contact us describing
          your situation. Most likely we will be able to help.
        </h6>
        <br />
        <br />
        <div className="container">
          <div class="row">
            <div class="col-md-4">
              <img
                className="img"
                width="80%"
                height="90%"
                src=" /assets/images/Contact_Image.jpg"
                alt="img"
              />
            </div>
            <div class="col-md-8">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="email" class="form-control" id="inputEmail4" />
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
                    <input type="email" class="form-control" id="inputEmail4" />
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
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
