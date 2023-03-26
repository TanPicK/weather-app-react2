import React from "react";

export default function HumidityWind() {
  return (
    <div className="col-sm-3 ps-0 pt-3">
      <ul className="Humidity-wind">
        <li>
          Humidity: <span>69</span>%
        </li>
        <li>
          Wind: <span>5</span> km/h
        </li>
      </ul>
    </div>
  );
}
