import React from "react";

import i from "../../assets/images/home-4-436x396.png";

class QualityProducts extends React.Component {
  render() {
    return (
      <section className="section-sm bg-primary context-dark">
        <div className="container">
          <div className="row row-30 align-items-lg-center text-center text-lg-left">
            <div className="col-lg-5">
              <img
                className="image-bottom-margin"
                src={i}
                alt
                width={436}
                height={396}
              />
            </div>
            <div className="col-lg-7">
              <h3>Quality Products at Competitive Prices</h3>
              <h6>
                Get your new windows measured and installed today by our
                specialists.
              </h6>
              <a className="button button-secondary" href="contact-us.html">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QualityProducts;
