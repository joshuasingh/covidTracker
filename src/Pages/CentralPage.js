import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import StartPage from "./StartPage";
import axios from "axios";
import PieChart from "../Component/PieChart";
import mapConfig from "./mapdata.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NavbarCom from "../Component/NavbarCom";
import TotalCount from "./TotalCount";
import { Container, Row, Col } from "react-bootstrap";
import CircularComponent from "../Component/LoaderComp/CircularComponent";
import StateWise from "../Component/StateWise";
import Piechart from "../Component/PieChart";
import DistrictWise from "../Component/DistrictWise";
import mapDatabase from "./DevData";
import Nation_StateData from "../Context/Nation_StateData";

const CentralPage = ({ setState }) => {
  const [mapData, setMapData] = useState(null);
  const [colorMap, setColorMap] = useState(null);
  const [apiCalled, setCall] = useState(false);

  const { stateData, colorData } = useSelector((state) => state.AllValues);

  const dispatch = useDispatch();
  var calculateColor = (allData) => {
    allData.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    });

    var largest = Object.values(allData[0])[0];

    var mainRes = {};
    let start = 0;

    allData.map((val, ind) => {
      //calculation for relative difference in color for states
      {
        var multi = (250 * Object.values(val)[0]) / largest;
        var res = Math.round((250 - multi) / 2);
        var temp = {};
      }
      mainRes[Object.keys(val)[0]] = start;
      start += 6;
    });

    console.log("mainColorData", mainRes);

    return mainRes;
  };

  var getCovidData = () => {
    if (process.env.REACT_APP_ENV_ZONE === "production") {
      console.log("api called");
      axios
        .get("https://salty-stream-94171.herokuapp.com/retrieveState")
        .then((result, err) => {
          if (err) {
            alert("error occured");
          } else {
            if (stateData === null)
              setMappingData({ data: result.data.result[0].Data });
          }
        });
    } else {
      //for development
      if (stateData === null) setMappingData({ data: mapDatabase });
    }
  };

  //set the main api data in state
  var setMappingData = (result) => {
    console.log("the result is", result.data);

    let temp = {};
    let temp_Confirmed = [];
    result.data.map((val) => {
      temp[val.state] = val;

      //setting confirmed cases data
      let tempObj = {};
      tempObj[val.state] = val.confirmed;
      temp_Confirmed.push(tempObj);
    });

    var cVal = calculateColor(temp_Confirmed);

    dispatch({
      type: "setColor_stateData",
      payload: { state: temp, color: cVal },
    });
  };

  useEffect(() => {
    console.log(
      "in useeffect of nation contexttttttttttttttttttttttttttt",
      stateData,
      colorData
    );

    if (stateData === null) {
      getCovidData();
    }
  });

  return (
    <>
      <div id="home">
        <NavbarCom />
        <Container fluid className="centralContainer">
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="titleClass ">
                <h2 className="headingFont">India's Total Tally:</h2>
              </div>
            </Col>
          </Row>
          <Row className="centralContainerRow justify-content-md-center">
            <Col
              lg={6}
              md={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="totalCountCols"
            >
              <TotalCount />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="mapCols"
            >
              {colorData === null || stateData === null ? (
                <CircularComponent heightSpec={"600px"} />
              ) : (
                <StartPage mapData={stateData} colorMap={colorData} />
              )}
            </Col>
          </Row>
          <Row id="stateData" style={{ marginTop: "100px" }}>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CentralPage;
