import React from "react";

import i from "../../assets/images/home-bg-1.jpg";

class CallUsToday extends React.Component {
  render() {
    return (
      <section
        className="section section-sm bg-image section-filter-white"
        style={{
          backgroundImage: "url( " + i + " )",
        }}
      >
        <div className="container">
          <div className="row row-30 justify-content-lg-between align-items-md-center">
            <div className="col-md-7 col-lg-6 text-center text-md-left">
              <h4>
                Quality Products <br />
                at Competitive Prices
              </h4>
              <h1>
                Call Us Today <a href="tel:#">(719) 445-2808</a>
              </h1>
              <p className="font-weight-medium text-gray-900 d-flex align-items-start justify-content-center justify-content-md-start font-sec">
                <span className="nc-icon-mini ui-2_time-clock text-primary pr-2 big" />
                <span className="pt-1">
                  Mon-Fri: 10 AM - 7 PM;
                  <br className="d-md-none" />
                  Sat-Sun: 10 AM - 3 PM
                </span>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="form-box">
                <h4>REQUEST A FREE ESTIMATE</h4>
                {}
                <form
                  className="rd-mailform text-left"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      className="form-input"
                      id="contact-name"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-phone">
                      Phone
                    </label>
                    <input
                      className="form-input"
                      id="contact-phone"
                      type="text"
                      name="phone"
                      data-constraints="@Numeric @Required"
                    />
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-email">
                      E-Mail
                    </label>
                    <input
                      className="form-input"
                      id="contact-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-address">
                      Address
                    </label>
                    <input
                      className="form-input"
                      id="contact-address"
                      type="address"
                      name="address"
                      data-constraints="@Required"
                    />
                  </div>
                  <div className="form-button">
                    <button
                      className="button button-block button-secondary"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallUsToday;
