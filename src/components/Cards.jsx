import React from "react";
import "./Card.css";
function Cards(props) {
  return (
    <>
      <div
        style={{
          height: 406,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
          gap: 2,
          width: "320px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 386,
            padding: 10,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 21,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 26,
                display: "inline-flex",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: 267.89,
                  borderRadius: 10,
                }}
                src={props.img}
              />
              <div
                style={{
                  height: 107,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: "-20px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {props.name}, {props.place}
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    wordWrap: "break-word",
                  }}
                >
                  3,127 kilometres away
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "300",
                    wordWrap: "break-word",
                  }}
                >
                  2-7 Jan
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  ${props.price} night
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
