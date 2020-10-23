import React from "react";
function Footer() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="foot">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-8">
                <br />
                <img
                  src=" assets/images/TC-Logo4-Transperant_BG.png"
                  class="card-img-top"
                  width="20%"
                  height="35%"
                  alt="..."
                />
              </div>
              <div class="col-sm-4">
                <br />
                <h4>CONTACT US</h4>
                <br />
                <h6>177 Hungtiton Ave #179189, Boston, MA, USA</h6>
                <h6>info@tauruscoach.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            <h5>Copyright © 2020 Taurus Coach|Developed by kitreek</h5>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
