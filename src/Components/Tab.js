import React, { useState } from "react";
import "./Tab.css";
const Tab = () => {
   const [toggleState, setToggleState] = useState(1);
   const toggleTab = (index) => {
     setToggleState(index);
   };
  return (
    <div>
      <div className="container">
        <div className="block-tabs">
          <button className={toggleState === 1? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Education</button>
          <button className={toggleState === 2? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Experience</button>
          <button className={toggleState === 3? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Skills</button>
        </div>
        <div className="content-tabs">
          <div className="content active-content">
            <h2>Education</h2>
            <hr />
            <p>
              <li>Computer Science</li>
              <li>College</li>
              <li>High School</li>
              <li>School</li>
            </p>
          </div>

          <div className="content active-content">
            <h2>Experience</h2>
            <hr />
            <p>
              <li>Worked at Google</li>
              <li>Worked at Facebook</li>
              <li>Worked at Netflix</li>
            </p>
          </div>

          <div className="content active-content">
            <h2>Skills</h2>
            <hr />
            <p>
              <li>HTML&CSS</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Tailwind</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
