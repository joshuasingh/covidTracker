import React from "react";
import { Link } from "react-router-dom";
import InformationPage from "../Component/InformationPart";

const LandingPage = () => {
  return (
    <>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Security Services
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#welcome" className="menu-item">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about" className="menu-item">
                      About
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:;">
                      Services
                      <ul>
                        <li className="scroll-to-section">
                          <a href="#about" className="menu-item">
                            Security Services
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="menu-item">
                            Security guards
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="menu-item">
                            Mobile Patrols
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="menu-item">
                            Crowd Controls
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="menu-item">
                            Event Security and Cleanings
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact-us" className="menu-item">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  We Make You Feel <em>Secure</em>
                </h1>
                <p>
                  Protecting Your People and Property.
                  <h3> Intoduction to your security firm comes here</h3>
                </p>
                <a href="#about" className="main-button-slider">
                  KNOW US BETTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>01</h2>
                  <img src="assets/images/features-icon-1.png" alt="" />
                  <h4>Security Services</h4>
                  <p>Little intro security services</p>
                  <a href="security_services" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>02</h2>
                  <img src="assets/images/features-icon-2.png" alt="" />
                  <h4>Security Guards</h4>
                  <p>little intro to your security guards.......</p>
                  <a href="security_services" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>03</h2>
                  <img src="assets/images/features-icon-3.png" alt="" />
                  <h4>Mobile Patrols</h4>
                  <p>intro to mobile patrols</p>
                  <a href="security_services" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 "
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>04</h2>
                  <img src="assets/images/features-icon-3.png" alt="" />
                  <h4>Crowd Controls</h4>
                  <p>intro to crowd controls</p>
                  <a href="security_services" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>05</h2>
                  <img src="assets/images/features-icon-3.png" alt="" />
                  <h4>Event Security & Cleaning</h4>
                  <p>intro to Event security and cleaning</p>
                  <a href="security_services" className="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <InformationPage /> */}

      <div className="right-image-decor"></div>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  What They Think <em>About Us</em>
                </h2>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-form">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required=""
                            style={{ backgroundColor: "rgba(250,250,250,0.3)" }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            style={{
                              backgroundColor: "rgba(250, 250, 250, 0.3)",
                            }}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>
                  More About <em>Security</em>
                </h2>
                <p>
                  Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                  leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in
                  porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                  <br />
                  <br />
                  If you need this contact form to send email to your inbox, you
                  may follow our{" "}
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/contact"
                    target="_parent"
                  >
                    contact
                  </a>{" "}
                  page for more detail.
                </p>
                <ul className="social">
                  <li>
                    <a href="https://fb.com/templatemo">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright &copy; 2020 Lava Landing Page
                  <a rel="nofollow" href="https://templatemo.com">
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
