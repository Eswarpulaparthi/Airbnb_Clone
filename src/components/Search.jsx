import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <>
      <button className="batch">
        <FontAwesomeIcon
          icon={faSearch}
          className="FontAwesomeIcon text-white-500"
        />
      </button>
    </>
  );
}
export default Search;
