import React, { useState } from "react";
import List from "./Menu-list";

const Item = ({ item }) => {
  const [togglelabel, setTogglelabel] = useState({});
  function handlechildren(item) {
    setTogglelabel({
      ...togglelabel,
      [item]: !togglelabel[item],
    });
  }

  return (
    <div>
      <h1>
        {item.label}
        <span style={{ cursor: "pointer" }}>
          {item && item.children && item.children.length > 0 ? (
            <span onClick={() => handlechildren(item.label)}>
              {togglelabel[item.label] ? "-" : "+"}
            </span>
          ) : null}
        </span>
      </h1>
      {item &&
      item.children &&
      item.children.length > 0 &&
      togglelabel[item.label] ? (
        <List menus={item.children} />
      ) : null}
    </div>
  );
};

export default Item;
