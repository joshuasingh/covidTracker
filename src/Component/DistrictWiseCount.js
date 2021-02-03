import React from "react";
import NumberCard from "../Pages/NumberCard";
import CircularComponent from "../Component/LoaderComp/CircularComponent";

const DistrictWiseCount = ({ districtData }) => {
  return (
    <>
      {districtData !== null ? (
        <div className="totalCountClass">
          <NumberCard
            headerr={"Recovered Cases"}
            casesNum={
              districtData.recovered === null ? "--" : districtData.recovered
            }
            perDayCase={districtData.dayWise_recoverd}
            textColor={"#13d146"}
          />
          <NumberCard
            headerr={"Confirmed Cases"}
            casesNum={
              districtData.confirmed === null ? "--" : districtData.confirmed
            }
            perDayCase={districtData.dayWise_confirmed}
            textColor={"red"}
          />
          <NumberCard
            headerr={"Active Cases"}
            casesNum={
              districtData.active === null || districtData.active === undefined
                ? "--"
                : districtData.active
            }
          />
          <NumberCard
            headerr={"Total Deaths"}
            casesNum={districtData.deaths === null ? "--" : districtData.deaths}
            perDayCase={districtData.dayWise_deaths}
            textColor={"#2e2e1f"}
          />
        </div>
      ) : (
        <CircularComponent heightSpec={"700px"} />
      )}
    </>
  );
};

export default DistrictWiseCount;
