import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import "./components/Card.css";
import data from "./dtat";
function App() {
  function createData(obj) {
    return (
      <Cards
        img={obj.img}
        place={obj.place}
        name={obj.name}
        price={obj.price}
      />
    );
  }
  const [select, setSelect] = useState({ stays: true, exp: false });
  const [toggle, setToggle] = useState(false);
  function visibility() {
    setToggle((prev) => !prev);
  }
  function handleStays() {
    setSelect({
      stays: true,
      exp: false,
    });
  }
  function handleExp() {
    setSelect({
      stays: false,
      exp: true,
    });
  }
  return (
    <>
      <div>
        <Navbar
          handleExp={handleExp}
          handleStays={handleStays}
          select={select}
          visibility={visibility}
          toggle={toggle}
        />
        <Menu select={select} />

        <div
          style={{
            marginTop: "8rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", 
            padding: "10px 40px",
          }}
        >
          {data.map(createData)}
        </div>
      </div>
    </>
  );
}

export default App;
