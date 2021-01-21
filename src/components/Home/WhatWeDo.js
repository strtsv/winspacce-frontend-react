import React from "react";

import i1 from "../../assets/images/home-1-360x270.jpg";
import i2 from "../../assets/images/home-2-360x270.jpg";
import i3 from "../../assets/images/home-3-360x270.jpg";

class WhatWeDo extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-gray-100">
        <div className="container">
          <h3 className="text-center">what we do</h3>
          <div className="row row-50">
            <div className="col-md-6 col-lg-4">
              <div className="product-classic">
                <div className="product-classic-figure">
                  <img src={i1} alt width={360} height={270} />
                </div>
                <h5 className="product-classic-title">Windows</h5>
                <p className="product-classic-text">
                  We install all types of windows, produce custom shapes and do
                  additional glazing.
                </p>
                <a className="button button-primary" href="#">
                  View Products
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="product-classic">
                <div className="product-classic-figure">
                  <img src={i2} alt width={360} height={270} />
                </div>
                <h5 className="product-classic-title">Doors</h5>
                <p className="product-classic-text">
                  Glass doors add more air and space to your rooms. We offer a
                  wide range of glass doors.
                </p>
                <a className="button button-primary" href="#">
                  View Products
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="product-classic">
                <div className="product-classic-figure">
                  <img src={i3} alt width={360} height={270} />
                </div>
                <h5 className="product-classic-title">Conservatories</h5>
                <p className="product-classic-text">
                  Building a conservatory means you will have a piece of nature
                  inside your house.{" "}
                </p>
                <a className="button button-primary" href="#">
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
