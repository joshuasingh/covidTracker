import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "../Component/PieChart";
import mapConfig from "./mapdata.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StartPage = ({ mapData, colorMap }) => {
  var updateData = () => {
    let tempMapping = mapConfig.state_specific;

    let redColor = 255;
    for (let i = 1; i <= 37; i++) {
      let tempData = tempMapping[i + ""];

      if (tempData !== undefined) {
        let tempMapData = mapData[tempMapping[i + ""].name];

        if (tempMapData !== undefined) {
          tempMapping[
            i + ""
          ].description = `Confirmed: ${tempMapData.confirmed}`;

          var colorVal =
            "rgb(" +
            redColor +
            "," +
            colorMap[tempMapping[i + ""].name] +
            "," +
            colorMap[tempMapping[i + ""].name] +
            ")";

          console.log(tempMapping[i + ""].name, colorVal);
          tempMapping[i + ""].color = colorVal;
        }
      }
    }
    console.log(tempMapping);

    return;
  };

  useEffect(() => {
    updateData();

    const script2 = document.createElement("script");
    script2.innerHTML =
      "var simplemaps_countrymap_mapdata=" + JSON.stringify(mapConfig);
    script2.async = true;
    document.body.appendChild(script2);

    const script1 = document.createElement("script");
    script1.src = "countrymap.js";

    script1.async = true;
    document.body.appendChild(script1);

    // const script3 = document.createElement("script");
    // script3.innerHTML =
    //   "console.log('child values',document.getElementById('#map'))";
    // //script3.async = true;
    // document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  });

  return (
    <>
      <div className="mapClass">
        <div
          style={{ textAlign: "end", marginRight: "15px", color: "#456990" }}
        >
          **Shades of red show affected area from{" "}
          <text style={{ color: "red", fontWeight: "bold" }}>high</text> to{" "}
          <text style={{ color: "#F78D95", fontWeight: "bold" }}>low</text>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
