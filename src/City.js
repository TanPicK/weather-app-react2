import React from "react";
import "./City.css";
import Emoji from "./Emoji";

export default function City() {
  return (
    <div>
      <br />
      <div className="row City">
        <div className="col-8">
          <h1 className="pt-4 ps-1">Zurich</h1>
        </div>
        <div className="col-4">
          <Emoji />
        </div>
      </div>
    </div>
  );
}
