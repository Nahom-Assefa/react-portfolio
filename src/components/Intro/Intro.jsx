import React from "react";
import me from "../../img/IMG_clean.svg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, my name is</h2>
          <h1 className="i-name"> Nahom Assefa </h1>
          <h3 className="i-role"> Software Programmer</h3>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> MongoDB </div>
              <div className="i-title-item"> Express </div>
              <div className="i-title-item"> React </div>
              <div className="i-title-item"> Node </div>
            </div>
          </div>
          <br />
          <div className="i-desc">
            Full-stack web developer leveraging a background in Finance and
            compliance to provide unique perspectives on how end-users interact
            with websites and software platforms. Earned my certification in
            Full Stack Web Development from the University Of Minnesota.
            Innovative problem-solver who is passionate about developing web
            applications with a focus on backend-architecture, and the MERN tech
            stack.
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
