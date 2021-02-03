import React from "react";
import Loader from "react-loader-spinner";

const CircularComponent = ({ heightSpec }) => {
  return (
    <>
      <div className="loaderClass" style={{ minHeight: heightSpec }}>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    </>
  );
};

export default CircularComponent;
