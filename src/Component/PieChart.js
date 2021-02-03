import React, { useEffect, useState } from "react";

import CanvasJSReact from "./canvasjs.react";
import { FormHelperText } from "@material-ui/core";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ stateVal, dataValues }) => {
  const [chartVal, setChartVal] = useState({
    stateVal: null,
    districtInfo: [],
  });

  var calculateTop = () => {
    let tempData = [];

    dataValues.sort((a, b) => {
      return b.confirmed - a.confirmed;
    });

    let len = dataValues.length < 10 ? dataValues.length : 10;

    for (let i = 0; i < len; i++) {
      let mapVal = {};
      mapVal["y"] = dataValues[i].confirmed;
      mapVal["label"] = dataValues[i].name;
      tempData.push(mapVal);
    }

    setChartVal({ stateVal: stateVal, districtInfo: tempData });
    return;
  };

  useEffect(() => {
    if (chartVal.stateVal !== stateVal) {
      calculateTop();
    }
  });

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Top 10 Worst Hit Districts",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        radius: "80%",
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}",
        dataPoints: chartVal.districtInfo,
      },
    ],
  };

  return (
    <>
      <div className="pieChartClass">
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    </>
  );
};

export default PieChart;
