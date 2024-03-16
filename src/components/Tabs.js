import React, { useState } from "react";
// import tabs from "./Tabs.module.css";
import "./Tabs.css";
import TabBtn from "./TabBtn";

const Tabs = ({ tabDatas }) => {
  const [num, setNum] = useState(tabDatas[0].id);
  // 1, 2, 3, 4,
  return (
    <div
      className="tabs-container"
      // style={ {tabs.tabs_container}}
    >
      <ul className="tab-btns">
        {tabDatas.map((tab, index) => (
          <li
            onClick={() => {
              setNum(index + 1);
            }}
            className={num === tab.id ? "active" : ""}
          >
            {tab.btn_title}
          </li>
        ))}
      </ul>
      <div className="tab-contents">
        {tabDatas.map((content) => (
          <div style={{ display: num === content.id ? "block" : "none" }}>
            {content.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
