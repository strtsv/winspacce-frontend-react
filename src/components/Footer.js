import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic">
        <div className="footer-classic-body">
          <div className="container">
            <div className="row row-30">
              <div className="col-sm-6 col-lg-4">
                <h5 className="footer-title">Get Your Quote</h5>
                <p>
                  Get a quote today to receive high-quality windows that fit
                  your home or office the best way!
                </p>
                <a className="button button-secondary" href="booking.html">
                  Request a Quote
                </a>
              </div>
              <div className="col-sm-6 col-lg-4">
                <h5 className="footer-title">Services</h5>
                <ul className="list-marked">
                  <li>
                    <a href="#">Window & Door Measuring</a>
                  </li>
                  <li>
                    <a href="#">Window Installation</a>
                  </li>
                  <li>
                    <a href="#">Window Replacement</a>
                  </li>
                  <li>
                    <a href="#">Door Installation</a>
                  </li>
                  <li>
                    <a href="#">Door & Window Maintenance</a>
                  </li>
                  <li>
                    <a href="#">Repair Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4">
                <h5 className="footer-title">Contacts</h5>
                <ul className="list-marked list-marked-with-icon">
                  <li>
                    {" "}
                    <span className="list-marked-icon nc-icon-mini ui-3_phone">
                      {" "}
                    </span>
                    Call us: <a href="tel:#">(719) 445-2808</a>
                  </li>
                  <li>
                    {" "}
                    <span className="list-marked-icon nc-icon-mini ui-2_time-clock" />
                    Mon-Fri: 10 AM - 7 PM; Sat-Sun: 10 AM - 3 PM
                  </li>
                  <li>
                    {" "}
                    <span className="list-marked-icon nc-icon-mini location_pin" />
                    <a href="#">4578 Marmora Road, Glasgow </a>
                  </li>
                  <li>
                    {" "}
                    <span className="list-marked-icon nc-icon-mini ui-1_email-83" />
                    <a href="mailto:#">info@demolink.org</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-classic-bottom">
          <div className="container">
            <div className="row row-15 align-items-center">
              <div className="col-sm-6">
                <p className="rights">
                  <span>©  </span>
                  <span className="copyright-year" />
                  <span> </span>
                  <span>WinSpace</span>
                  <span>. </span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </p>
              </div>
              <div className="col-sm-6 text-sm-right">
                <ul className="list-inline">
                  <li>
                    <a
                      className="nc-icon-mini social_logo-fb-simple"
                      href="#"
                    />
                  </li>
                  <li>
                    <a className="nc-icon-mini social_logo-twitter" href="#" />
                  </li>
                  <li>
                    <a className="nc-icon-mini social_logo-youtube" href="#" />
                  </li>
                  <li>
                    <a
                      className="nc-icon-mini social_logo-instagram"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
