import React from "react";

const InformationPart = () => {
  return (
    <>
      <div className="left-image-decor"></div>

      <section className="section" id="promotion">
        <div className="container">
          <div className="row">
            <div
              className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/left-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <img src="assets/images/about-icon-01.png" alt="" />
                  <div className="text">
                    <h4>Vestibulum pulvinar rhoncus</h4>
                    <p>
                      Please do not redistribute this template ZIP file for a
                      download purpose. You may{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/contact"
                        target="_parent"
                      >
                        contact
                      </a>{" "}
                      us for additional licensing of our template or to get a
                      PSD file.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                  <img src="assets/images/about-icon-02.png" alt="" />
                  <div className="text">
                    <h4>Sed blandit quam in velit</h4>
                    <p>
                      You can{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tm-540-lava-landing-page"
                      >
                        download Lava Template
                      </a>{" "}
                      from our website. Duis viverra, ipsum et scelerisque
                      placerat, orci magna consequat ligula.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                  <img src="assets/images/about-icon-03.png" alt="" />
                  <div className="text">
                    <h4>Aenean faucibus venenatis</h4>
                    <p>
                      Phasellus in imperdiet felis, eget vestibulum nulla.
                      Aliquam nec dui nec augue maximus porta. Curabitur
                      tristique lacus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InformationPart;
