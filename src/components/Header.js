import React from "react";

import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-290x57.png";
import i2 from "../assets/images/logo-default-290x57.png";
import i3 from "../assets/images/logo-default-290x57.png";
import i4 from "../assets/images/logo-default-290x57.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer rd-navbar-collapse">
              <div className="rd-navbar-aside">
                <div className="rd-navbar-brand">
                  {}
                  <a className="brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src={i1}
                      alt
                      width={145}
                      height={28}
                    />
                    <img
                      className="brand-logo-light"
                      src={i1}
                      alt
                      width={145}
                      height={28}
                    />
                  </a>
                  <p className="small">Window Installation Services</p>
                </div>
                <ul className="list-marked list-marked-with-icon rd-navbar-list-info">
                  <li>
                    <span className="list-marked-icon nc-icon-mini ui-2_time-clock" />
                    Mon-Fri: 10 AM - 7 PM;
                    <br />
                    Sat-Sun: 10 AM - 3 PM
                  </li>
                  <li>
                    <span className="list-marked-icon nc-icon-mini location_pin" />
                    <a href="#">
                      4578 Marmora Road,
                      <br />
                      Glasgow{" "}
                    </a>
                  </li>
                  <li>
                    <span className="list-marked-icon nc-icon-mini ui-3_phone" />
                    <div className="d-block">Call us: </div>
                    <a href="tel:#">(719) 445-2808</a>
                  </li>
                </ul>
                <a
                  className="button button-primary button-icon button-icon-left"
                  href="booking.html"
                >
                  <span className="icon nc-icon-mini education_agenda-bookmark" />
                  make an appointment
                </a>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    {}
                    <div className="rd-navbar-brand">
                      {}
                      <a className="brand" href="index.html">
                        <img
                          className="brand-logo-dark"
                          src={i1}
                          alt
                          width={145}
                          height={28}
                        />
                        <img
                          className="brand-logo-light"
                          src={i1}
                          alt
                          width={145}
                          height={28}
                        />
                      </a>
                    </div>
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="pricing.html">
                          Pricing
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="blog.html">
                          Blog
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-post.html"
                            >
                              Single Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 1</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tabs-and-accordions.html"
                                >
                                  Tabs and accordions
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="progress-bars.html"
                                >
                                  Progress bars
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 2</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="grid-system.html"
                                >
                                  Grid system
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="booking.html"
                                >
                                  Booking
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 3</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="under-construction.html"
                                >
                                  Under Construction
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-navbar-right">
                    {}
                    <div className="rd-navbar-search">
                      <button
                        className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                        data-rd-navbar-toggle=".rd-navbar-search"
                      >
                        <span />
                      </button>
                      <form
                        className="rd-search"
                        action="search-results.html"
                        data-search-live="rd-search-results-live"
                        method="GET"
                      >
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-search-form-input"
                          >
                            Search
                          </label>
                          <input
                            className="rd-navbar-search-form-input form-input"
                            id="rd-navbar-search-form-input"
                            type="text"
                            name="s"
                            autoComplete="off"
                          />
                          <div
                            className="rd-search-results-live"
                            id="rd-search-results-live"
                          />
                        </div>
                        <button
                          className="rd-search-form-submit fa-search"
                          type="submit"
                        />
                      </form>
                    </div>
                    <div className="rd-navbar-cart">
                      <a
                        className="nc-icon-mini shopping_cart-modern"
                        href="#"
                        data-rd-navbar-toggle=".rd-navbar-cart-inner"
                      />
                      <div className="rd-navbar-cart-inner">
                        <h4 className="text-white">MY CART</h4>
                        <p>No products in the cart.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
