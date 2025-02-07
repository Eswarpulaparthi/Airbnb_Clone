import React, { useState } from "react";
import "./Menu.css";
import Search from "./Search";
import Add from "./Add";
function Menu({ select }) {
  return (
    <>
      <div class="search-bar">
        <div>
          <span>Where</span>
          <p>Search destinations</p>
        </div>
        <div>
          <span>Check in</span>
          <p>Add dates</p>
        </div>
        {!select.exp && <Add />}

        <div style={{ borderRight: select.exp && "none" }}>
          <span>Who</span>
          <p>Add guests</p>
        </div>
        <button>
          <Search />
        </button>
      </div>
      
    </>
  );
}
export default Menu;
