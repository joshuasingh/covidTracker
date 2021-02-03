import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { Container, Row, Col } from "react-bootstrap";
import StateWiseCount from "./StateWiseCount";
import PieChart from "./PieChart";

const StateWise = ({ mapData }) => {
  const tempData = {
    recovered: "--",
    active: "--",
    deaths: "--",
    confirmed: "--",
  };
  const [selection, setSelection] = useState(null);

  useEffect(() => {});

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={{ offset: "4" }} style={{ marginTop: "5px" }}>
          <div className="stateSelectClass">
            <h4 style={{ display: "inline-block" }}>Select A State: </h4>
            {"     "}
            <select
              name="cars"
              id="cars"
              className="selectClass"
              size="1"
              onChange={(e) => {
                e.target.value === "--"
                  ? setSelection(null)
                  : setSelection(e.target.value);
              }}
            >
              <option value="--" selected>
                --
              </option>
              {Object.keys(mapData).map((val) => {
                return <option value={val}>{val}</option>;
              })}
            </select>
          </div>
        </Col>
      </Row>
      <Row className="centralContainerRow justify-content-md-center">
        <Col
          md={6}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StateWiseCount
            stateData={selection === null ? tempData : mapData[selection]}
          />
        </Col>
        <Col md={6} sm={12}>
          <PieChart
            stateVal={selection}
            dataValues={
              selection === null ? [] : mapData[selection].districtData
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default StateWise;

// <div className="stateWiseClass">
//         <Container style={{ border: "solid", width: "100%" }}>
//           <Row>
//             <Col>
//               <div style={{}}>
//                 <select
//                   name="cars"
//                   id="cars"
//                   onChange={(e) => {
//                     e.target.value === "--"
//                       ? setSelection(null)
//                       : setSelection(e.target.value);
//                   }}
//                 >
//                   <option value="--" selected>
//                     --
//                   </option>
//                   {Object.keys(mapData).map((val) => {
//                     return <option value={val}>{val}</option>;
//                   })}
//                 </select>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col sm={12} md={6}>
//               <StateWiseCount
//                 stateData={selection === null ? tempData : mapData[selection]}
//               />
//             </Col>
//             <Col sm={12} md={6}>
//               <PieChart
//                 stateVal={selection}
//                 dataValues={
//                   selection === null ? [] : mapData[selection].districtData
//                 }
//               />
//             </Col>
//           </Row>
//         </Container>
//       </div>
