import React from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";

import i1 from "../../assets/images/logo-1-158x22.png";
import i2 from "../../assets/images/logo-2-160x51.png";
import i3 from "../../assets/images/logo-3-152x31.png";
import i4 from "../../assets/images/logo-4-160x50.png";
import i5 from "../../assets/images/logo-5-134x77.png";
import i6 from "../../assets/images/logo-6-154x28.png";

var isNoviBuilder = false;
var carousel = $(".owl-carousel");
const options = {
  autoplay: isNoviBuilder ? false : carousel.attr("data-autoplay") !== "false",
  autoplayTimeout: carousel.attr("data-autoplay")
    ? Number(carousel.attr("data-autoplay"))
    : 3000,
  autoplayHoverPause: true,
  loop: isNoviBuilder ? false : carousel.attr("data-loop") !== "false",
  items: 4,
  center: carousel.attr("data-center") === "true",
  dotsContainer: carousel.attr("data-pagination-class") || false,
  navContainer: carousel.attr("data-navigation-class") || false,
  mouseDrag: isNoviBuilder
    ? false
    : carousel.attr("data-mouse-drag") !== "false",
  nav: carousel.attr("data-nav") === "true",
  dots: carousel.attr("data-dots") === "true",
  dotsEach: carousel.attr("data-dots-each")
    ? parseInt(carousel.attr("data-dots-each"), 10)
    : false,
  animateIn: carousel.attr("data-animation-in")
    ? carousel.attr("data-animation-in")
    : false,
  animateOut: carousel.attr("data-animation-out")
    ? carousel.attr("data-animation-out")
    : false,
  responsive: [],
  navText: carousel.attr("data-nav-text")
    ? $.parseJSON(carousel.attr("data-nav-text"))
    : [],
  navClass: carousel.attr("data-nav-class")
    ? $.parseJSON(carousel.attr("data-nav-class"))
    : ["owl-prev", "owl-next"],
};

class WeWorkWith extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-gray-100">
        <div className="container">
          <h3 className="text-center">We Work With</h3>
          <div className="row">
            <div className="col-12">
              {}
              <div
                className="carousel-flex"
                // className="owl-carousel carousel-flex"
                data-items={1}
                data-sm-items={2}
                data-lg-items={3}
                data-xl-items={6}
                data-dots="true"
                data-nav="false"
                data-stage-padding={15}
                data-loop="false"
                data-margin={30}
                data-mouse-drag="false"
              >
                <OwlCarousel {...options}>
                  <img src={i1} alt width={158} height={22} />
                  <img src={i2} alt width={160} height={51} />
                  <img src={i3} alt width={152} height={31} />
                  <img src={i4} alt width={160} height={50} />
                  <img src={i5} alt width={134} height={77} />
                  <img src={i6} alt width={154} height={28} />
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WeWorkWith;
