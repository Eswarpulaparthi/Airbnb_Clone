import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
import HandleSignup from "./HandleSignup";
function Navbar({ handleExp, handleStays, select, visibility, toggle }) {
  return (
    <>
      <div className="navbar flex justify-between">
        <div className="nav-logo ">
          <p>airbnb</p>
        </div>
        <div className="stays">
          <button
            className="st"
            onClick={handleStays}
            style={{
              color: select.stays && "black",
              backgroundColor: select.stays && "white",
            }}
          >
            Stays
          </button>
          <button
            className="exp"
            onClick={handleExp}
            style={{
              color: select.exp && "black",
              backgroundColor: select.exp && "white",
            }}
          >
            Experiencies
          </button>
        </div>
        <div className="parent flex justify-around">
          <div className="home">Airbnb your home</div>
          <div className="icon flex justify-around">
            <FontAwesomeIcon icon={faGlobe} className="text-grey-500" />
          </div>
          <div onClick={visibility} className="signup flex justify-around">
            <FontAwesomeIcon
              icon={faBars}
              className="FontAwesomeIcon text-grey-500"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="FontAwesomeIcon text-grey-500"
            />
          </div>
          {toggle && (
            <div className="handle-signup">
              <HandleSignup />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
