import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DistrictWiseCount from "./DistrictWiseCount";

const DistrictWise = ({ mapData }) => {
  const [districtData, setDistrictData] = useState({});
  const [districtSel, setDistrictSel] = useState(null);

  var districtRef = null;

  const tempData = {
    recovered: "--",
    active: "--",
    deaths: "--",
    confirmed: "--",
  };

  var calculateDistrictData = () => {
    let distt_Data = [];

    Object.values(mapData).map((val) => {
      let tempDist = val.districtData;

      tempDist.map((val) => {
        distt_Data[val.id] = val;
      });
    });

    setDistrictData(distt_Data);
    return;
  };

  //get districtData for the selected state
  var getSelected_district = (stateVal) => {
    let tempDistrictData = {};

    if (stateVal === "--") {
      console.log("non state selected");
      setDistrictSel(null);
      setDistrictData(tempDistrictData);
      return;
    }

    console.log("in state select", mapData[stateVal]);
    mapData[stateVal].districtData.map((val) => {
      tempDistrictData[val.id] = val;
    });

    console.log("selected district data", tempDistrictData);
    districtRef.value = "--";
    setDistrictSel(null);
    setDistrictData(tempDistrictData);
    return;
  };

  var updateDistrictData = (e) => {
    if (e.target.value === "--") {
      setDistrictSel(null);
    } else {
      setDistrictSel(e.target.value);
    }
  };

  useEffect(() => {
    console.log("district data", districtData);

    if (Object.keys(districtData).length === 0) {
      //calculateDistrictData();
    }
  });

  return (
    <>
      <Row className="centralContainerRow justify-content-md-center">
        <Col
          md={6}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="districtWiseClass">
            <div style={{ marginTop: "90px", width: "85%" }}>
              <div style={{ textAlign: "center" }} className="DistrictHead">
                <h3>Select the District as per the State</h3>
              </div>
              <div className="DistrictContent">
                <Container style={{ marginTop: "60px" }} fluid>
                  <Row style={{ marginTop: "15px" }}>
                    <Col
                      style={{ textAlign: "center" }}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <h4 style={{ display: "inline-block" }}>State: </h4>
                    </Col>
                    <Col
                      sm={12}
                      md={8}
                      lg={8}
                      xl={8}
                      className="stateSelection"
                    >
                      <select
                        name="cars"
                        id="cars"
                        className="selectClass"
                        onChange={(e) => {
                          getSelected_district(e.target.value);
                        }}
                      >
                        <option value="--" selected>
                          --
                        </option>
                        {Object.keys(mapData).map((val) => {
                          return <option value={val}>{val}</option>;
                        })}
                      </select>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px" }}>
                    <Col
                      style={{ textAlign: "center" }}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <h4 style={{ display: "inline-block" }}>District: </h4>
                    </Col>
                    <Col
                      sm={12}
                      md={8}
                      lg={8}
                      xl={8}
                      className="districtSelection"
                    >
                      <select
                        name="cars"
                        id="cars"
                        className="selectClass"
                        ref={(e) => {
                          districtRef = e;
                        }}
                        onChange={(e) => {
                          updateDistrictData(e);
                        }}
                      >
                        <option value="--" selected>
                          --
                        </option>

                        {Object.keys(districtData).map((val) => {
                          return (
                            <option value={val}>
                              {districtData[val].name}
                            </option>
                          );
                        })}
                      </select>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </Col>
        <Col className="districtCountAll">
          <DistrictWiseCount
            districtData={
              districtSel === null ? tempData : districtData[districtSel]
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default DistrictWise;

{
  /* <div className="districtWiseClass">
        <Container style={{ height: "100%" }}>
          <Row>
            <Col>
              <div>
                <select
                  name="cars"
                  id="cars"
                  onChange={(e) => {
                    getSelected_district(e.target.value);
                  }}
                >
                  <option value="--" selected>
                    --
                  </option>
                  {Object.keys(mapData).map((val) => {
                    return <option value={val}>{val}</option>;
                  })}
                </select>
                <select
                  name="cars"
                  id="cars"
                  ref={(e) => {
                    districtRef = e;
                  }}
                  onChange={(e) => {
                    e.target.value === "--"
                      ? setDistrictSel(null)
                      : setDistrictSel(e.target.value);
                  }}
                >
                  <option value="--" selected>
                    --
                  </option>
                  {Object.keys(districtData).map((val) => {
                    return (
                      <option value={val}>{districtData[val].name}</option>
                    );
                  })}
                </select>
              </div>
            </Col>
            <Col>
              <DistrictWiseCount
                districtData={
                  districtSel === null ? tempData : districtData[districtSel]
                }
              />
            </Col>
          </Row>
        </Container>
      </div> */
}
