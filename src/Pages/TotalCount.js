import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import NumberCard from "./NumberCard";
import CircularComponent from "../Component/LoaderComp/CircularComponent";
const TotalCount = () => {
  const [indiaCount, setIndiaCount] = useState(null);

  const { nationData } = useSelector((state) => state.NationValue);

  const dispatch = useDispatch();

  var getTotalData = () => {
    if (process.env.REACT_APP_ENV_ZONE === "production") {
      axios
        .get("https://salty-stream-94171.herokuapp.com/retrieveNation")
        .then((result, err) => {
          if (err) {
            alert("unable to get Values");
          } else {
            //setIndiaCount(result.data.result[0].Data);
            dispatch({
              type: "setNationData",
              payload: result.data.result[0].Data,
            });
          }
        });
      dispatch({
        type: "setNationData",
        payload: "pending",
      });
    } else {
      // setIndiaCount({
      //   recovered: 1222,
      //   active: 3444,
      //   deaths: 32432,
      //   confirmed: 24324,
      //   dayWise_confirmed: 455,
      //   dayWise_recovered: 311,
      //   dayWise_deaths: 99,
      // });

      dispatch({
        type: "setNationData",
        payload: {
          recovered: 1222,
          active: 3444,
          deaths: 32432,
          confirmed: 24324,
          dayWise_confirmed: 455,
          dayWise_recovered: 311,
          dayWise_deaths: 99,
        },
      });
    }
  };

  useEffect(() => {
    console.log("in useEffect of total", indiaCount);
    if (nationData === null) {
      getTotalData();
    }
  });

  return (
    <>
      {nationData !== null && nationData !== "pending" ? (
        <div className="totalCountClass">
          <NumberCard
            headerr={"Recovered Cases"}
            casesNum={nationData.recovered}
            perDayCase={nationData.dayWise_recoverd}
            textColor={"#13d146"}
          />
          <NumberCard
            headerr={"Confirmed Cases"}
            casesNum={nationData.confirmed}
            perDayCase={nationData.dayWise_confirmed}
            textColor={"red"}
          />
          <NumberCard headerr={"Active Cases"} casesNum={nationData.active} />
          <NumberCard
            headerr={"Total Deaths"}
            casesNum={nationData.deaths}
            perDayCase={nationData.dayWise_deaths}
            textColor={"#2e2e1f"}
          />
        </div>
      ) : (
        <CircularComponent heightSpec={"700px"} />
      )}
    </>
  );
};

export default TotalCount;
