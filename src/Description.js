import React from "react";
import "./Description.css";
import Overview from "./Overview";
import MainTemperature from "./MainTemperature";
import HumidityWind from "./HumidityWind";

export default function Description() {
  return (
    <div className="Container">
      <div className="row Todays-weather">
        <Overview />
        <MainTemperature />
        <HumidityWind />
      </div>
    </div>
  );
}
