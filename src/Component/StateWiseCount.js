import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberCard from "../Pages/NumberCard";
import CircularComponent from "../Component/LoaderComp/CircularComponent";

var StateWiseCount = ({ stateData }) => {
  return (
    <>
      {stateData !== null ? (
        <div className="totalCountClass">
          <NumberCard
            headerr={"Recovered Cases"}
            casesNum={stateData.recovered}
            perDayCase={stateData.dayWise_recoverd}
            textColor={"#13d146"}
          />
          <NumberCard
            headerr={"Confirmed Cases"}
            casesNum={stateData.confirmed}
            perDayCase={stateData.dayWise_confirmed}
            textColor={"red"}
          />
          <NumberCard headerr={"Active Cases"} casesNum={stateData.active} />
          <NumberCard
            headerr={"Total Deaths"}
            casesNum={stateData.deaths}
            perDayCase={stateData.dayWise_deaths}
            textColor={"#2e2e1f"}
          />
        </div>
      ) : (
        <CircularComponent heightSpec={"700px"} />
      )}
    </>
  );
};

export default StateWiseCount;
