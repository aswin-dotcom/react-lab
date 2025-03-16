import React, { useEffect } from "react";
import { useState } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("Hex");
  const [color, setColor] = useState("#00000");

  function randomnumbers(length) {
    return Math.floor(Math.random() * length);
  }

  function RGBgeneration() {
    const r = randomnumbers(256);
    const g = randomnumbers(256);
    const b = randomnumbers(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  function HEXgeneration() {
    const hexarray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexarray[randomnumbers(hexarray.length)];
    }
    setColor(hex);
  }

  useEffect(() => {
    if (colorType === "RGB") RGBgeneration();
    else HEXgeneration();
  }, [colorType]);

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div>
      <div>
        <button onClick={() => setColorType("RGB")}>Generate RGB</button>
        <button onClick={() => setColorType("HEX")}>Generate Hex</button>
        <button onClick={colorType==="RGB"?()=>RGBgeneration():()=>HEXgeneration()}>Generate Random</button>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          background:color
        }}
      ></div>
    </div>
  );
};

export default RandomColor;
