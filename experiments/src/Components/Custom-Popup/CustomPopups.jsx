import React from "react";
import "./index.css";
import Popupstore from "./Store";
import Popup from "./Popup";

const CustomPopups = () => {

  const open =  Popupstore((state)=>state.Open);
  const Togglepopup  =  Popupstore((state)=>state.Togglepopup);

  return <div>
    <button onClick={Togglepopup}>PopUp</button>
    {
export default CustomPopups;
