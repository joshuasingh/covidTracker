import React from "react";
import { Container, Navbar, Row, Col, Dropdown } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Container className="navContainer" fluid>
      <Navbar expand="xl" variant="light">
        <div className="navBarCls">
          <h2
            style={{
              flex: 2,
              marginLeft: "2vw",
              cursor: "pointer",
              marginBottom: "1px",
            }}
            className="headingFont navItemColor"
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Covid Updates
            </Link>
          </h2>
          <div className="mobileToggle">
            <Dropdown drop="left">
              <Dropdown.Toggle
                variant="info"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link
                    style={{ display: "inline-block", width: "100%" }}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    style={{ display: "inline-block", width: "100%" }}
                    activeClass="active"
                    to="stateData"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    State Data
                  </Link>
                </Dropdown.Item>
                {/* <Dropdown.Item>
                  <Link1.Link to="/State">State</Link1.Link>
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navContent">
            <div>
              <h5 className="headingFont navLink navItemColor">
                <Link1 to="/Nation">Nation Data</Link1>
              </h5>
            </div>
            <div>
              <h5 className="headingFont navLink navItemColor">
                <Link1 to="/State">State Data</Link1>
              </h5>
            </div>
          </div>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavbarComp;
