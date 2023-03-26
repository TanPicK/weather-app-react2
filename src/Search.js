import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row Search-form">
        <div className="col-sm-8">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control search-bar shadow-sm"
            autocomplete="off"
          />
        </div>
        <div className="col-sm-2 d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="submit"
            className="form-control Search-button shadow-sm"
          >
            <i className="Fa-solid Fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="col-sm-2 Current-button-column">
          <button
            type="button"
            className="btn btn-primary current-button shadow-sm"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
