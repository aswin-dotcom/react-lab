import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ value, onchange }) => {
  const [currentTab, setCurrentTab] = useState(null);
  const changetab = (label) => {
    onchange(label);
    setCurrentTab(label);
  };
  return (
    <>
      <div>
        {value && value.length > 0
          ? value.map((data) => (
              <div key={data.label} onClick={() => changetab(data.label)}>
                {data.label}
              </div>
            ))
          : null}
      </div>
      <div>
        {value && value.length > 0
          ? value.map((data) =>
              data.label == currentTab ? <div>{data.content}</div> : null
            )
          : null}
      </div>
    </>
  );
};

export default Tabs;
