import React from "react";

import i1 from "../../assets/images/post-1-560x315.jpg";
import i2 from "../../assets/images/post-2-560x315.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-sm">
        <div className="container">
          <h3 className="text-center">Latest News</h3>
          <div className="row row-40 justify-content-center">
            <div className="col-md-9 col-lg-6">
              <div className="post-classic">
                <div className="post-classic-figure">
                  <a href="single-post.html">
                    <img src={i1} alt width={560} height={315} />
                  </a>
                  <div className="post-classic-date">
                    <p className="date">25</p>
                    <p>Apr</p>
                  </div>
                </div>
                <div className="post-classic-body">
                  <ul className="post-classic-tags">
                    <li>By</li>
                    <li>
                      <a
                        className="post-classic-author"
                        href="single-post.html"
                      >
                        John Wilson
                      </a>
                    </li>
                    <li>in</li>
                    <li>
                      <ul className="list-tags">
                        <li>
                          <a href="single-post.html">News</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h4 className="post-classic-title">
                    <a href="single-post.html">
                      8 Common Problems Caused By Poor Window Installation
                    </a>
                  </h4>
                  <p className="post-classic-text">
                    As a homeowner, making the decision to upgrade your windows
                    can be a very profitable choice. From increasing energy
                    efficiency...
                  </p>
                  <a className="button button-primary" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div className="post-classic">
                <div className="post-classic-figure">
                  <a href="single-post.html">
                    <img src={i2} alt width={560} height={315} />
                  </a>
                  <div className="post-classic-date">
                    <p className="date">25</p>
                    <p>Apr</p>
                  </div>
                </div>
                <div className="post-classic-body">
                  <ul className="post-classic-tags">
                    <li>By</li>
                    <li>
                      <a
                        className="post-classic-author"
                        href="single-post.html"
                      >
                        John Wilson
                      </a>
                    </li>
                    <li>in</li>
                    <li>
                      <ul className="list-tags">
                        <li>
                          <a href="single-post.html">News</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h4 className="post-classic-title">
                    <a href="single-post.html">
                      10 Ways to Prevent Frost and Ice Buildup on The Inside of
                      Your Windows
                    </a>
                  </h4>
                  <p className="post-classic-text">
                    While frosted windows and smiley faces may bring up warm
                    childhood memories, they are not as enjoyable for
                    homeowners. With the cold...
                  </p>
                  <a className="button button-primary" href="single-post.html">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
