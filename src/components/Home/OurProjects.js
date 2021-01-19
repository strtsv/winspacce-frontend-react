import React from "react";

import i1 from "../../assets/images/project-1-430x323.jpg";
import i2 from "../../assets/images/project-2-430x323.jpg";
import i3 from "../../assets/images/project-3-430x323.jpg";
import i4 from "../../assets/images/project-4-430x323.jpg";
import i5 from "../../assets/images/project-5-430x323.jpg";
import i6 from "../../assets/images/project-6-430x323.jpg";
import i7 from "../../assets/images/project-7-430x323.jpg";
import i8 from "../../assets/images/project-8-430x323.jpg";

class OurProjects extends React.Component {
  render() {
    return (
      <section className="section section-sm">
        <div className="container-fluid container-fluid-xl-offset">
          <h3 className="text-center">Our projects</h3>
          <div className="row row-40 gutters-20">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i1} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Heather Ln, Glasgow</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i2} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Central Str, New York</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i3} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Main Avn, London</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i4} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Hauptstrasse, Berlin</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i5} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Green Str, Boston</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i6} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Hard Ln, Paris</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i7} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Love Str, Los Angeles</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="project-classic">
                <div className="project-classic-figure">
                  <img src={i8} alt width={430} height={323} />
                </div>
                <div className="project-classic-body context-dark">
                  <div className="project-classic-body-inner">
                    <h6 className="project-classic-title">
                      <a href="#">Edwards Str, Seattle</a>
                    </h6>
                    <p className="project-classic-text">
                      This house was completely maintained by our experts.
                    </p>
                    <a className="button button-primary" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a className="button button-primary" href="#">
                See all projects
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurProjects;
