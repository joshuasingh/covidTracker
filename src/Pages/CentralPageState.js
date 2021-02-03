import React, { useState, useEffect } from "react";
import StartPage from "./StartPage";
import { useSelector, useDispatch } from "react-redux";
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

const CentralPageState = () => {
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
    console.log(
      "getting the covid data" + mapDatabase,
      "and",
      process.env.REACT_APP_ENV_ZONE
    );

    if (process.env.REACT_APP_ENV_ZONE === "production") {
      axios
        .get("https://salty-stream-94171.herokuapp.com/retrieveState")
        .then((result, err) => {
          if (err) {
            alert("error occured");
          } else {
            setMappingData({ data: result.data.result[0].Data });
          }
        });
    } else {
      //for development
      setMappingData({ data: mapDatabase });
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

    dispatch({ type: "setStateData", payload: temp });
    dispatch({ type: "setColorData", payload: cVal });
  };

  useEffect(() => {
    console.log("in useeffect of state contexttttttttttttttttttttttttttt");

    if (stateData === null) {
      getCovidData();
    }
  });

  return (
    <>
      <div id="home">
        <NavbarCom />
        <Container fluid className="centralContainer">
          <Row
            className="centralContainer_Row_title"
            style={{ marginTop: "5px" }}
          >
            <Col sm={12} md={12} lg={12}>
              <div className="titleClass">
                <h2>State Wise Tally:</h2>
              </div>
            </Col>
          </Row>

          {stateData === null ? (
            <Row className="centralContainerRow justify-content-md-center">
              <Col
                md={12}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularComponent heightSpec={"600px"} />
              </Col>
            </Row>
          ) : (
            <StateWise mapData={stateData} />
          )}

          <Row id="districtData" style={{ marginTop: "100px" }}>
            <Col>
              <div></div>
            </Col>
          </Row>
          <Row className="centralContainer_Row_title">
            <Col sm={12} md={12} lg={12}>
              <div className="titleClass">
                <h2>District Wise Tally:</h2>
              </div>
            </Col>
          </Row>

          {stateData === null ? (
            <Row className="centralContainerRow justify-content-md-center">
              <Col
                md={12}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularComponent heightSpec={"600px"} />
              </Col>
            </Row>
          ) : (
            <DistrictWise mapData={stateData} />
          )}

          <Row>
            <Col>
              <div className="emptySpace"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CentralPageState;
