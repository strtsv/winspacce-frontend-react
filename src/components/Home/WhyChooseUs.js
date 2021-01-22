import React from "react";

class WhyChooseUs extends React.Component {
  render() {
    return (
      <section className="section section-sm">
        <div className="container">
          <h3 className="text-center">Why Choose Us?</h3>
          <div className="row row-30">
            <div className="col-md-6 col-lg-4">
              <div className="box-icon-classic">
                <div className="icon nc-icon-outline business_award-48" />
                <h5 className="box-icon-classic-title">Quality</h5>
                <p className="box-icon-classic-text">
                  All our team members are high-qualified. All of them are being
                  trained according to the latest technologies. Our newbies work
                  together with experienced colleagues.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box-icon-classic">
                <div className="icon nc-icon-outline design_path-unite" />
                <h5 className="box-icon-classic-title">
                  Domestic & Commercial
                </h5>
                <p className="box-icon-classic-text">
                  We provide discounts on the most popular services and on the
                  seasonal services, so you could definitely receive any help
                  without delay.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box-icon-classic">
                <div className="icon nc-icon-outline business_pig" />
                <h5 className="box-icon-classic-title">Cost</h5>
                <p className="box-icon-classic-text">
                  Our prices are both fair and affordable for all customers. We
                  offer flexible discount system so you could use any service
                  you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
